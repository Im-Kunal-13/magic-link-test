import React from "react";

import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useForm } from "react-hook-form";
// First import magic sdk
import { Magic } from "magic-sdk";
import { useRouter } from "next/router";

alert("You nigga tryna login with the wrong email!")
type Props = {};

const LoginPage = (props: Props) => {
  const router = useRouter();
  // @ts-ignore
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email }: { email: string }) => {
    // Initializing the magic sdk here.
    const magic = new Magic(
      process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY || ""
    );
    // Starting the login process
    const didToken = await magic.auth.loginWithMagicLink({ email });
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + didToken,
      },
    });

    console.log(res.status)

    if (res.status === 200) {
      router.push("/");
    } else {
      alert("You nigga tryna login with the wrong email!");
    }
  };
  return (
    <Container maxWidth="xs">
      <h1>Hello</h1>
      {/* @ts-ignore */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
          <TextField
            variant="outlined"
            label="email"
            fullWidth
            autoComplete="email"
            autoFocus
            {...register("email", {
              required: "Required field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors?.email}
            //@ts-ignore
            helperText={errors?.email ? errors.email.message : null}
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login In / Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default LoginPage;

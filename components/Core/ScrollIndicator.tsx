import React, { useEffect, useState } from "react";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { RingProgress } from "@mantine/core";

const ScrollIndicator = () => {
  return (
    <div className="bottom-7 right-9 m-auto z-20 fixed h-fit w-fit rounded-full shadow-whity">
      <RingProgress
        size={55}
        thickness={3}
        sections={[{ value: 40, color: "#6D31A7" }]}
        label={<HiOutlineArrowSmUp size={30} className="m-auto" />}
      />
    </div>
  );
};

export default ScrollIndicator;

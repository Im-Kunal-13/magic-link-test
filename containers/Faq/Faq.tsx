import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import { FaPlus, FaMinus } from "react-icons/fa";
import styles from "./Faq.module.scss";
import { faqs } from "../../assets/links";

const Faq = () => {
  const [accordionState, setAccordionState] = useState<string | null>(null);
  return (
    <div
      className="flex items-center flex-col gap-10 relative px-2 z-10 xl1800:px-40 xl2000:px-60 xl2400:px-96 lg1100:mb-40 mb-16"
      id="faq"
    >
      <div className="flex flex-col items-center gap-8 z-10">
        <h1
          className={`sm800:text-5xl sm400:text-4xl text-3xl tracking-wide font_exo2 font-bold ${styles.title}`}
        >
          FAQs
        </h1>
        <p className="font_sfpro font-semibold tracking-wider sm600:text-xl text-lg text-gray-400 ">
          How can we help ?
        </p>
      </div>
      <Accordion
        classNames={{
          item: "bg-introCardBg rounded-lg border-0",
          control: "hover:bg-introCardBg hover:rounded-lg",
          chevron: "hidden",
        }}
        className="z-10 lg1100:w-75% md800:w-85% w-full"
        value={accordionState}
        onChange={setAccordionState}
        transitionDuration={500}
      >
        {faqs.map((faq) => (
          <Accordion.Item value={faq.value} className="mb-7" key={faq.value}>
            <Accordion.Control>
              <div className={`flex items-center gap-5`}>
                {accordionState === faq.value ? (
                  <FaMinus size={25} color="#FE06C7" />
                ) : (
                  <FaPlus size={25} color="#FE06C7" />
                )}

                <span className="text-white font_sfpro sm600:text-2xl text-base">
                  {faq.ques}
                </span>
              </div>
            </Accordion.Control>
            <Accordion.Panel>
              <div className="flex items-center gap-0 relative rounded overflow-hidden ml-11">
                <div className="bg-themeCyan3 h-full w-3px absolute left-0" />
                <span
                  className="text-gray-400 font_sfpro sm600:text-base text-xs tracking-wider leading-relaxed pl-3"
                  style={{ maxWidth: "400px" }}
                >
                  {faq.ans}
                </span>
              </div>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
      <div className="bg-themePink1 bg-opacity-40 absolute rounded-r-full m-auto top-0 bubble_blur left-0" />
      <div className="bg-themeCyan3 bg-opacity-40 absolute rounded-l-full m-auto top-0 right-0 bubble_blur" />
    </div>
  );
};

export default Faq;

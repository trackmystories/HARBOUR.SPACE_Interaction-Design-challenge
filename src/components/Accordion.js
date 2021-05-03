import * as React from "react";
import { useState, useRef } from "react";
import "./styles/accordion.css";
import Plus from "./Plus";

type AccordionProps = {
  title: string,
  content: any,
};

export default function Accordion(props: AccordionProps) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div id="accordion__section">
      <div className="accordion__section-rows">
        <p className="accordion__title">{props.title}</p>
        <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
          <Plus className={`${setRotate}`} width={10} fill={" #959595"} />
        </button>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

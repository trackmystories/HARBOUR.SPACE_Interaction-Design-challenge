import * as React from "react";
import { useState, useRef } from "react";
import "./styles/accordion.css";

type AccordionProps = {
  title: string,
  content: any,
};

export default function Accordion(props: AccordionProps) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("plus");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(setRotate === "active" ? "plus" : "minus");
  }

  return (
    <div id="accordion__section">
      <div className="accordion__section-rows">
        <p className="accordion__title">{props.title}</p>

        <button className="morph" onClick={toggleAccordion}>
          <span className={setActive ? "plus" : "minus"}></span>
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

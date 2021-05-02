import * as React from "react";
import { useState, useRef } from "react";
import "./styles/button.css";
import Chevron from "./Chevron";

type ButtonProp = {
  title: string,
  content: string,
};

export default function Button(props: ButtonProp) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("button__icon");
  const content = useRef(null);

  function toggleButton() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "button__icon" : "button__icon rotate"
    );
  }

  return (
    <div>
      <button className={`button ${setActive}`} onClick={toggleButton}>
        <div className="button__row">
          <p className="button__title">{props.title}</p>
          <Chevron className={`${setRotate}`} width={10} fill={"#333"} />
        </div>
        <div
          ref={content}
          style={{ maxHeight: `${setHeight}` }}
          className="button__content"
        >
          <div
            className="button__text"
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </button>
    </div>
  );
}

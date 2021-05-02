import * as React from "react";
import "./styles/aprenticeship.css";
import circleImg from "../assets/circle-pattern.svg";

export default function Aprenticeship() {
  return (
    <div id="aprenticeship_section">
      <div className="aprenticeship">
        <div className="">
          <img className="" src={circleImg} alt="circle" />
        </div>

        <div>
          <h3>About the apprenticeship</h3>
          <p>
            Our scholarships are designed to give talented and driven young
            people from any background access to top-class education, experience
            and network. We offer a fully-funded master’s degree alongside an
            apprenticeship and a guaranteed job upon graduation.
          </p>
        </div>
      </div>
    </div>
  );
}

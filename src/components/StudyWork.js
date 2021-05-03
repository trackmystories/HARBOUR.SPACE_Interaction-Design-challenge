import React from "react";
import "./styles/studyWork.css";

type StudyWorkProps = {
  title: string,
  hours: string,
  desc: string,
};

export default function StudyWork(props: StudyWorkProps) {
  return (
    <div>
      <div className="commitment__section-study-work-commitment">
        <div className="commitment__section-study-work-padding">
          <p className="commitment__section-study-work-text">{props.title}</p>
          <p className="commitment__section-study-work-hours">{props.hours}</p>
        </div>
        <div className="commitment__section-study-work-hours-border" />
        <div className="commitment__section-study-work-padding">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

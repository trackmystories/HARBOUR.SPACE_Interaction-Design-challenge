import * as React from "react";
import "./styles/carousalItem.css";

type CarousalProps = {
  name: string,
  text: string,
  program_name: string,
  profile_picture: string | any,
  education: string,
  country_flag: string | any,
};

export default function CarousalItem(props: CarousalProps) {
  return (
    <div>
      <div className="carousalitem__container">
        <div className="carousalitem__container-upper">
          <div className="carousalitem__container-upper-image-position">
            <img
              className="carousalitem__container-profile-image"
              src={props.profile_picture}
              alt="profile_picture"
            />
            <img
              className="carousalitem__container-country-image"
              src={props.country_flag}
              alt="country_flag"
            />
          </div>

          <div className="carousalitem__container-profile_info">
            <h4>{props.name}</h4>
            <p>{props.program_name}</p>
          </div>
        </div>

        <div className="carousalitem__container-lower">
          <div>
            <h4>{props.text}</h4>
          </div>
          <div>
            <p>Education : {props.education}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

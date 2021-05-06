import * as React from "react";
import { useState, useEffect } from "react";
import "../screens/styles/carousal.css";
import CarousalItem from "../components/CarousalItem";

const FirstThree = (props) => {
  const [data, setData] = useState([]);
  const [current] = useState(0);

  let firstThree = data.slice(current, current + 4);

  useEffect(() => {
    fetch(
      "https://stage.harbour.space/api/v1/scholarship_pages/data-science-apprenticeship-zeptolab"
    )
      .then((response) => response.json())
      .then((json) =>
        setData(
          json.testimonials.filter((item) => {
            return item.id;
          })
        )
      )
      .catch((error) => console.error(error));
  }, []);

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  return (
    <div id="carousal__section">
      <div className="carousal__container">
        {firstThree.map((item) => {
          return (
            <div>
              <button
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <CarousalItem
                  name={item.name}
                  text={item.text}
                  program_name={item.program_name}
                  profile_picture={item.profile_picture.src}
                  education={item.education}
                  country_flag={item.country.country_flag.src}
                />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FirstThree;

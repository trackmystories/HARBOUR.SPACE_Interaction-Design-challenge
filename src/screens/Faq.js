import * as React from "react";
import Accordion from "../components/Accordion";
import Button from "../components/Button";
import "./styles/faq.css";

export default function Faq() {
  return (
    <div id="faq_section">
      <div className="faq">
        <div className="faq__left">
          <p>Frequently asked questions</p>
        </div>

        <div className="faq__right">
          <div className="faq__right-inner">
            <div>
              <p>Filter by : </p>
            </div>
            <div>
              <Button
                title="Program Conditions"
                content="<p>All</p></br>
               <p>Admissions</p></br>
               <p>Harbour.Space</p></br>
               <p>SCG</p></br>
               <p>Living in Bangkok</p>"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Accordion
          title="Program Conditions"
          content="
        <p>What are my obligations? The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme.</p> </br> <p>The best applicants receive an offer from our industrial partners at the beginning of their programmes.Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand.
         </p>
        </br>
         <p>Together we insure students get the best knowledge about the current job market opportunities. We offer our students paid internships options during studies jointly with our industrial partners.Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.</p>"
        />

        <Accordion
          title="Program Conditions"
          content="
        <p>What are my obligations? The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme.</p> </br> <p>The best applicants receive an offer from our industrial partners at the beginning of their programmes.Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand.
         </p>
        </br>
         <p>Together we insure students get the best knowledge about the current job market opportunities. We offer our students paid internships options during studies jointly with our industrial partners.Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.</p>"
        />

        <Accordion
          title="Program Conditions"
          content="
        <p>What are my obligations? The majority of our students receive numerous job offers at the end of the second academic year of their Bachelor's programme and at the end of the first academic year of their Master's programme.</p> </br> <p>The best applicants receive an offer from our industrial partners at the beginning of their programmes.Harbour.Space is highly recognized among innovative employers and is strategic partner of B.Grimm multi- industry corporation with 140 years of history in Thailand.
         </p>
        </br>
         <p>Together we insure students get the best knowledge about the current job market opportunities. We offer our students paid internships options during studies jointly with our industrial partners.Employers that hired graduates of Harbour.Space in the past include Google, IBM, Accenture, Typeform, Frog, and other tech centric companies. Our industry specific employability report could be provided to you separately during the admission process.</p>"
        />
      </div>
    </div>
  );
}

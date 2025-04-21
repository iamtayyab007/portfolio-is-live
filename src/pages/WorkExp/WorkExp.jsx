import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";

export default function WorkExp() {
  return (
    <>
      <div className="work" id="work">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            Work Experience
          </h2>
          <hr />
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "silver", color: "black" }}
            contentArrowStyle={{ borderRight: "orangered" }}
            date="1+ year Experience"
            iconStyle={{ background: "rgb(33, 37, 243)", color: "#fff" }}
            icon={<SiReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Mern Stack Developer (ReactJS/NextJS/Typescript)
            </h3>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

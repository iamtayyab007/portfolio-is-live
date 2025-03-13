import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechstackList";

export default function Techstack() {
  return (
    <>
      <div className="container techstack" id="techstack">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Technologies Stack
        </h2>
        <hr />
        <p className="pb-3 text-center">
          including programming Languages, frameworks, databases, frontend and
          backend tools, and APIs
        </p>

        <div className="row">
          {TechstackList.map((tech) => (
            <div className="col-md-4" key={tech._id}>
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex justify-content-center">
                      <div className="align-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className="media-body">
                        <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

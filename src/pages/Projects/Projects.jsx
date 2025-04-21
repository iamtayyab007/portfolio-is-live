import React from "react";
import "./Projects.css";
import coinBounce from "../../assets/images/9520.jpg";
import feedbackImage from "../../assets/images/feedback.png";
import ChatIcon from "../../assets/images/chaticonNew.png";
import expenseTracker from "../../assets/images/expenseTracker.png";
export default function Projects() {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />

        <div className="row" id="ads">
          <div className="col-md-3">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={feedbackImage} alt="Project 1" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">NextJS</span>
                <span className="card-detail-badge">Typescript</span>
                <span className="card-detail-badge">Shadcn</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>

              <div className="card-body m-auto">
                <div className="ad-title ">
                  <h5 className="text-uppercase">True Feedback Platform</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/iamtayyab007/mystry-message"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={ChatIcon} alt="Project 2" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">NextJS</span>
                <span className="card-detail-badge">Typescript</span>
                <span className="card-detail-badge">Websockets</span>
                <span className="card-detail-badge">Tailwind/daisyUI</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>

              <div className="card-body m-auto">
                <div className="ad-title ">
                  <h5 className="text-uppercase">Realtime Chat App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/iamtayyab007/Chat-App-Next"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={coinBounce} alt="Project 3" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>

              <div className="card-body m-auto">
                <div className="ad-title ">
                  <h5 className="text-uppercase">Coin Bounce</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/iamtayyab007/coin-bounce"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card rounded">
              <div className="card-image">
                <img src={expenseTracker} alt="Project 4" />
              </div>
              <div className="card-image-overly m-auto mt-3">
                <span className="card-detail-badge">React</span>
                <span className="card-detail-badge">Context Api</span>
                <span className="card-detail-badge">Tailwind</span>
                <span className="card-detail-badge">LocalStorage</span>
              </div>

              <div className="card-body m-auto">
                <div className="ad-title ">
                  <h5 className="text-uppercase">Expense Tracker</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/iamtayyab007/Expense-Tracker"
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import "./Projects.css";
import coinBounce from "../../assets/images/9520.jpg";

export default function Projects() {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          voluptatum accusamus ut sit nihil dolorum, provident repellendus eos
          quos sed omnis ducimus ipsum officia cumque sequi veniam nesciunt
          cupiditate. Laboriosam! Dolor aperiam reiciendis molestias enim velit
          mollitia dolorum, amet suscipit non neque voluptatum labore ab fuga
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={coinBounce} alt="Project 1" />
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
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={coinBounce} alt="Project 1" />
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
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={coinBounce} alt="Project 1" />
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
                <a className="ad-btn" href="#">
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

import React from "react";
import star from "../assets/image/png/star.png";
import recat from "../assets/image/png/recat.png";
function Constructor() {
  return (
    <>
      <section className="bg_light py-lg-5 py-4">
        <div className="container">
          <div className="line"></div>
          <div className="row align-items-center justify-content-center py-lg-5 ">
            <div className="col-lg-3 col-sm-6">
              <div className="d-flex justify-content-center pt-lg-0 pt-4">
                <h2 className="font_roboto fw-bold fs_24 color_light_sky ">
                  Constructor
                </h2>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="d-flex justify-content-evenly pt-lg-0 pt-4">
                <span>
                  <p className="fs_13 fw-bold font_roboto color_light_sky ">
                    Home
                  </p>
                  <p className="fs_13 fw-bold font_roboto color_light_sky m-0">
                    About
                  </p>
                </span>
                <span>
                  <p className="fs_13 fw-bold font_roboto color_light_sky ">
                    Gallery
                  </p>
                  <p className="fs_13 fw-bold font_roboto color_light_sky m-0">
                    Barbers
                  </p>
                </span>
                <span>
                  <p className="fs_13 fw-bold font_roboto color_light_sky ">
                    Services
                  </p>
                  <p className="fs_13 fw-bold font_roboto color_light_sky m-0">
                    Contacts
                  </p>
                </span>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="pt-lg-0 pt-4">
                <span className="d-flex gap-2 justify-content-lg-start justify-content-center">
                  <a href="#">
                    <img src={star} alt="star" />
                  </a>
                  <a href="#">
                    <img src={star} alt="star" />
                  </a>
                  <a href="#">
                    <img src={star} alt="star" />
                  </a>
                  <a href="#">
                    <img src={star} alt="star" />
                  </a>
                  <a href="#">
                    <img src={star} alt="star" />
                  </a>
                </span>
                <span className="d-flex gap-3 pt-lg-3 justify-content-lg-start justify-content-center align-content-center pb-3 pb-lg-0 gap-5">
                  <p className="fs_14 fw-bold font_roboto color_light_sky m-0">
                    5.244 Satisfied Сustomers
                  </p>
                  <a href="#">
                    <img src={recat} alt="recat" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="d-flex justify-content-around pt-4 flex-lg-row flex-column text-center">
            <span>
              {" "}
              <p className="fs_13 fw-bold font_roboto color_light_sky ">
                © 2030 Comapny. All Rights Reserved.
              </p>
            </span>
            <span className="d-flex justify-content-center ">
              <p className="fs_13 fw-bold font_roboto color_light_sky ">
                Terms
              </p>
              <p className="fs_13 fw-bold font_roboto color_light_sky ps-4">
                Privacy
              </p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Constructor;

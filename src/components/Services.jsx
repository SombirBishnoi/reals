import React from "react";
import house from "../assets/image/png/house.png";
import app from "../assets/image/png/app.png";
import office from "../assets/image/png/office.png";
import warehouse from "../assets/image/png/warehouse.png";
import parking from "../assets/image/png/parking.png";
function Services() {
  return (
    <>
      <section className="bg_light pb-5">
        <div className="container">
          <div className="text-center">
            <button className="border-0 button_Services fw-bolder fs_12 color_blue  ">
              SERVICES
            </button>
            <div className="position-relative ">
              <h2 className="font_roboto fs_150 fw-bolder color_light_text  ">
                SERVICES
              </h2>
              <p className=" position-absolute w-100 h-100  service_overflow fw-bold fs_36 color_sky font_roboto">
                Services for Maximum Efficiency
              </p>
            </div>
            <p className="fw_500 fs_14 font_roboto color_light_sky py-5">
              We have developed a unique space where you can work and create. We
              thought of everything to the smallest{" "}
              <span className="d-block">
                detail. You will be able to conduct your business, conduct
                meetings, meetings
              </span>
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center">
                <a href="">
                  <img className=" w-100" src={house} alt="house" />
                </a>
                <p className="fw-bold font_roboto color_light_sky ">House</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center">
                <a href="">
                  <img className=" w-100" src={app} alt="app" />
                </a>
                <p className="fw-bold font_roboto color_light_sky ">
                  Appartament
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center">
                <a href="">
                  <img className=" w-100" src={office} alt="office" />
                </a>
                <p className="fw-bold font_roboto color_light_sky ">Office</p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center">
                <a href="">
                  <img className=" w-100" src={warehouse} alt="warehouse" />
                </a>
                <p className="fw-bold font_roboto color_light_sky ">
                  Warehouse
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <div className="text-center">
                <a href="">
                  <img className=" w-100" src={parking} alt="parking" />
                </a>
                <p className="fw-bold font_roboto color_light_sky ">Parking</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

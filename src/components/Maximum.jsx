import React from "react";
import men from "../assets/image/png/men.png";
import boy from "../assets/image/png/boy.png";
import girls from "../assets/image/png/girls.png";
function Maximum() {
  return (
    <>
      <section className="bg_light py-5">
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
            <div className="col-lg-4 col-md-6">
              <div className="box_1 mt-2">
                <p className="font_roboto fw-bold fs_13 color_light_sky  ">
                  A gentleman from New York discovered what he calls an
                  “oversight” on the part of 99.9% of all marketers that allows
                  him to get otherwise paid-for advertising at Google as well as
                  all other search engines.
                </p>
              </div>
              <div className="d-flex align-items-center gap-3 pt-4">
                <span>
                  <img src={men} alt="men" />
                </span>
                <span>
                  <h2 className="fs_14 font_roboto fw-bold color_light_sky  m-0">
                    Noah Russell
                  </h2>
                  <p className="fs_12 font_roboto fw-bold color_light_white m-0 ">
                    New York, USA
                  </p>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="box_1 mt-2">
                <p className="font_roboto fw-bold fs_13 color_light_sky  ">
                  Thank you very much for the house found. This is an ideal
                  option for our family at the location and price. The company
                  employs real professionals who will always
                </p>
              </div>
              <div className="d-flex align-items-center gap-3 pt-4">
                <span>
                  <img src={boy} alt="boy" />
                </span>
                <span>
                  <h2 className="fs_14 font_roboto fw-bold color_light_sky  m-0">
                    Nellie Griffith
                  </h2>
                  <p className="fs_12 font_roboto fw-bold color_light_white m-0 ">
                    New York, USA
                  </p>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="box_1 mt-2">
                <p className="font_roboto fw-bold fs_13 color_light_sky  ">
                  For many of us, our very first experience of learning about
                  the celestial bodies begins when we saw our first full moon in
                  the sky. It is truly a magnificent view even
                </p>
              </div>
              <div className="d-flex align-items-center gap-3 pt-4">
                <span>
                  <img src={girls} alt="girls" />
                </span>
                <span>
                  <h2 className="fs_14 font_roboto fw-bold color_light_sky  m-0">
                    Herbert Lindsey
                  </h2>
                  <p className="fs_12 font_roboto fw-bold color_light_white m-0 ">
                    New York, USA
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Maximum;

import React from "react";

function Story() {
  return (
    <div>
      <section className="py-5 bg_light ">
        <div className="container">
          <div className="text-center py-5">
            <div className="text-center">
              <button className="border-0 button_our fw-bolder fs_12 color_green  ">
                OUR STORY
              </button>
              <div className="position-relative ">
                <h2 className="font_roboto fs_150 fw-bolder color_light_text  ">
                  OUR STORY
                </h2>
                <p className=" position-absolute w-100 h-100  service_overflow fw-bold fs_36 color_sky font_roboto">
                  We Will Find the Best Option
                </p>
              </div>
              <p className="fw_500 fs_14 font_roboto color_light_sky py-5">
                Real estate is "property consisting of land and the buildings on
                it, along with its natural resources such as crops,{" "}
                <span className="d-block">
                  minerals or water, immovable property of this nature; an
                  interest vested in this (also) an item of real property,
                </span>{" "}
                (more generally) buildings or housing in general.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-6">
                <div className="back_color d-flex flex-column justify-content-center">
                  <h2 className="font_roboto fs_30  fw_500 color_sky ">
                    15 Years
                  </h2>
                  <p className="font_roboto fs_14 fw_500 color_light_white ">
                    In Business
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="back_color d-flex flex-column justify-content-center mt-sm-0 mt-3">
                  <h2 className="font_roboto fs_30  fw_500 color_sky ">
                    $1 Billion
                  </h2>
                  <p className="font_roboto fs_14 fw_500 color_light_white ">
                    Property Brokered
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="back_color d-flex flex-column justify-content-center mt-md-0 mt-3">
                  <h2 className="font_roboto fs_30  fw_500 color_sky ">
                    10,000
                  </h2>
                  <p className="font_roboto fs_14 fw_500 color_light_white ">
                    Transactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Story;

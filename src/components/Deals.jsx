import React from "react";
import home from "../assets/image/png/home.png";
import home1 from "../assets/image/png/home1.png";
import home2 from "../assets/image/png/home2.png";
import home3 from "../assets/image/png/home3.png";
import home4 from "../assets/image/png/home4.png";
import home5 from "../assets/image/png/home5.png";
import home6 from "../assets/image/png/home6.png";
import home7 from "../assets/image/png/home7.png";
import home8 from "../assets/image/png/home8.png";
import eyes from "../assets/image/png/eyes.png";
import like from "../assets/image/png/like.png";
function Deals() {
  return (
    <>
      <section className="bg_light min-vh-100 py-5 ">
        <div className="container">
          <div className="text-center">
            <button className="border-0 button_Deals fw-bolder fs_12 color_origin  ">
              DEALS
            </button>
            <div className="position-relative ">
              <h2 className="font_roboto fs_150 fw-bolder color_light_text  ">
                DEALS
              </h2>
              <p className=" position-absolute w-100 h-100  service_overflow fw-bold fs_36 color_sky font_roboto">
                Our Best Deals for Today
              </p>
            </div>
            <p className="fw_500 fs_14 font_roboto color_light_sky py-5">
              Real estate is "property consisting of land and the buildings on
              it, along with its natural resources such as crops,{" "}
              <span className="d-block">
                minerals or water, immovable property of this nature
              </span>
            </p>
          </div>
          <div className="d-sm-flex gap-lg-5 gap-md-4 gap-sm-3 justify-content-center text-center ">
            <a href="">
              <p className="fw-bolder fs_13 font_roboto color_light_sky footer_tab position-relative">
                House
              </p>
            </a>
            <a href="">
              {" "}
              <p className="fw-bolder fs_13 font_roboto color_light_sky footer_tab position-relative">
                Appartament
              </p>
            </a>
            <a href="">
              {" "}
              <p className="fw-bolder fs_13 font_roboto color_light_sky footer_tab position-relative">
                Office
              </p>
            </a>
            <a href="">
              <p className="fw-bolder fs_13 font_roboto color_light_sky footer_tab position-relative">
                Warehouse
              </p>
            </a>
            <a href="">
              {" "}
              <p className="fw-bolder fs_13 font_roboto color_light_sky footer_tab position-relative">
                Parking
              </p>
            </a>
            <a href="">
              {" "}
              <p className="fw-bolder fs_13 font_roboto color_light_sky footer_tab position-relative">
                Сommercial
              </p>
            </a>
          </div>
          <div className="pt-5">
            <div className="row pb-5 justify-content-center ">
              <div className="col-lg-4 col-md-6 ">
                <div className="box h-100 mt-lg-5 m-0 overlay_play">
                  <div className="position-relative ">
                    <img className="w-100" src={home} alt="home" />
                    <button className="eyes border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      <img className="w-100" src={eyes} alt="eyes" />
                      65
                    </button>
                    <button className="eyes2 border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      1995
                    </button>
                    <div className="position-absolute like ">
                      <a href="">
                        <img className=" " src={like} alt="like" />
                      </a>
                    </div>
                  </div>

                  <h2 className="font_roboto fs_15 fw-bolder color_light_blue pt-5 ps-4">
                    Modern Glass House
                  </h2>
                  <p className="font_roboto fs_16 fw-bold  color_light_blue ps-4 ">
                    $ 1,625,000
                  </p>

                  <p className="font_roboto fs_13 fw-bold  color_light_white pt-5 ps-4">
                    14 Patrick Brem Ct. Mahwah, NJ07430
                  </p>
                  <p className="font_roboto fs_12 fw-bold  color_light_white pb-3 ps-4">
                    3 Beds - 2 baths - 3,450 sqft
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4">
                <div className="box h-100 overlay_play">
                  <div className="position-relative ">
                    <img className="w-100" src={home1} alt="home1" />
                    <button className="eyes border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      <img className="w-100" src={eyes} alt="eyes" />
                      65
                    </button>
                    <button className="eyes2 border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      1995
                    </button>

                    <div className="position-absolute like ">
                      <a href="">
                        <img className=" " src={like} alt="like" />
                      </a>
                    </div>
                  </div>

                  <h2 className="font_roboto fs_15 fw-bolder color_light_blue pt-5 ps-4">
                    Modern Glass House
                  </h2>
                  <p className="font_roboto fs_16 fw-bold  color_light_blue ps-4 ">
                    $ 1,625,000
                  </p>

                  <p className="font_roboto fs_13 fw-bold  color_light_white pt-5 ps-4">
                    14 Patrick Brem Ct. Mahwah, NJ07430
                  </p>
                  <p className="font_roboto fs_12 fw-bold  color_light_white pb-3 ps-4">
                    3 Beds - 2 baths - 3,450 sqft
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4">
                <div className="box h-100 mt-lg-5 m-0 ">
                  <div className="position-relative overlay_play">
                    <img className="w-100" src={home2} alt="home2" />
                    <button className="eyes border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      <img className="w-100" src={eyes} alt="eyes" />
                      65
                    </button>
                    <button className="eyes2 border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      1995
                    </button>

                    <div className="position-absolute like ">
                      <a href="">
                        <img className=" " src={like} alt="like" />
                      </a>
                    </div>
                  </div>

                  <h2 className="font_roboto fs_15 fw-bolder color_light_blue pt-5 ps-4">
                    Modern Glass House
                  </h2>
                  <p className="font_roboto fs_16 fw-bold  color_light_blue ps-4 ">
                    $ 1,625,000
                  </p>

                  <p className="font_roboto fs_13 fw-bold  color_light_white pt-5 ps-4">
                    14 Patrick Brem Ct. Mahwah, NJ07430
                  </p>
                  <p className="font_roboto fs_12 fw-bold  color_light_white pb-3 ps-4">
                    3 Beds - 2 baths - 3,450 sqft
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4">
                <div className="box h-100 mt-lg-5 m-0 overlay_play">
                  <div className="position-relative ">
                    <img className="w-100" src={home3} alt="home3" />
                    <button className="eyes border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      <img className="w-100" src={eyes} alt="eyes" />
                      65
                    </button>
                    <button className="eyes2 border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      1995
                    </button>

                    <div className="position-absolute like ">
                      <a href="">
                        <img className=" " src={like} alt="like" />
                      </a>
                    </div>
                  </div>

                  <h2 className="font_roboto fs_15 fw-bolder color_light_blue pt-5 ps-4">
                    Modern Glass House
                  </h2>
                  <p className="font_roboto fs_16 fw-bold  color_light_blue ps-4 ">
                    $ 1,625,000
                  </p>

                  <p className="font_roboto fs_13 fw-bold  color_light_white pt-5 ps-4">
                    14 Patrick Brem Ct. Mahwah, NJ07430
                  </p>
                  <p className="font_roboto fs_12 fw-bold  color_light_white pb-3 ps-4">
                    3 Beds - 2 baths - 3,450 sqft
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4">
                <div className="box h-100 overlay_play">
                  <div className="position-relative ">
                    <img className="w-100" src={home4} alt="home4" />
                    <button className="eyes border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      <img className="w-100" src={eyes} alt="eyes" />
                      65
                    </button>
                    <button className="eyes2 border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      1995
                    </button>
                    <div className="position-absolute like ">
                      <a href="">
                        <img className=" " src={like} alt="like" />
                      </a>
                    </div>
                  </div>

                  <h2 className="font_roboto fs_15 fw-bolder color_light_blue pt-5 ps-4">
                    Modern Glass House
                  </h2>
                  <p className="font_roboto fs_16 fw-bold  color_light_blue ps-4 ">
                    $ 1,625,000
                  </p>

                  <p className="font_roboto fs_13 fw-bold  color_light_white pt-5 ps-4">
                    14 Patrick Brem Ct. Mahwah, NJ07430
                  </p>
                  <p className="font_roboto fs_12 fw-bold  color_light_white pb-3 ps-4">
                    3 Beds - 2 baths - 3,450 sqft
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4">
                <div className="box h-100 mt-lg-5 m-0 overlay_play">
                  <div className="position-relative ">
                    <img className="w-100" src={home5} alt="home5" />
                    <button className="eyes border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      <img className="w-100" src={eyes} alt="eyes" />
                      65
                    </button>
                    <button className="eyes2 border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      1995
                    </button>
                    <div className="position-absolute like ">
                      <a href="">
                        <img className=" " src={like} alt="like" />
                      </a>
                    </div>
                  </div>

                  <h2 className="font_roboto fs_15 fw-bolder color_light_blue pt-5 ps-4">
                    Modern Glass House
                  </h2>
                  <p className="font_roboto fs_16 fw-bold  color_light_blue ps-4 ">
                    $ 1,625,000
                  </p>

                  <p className="font_roboto fs_13 fw-bold  color_light_white pt-5 ps-4">
                    14 Patrick Brem Ct. Mahwah, NJ07430
                  </p>
                  <p className="font_roboto fs_12 fw-bold  color_light_white pb-3 ps-4">
                    3 Beds - 2 baths - 3,450 sqft
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4">
                <div className="box h-100 mt-lg-5 m-0 overlay_play">
                  <div className="position-relative ">
                    <img className="w-100" src={home6} alt="home6" />
                    <button className="eyes border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      <img className="w-100" src={eyes} alt="eyes" />
                      65
                    </button>
                    <button className="eyes2 border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      1995
                    </button>
                    <div className="position-absolute like ">
                      <a href="">
                        <img className=" " src={like} alt="like" />
                      </a>
                    </div>
                  </div>

                  <h2 className="font_roboto fs_15 fw-bolder color_light_blue pt-5 ps-4">
                    Modern Glass House
                  </h2>
                  <p className="font_roboto fs_16 fw-bold  color_light_blue ps-4 ">
                    $ 1,625,000
                  </p>

                  <p className="font_roboto fs_13 fw-bold  color_light_white pt-5 ps-4">
                    14 Patrick Brem Ct. Mahwah, NJ07430
                  </p>
                  <p className="font_roboto fs_12 fw-bold  color_light_white pb-3 ps-4">
                    3 Beds - 2 baths - 3,450 sqft
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 overlay_play">
                <div className="box h-100">
                  <div className="position-relative ">
                    <img className="w-100" src={home7} alt="home7" />
                    <button className="eyes border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      <img className="w-100" src={eyes} alt="eyes" />
                      65
                    </button>
                    <button className="eyes2 border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      1995
                    </button>
                    <div className="position-absolute like ">
                      <a href="">
                        <img className=" " src={like} alt="like" />
                      </a>
                    </div>
                  </div>

                  <h2 className="font_roboto fs_15 fw-bolder color_light_blue pt-5 ps-4">
                    Modern Glass House
                  </h2>
                  <p className="font_roboto fs_16 fw-bold  color_light_blue ps-4 ">
                    $ 1,625,000
                  </p>

                  <p className="font_roboto fs_13 fw-bold  color_light_white pt-5 ps-4">
                    14 Patrick Brem Ct. Mahwah, NJ07430
                  </p>
                  <p className="font_roboto fs_12 fw-bold  color_light_white pb-3 ps-4">
                    3 Beds - 2 baths - 3,450 sqft
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4">
                <div className="box h-100 mt-lg-5 m-0 overlay_play">
                  <div className="position-relative ">
                    <img className="w-100" src={home8} alt="home8" />
                    <button className="eyes border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      <img className="w-100" src={eyes} alt="eyes" />
                      65
                    </button>
                    <button className="eyes2 border-0 d-flex align-items-center gap-2 text-white font_roboto fw-bolder fs_10">
                      1995
                    </button>

                    <div className="position-absolute like ">
                      <a href="">
                        <img className=" " src={like} alt="like" />
                      </a>
                    </div>
                  </div>

                  <h2 className="font_roboto fs_15 fw-bolder color_light_blue pt-5 ps-4">
                    Modern Glass House
                  </h2>
                  <p className="font_roboto fs_16 fw-bold  color_light_blue ps-4 ">
                    $ 1,625,000
                  </p>

                  <p className="font_roboto fs_13 fw-bold  color_light_white pt-5 ps-4">
                    14 Patrick Brem Ct. Mahwah, NJ07430
                  </p>
                  <p className="font_roboto fs_12 fw-bold  color_light_white pb-3 ps-4">
                    3 Beds - 2 baths - 3,450 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Deals;

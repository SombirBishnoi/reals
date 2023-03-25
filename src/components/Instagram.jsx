import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prve from "../assets/image/png/prve.png";
import next from "../assets/image/png/next.png";
import image0 from "../assets/image/png/image0.png";
import image1 from "../assets/image/png/image1.png";
import image2 from "../assets/image/png/image2.png";
import image3 from "../assets/image/png/image3.png";
import image4 from "../assets/image/png/image4.png";
import image5 from "../assets/image/png/image5.png";
import image6 from "../assets/image/png/image6.png";
import image7 from "../assets/image/png/image7.png";
import play from "../assets/image/png/Play.png";
function Instagram() {
  const myBtn = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <>
      <section className="bg_light position-relative py-5">
        <div className="container  ">
          <div className="d-xl-flex justify-content-between d-none">
            <button
              className="border-0 slider_button1 bg-transparent "
              onClick={() => myBtn.current.slickPrev()}
            >
              <div className="next">
                <img src={next} alt="next" />
              </div>
            </button>
            <button
              className="border-0 slider_button bg-transparent "
              onClick={() => myBtn.current.slickNext()}
            >
              <div className="next">
                <img src={prve} alt="prve" />
              </div>
            </button>
          </div>
          <Slider ref={myBtn} {...settings}>
            <div>
              <div className="text-center">
                <button className="border-0 button_insta fw-bolder fs_12 color_green  ">
                  INSTAGRAM
                </button>
                <div className="position-relative ">
                  <h2 className="font_roboto fs_150 fw-bolder color_light_text  ">
                    INSTAGRAM
                  </h2>
                  <p className=" position-absolute w-100 h-100  service_insta fw-bold fs_36 color_sky font_roboto">
                    Listen to Our Сustomers @house
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image0} alt="image0" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image1} alt="image1" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image2} alt="image2" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image3} alt="image3" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image4} alt="image4" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image5} alt="image5" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image6} alt="image6" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image7} alt="image7" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center">
                <button className="border-0 button_insta fw-bolder fs_12 color_green  ">
                  INSTAGRAM
                </button>
                <div className="position-relative ">
                  <h2 className="font_roboto fs_150 fw-bolder color_light_text  ">
                    INSTAGRAM
                  </h2>
                  <p className=" position-absolute w-100 h-100  service_insta fw-bold fs_36 color_sky font_roboto">
                    Listen to Our Сustomers @house
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image0} alt="image0" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image1} alt="image1" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image2} alt="image2" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image3} alt="image3" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image4} alt="image4" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image5} alt="image5" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image6} alt="image6" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image7} alt="image7" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center">
                <button className="border-0 button_insta fw-bolder fs_12 color_green  ">
                  INSTAGRAM
                </button>
                <div className="position-relative ">
                  <h2 className="font_roboto fs_150 fw-bolder color_light_text  ">
                    INSTAGRAM
                  </h2>
                  <p className=" position-absolute w-100 h-100  service_insta fw-bold fs_36 color_sky font_roboto">
                    Listen to Our Сustomers @house
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image0} alt="image0" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image1} alt="image1" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image2} alt="image2" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image3} alt="image3" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image4} alt="image4" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image5} alt="image5" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image6} alt="image6" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image7} alt="image7" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center">
                <button className="border-0 button_insta fw-bolder fs_12 color_green  ">
                  INSTAGRAM
                </button>
                <div className="position-relative ">
                  <h2 className="font_roboto fs_150 fw-bolder color_light_text  ">
                    INSTAGRAM
                  </h2>
                  <p className=" position-absolute w-100 h-100  service_insta fw-bold fs_36 color_sky font_roboto">
                    Listen to Our Сustomers @house
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image0} alt="image0" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image1} alt="image1" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image2} alt="image2" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image3} alt="image3" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image4} alt="image4" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image5} alt="image5" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image6} alt="image6" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image7} alt="image7" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center">
                <button className="border-0 button_insta fw-bolder fs_12 color_green  ">
                  INSTAGRAM
                </button>
                <div className="position-relative ">
                  <h2 className="font_roboto fs_150 fw-bolder color_light_text  ">
                    INSTAGRAM
                  </h2>
                  <p className=" position-absolute w-100 h-100  service_insta fw-bold fs_36 color_sky font_roboto">
                    Listen to Our Сustomers @house
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image0} alt="image0" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image1} alt="image1" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image2} alt="image2" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image3} alt="image3" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image4} alt="image4" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image5} alt="image5" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image6} alt="image6" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image7} alt="image7" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-center">
                <button className="border-0 button_insta fw-bolder fs_12 color_green  ">
                  INSTAGRAM
                </button>
                <div className="position-relative ">
                  <h2 className="font_roboto fs_150 fw-bolder color_light_text  ">
                    INSTAGRAM
                  </h2>
                  <p className=" position-absolute w-100 h-100  service_insta fw-bold fs_36 color_sky font_roboto">
                    Listen to Our Сustomers @house
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image0} alt="image0" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image1} alt="image1" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image2} alt="image2" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image3} alt="image3" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image4} alt="image4" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image5} alt="image5" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image6} alt="image6" />
                  </div>
                </div>

                <div className="col-3  play_overlay">
                  <div className="pt-4 position-relative">
                    <div className=" position-absolute overlay">
                      <img className=" " src={play} alt="" />
                    </div>
                    <img className="w-100" src={image7} alt="image7" />
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Instagram;

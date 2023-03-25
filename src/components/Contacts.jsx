import React from "react";
import account from "../assets/image/png/account.png";
import call from "../assets/image/png/call.png";
import massige from "../assets/image/png/massige.png";
import textmassige from "../assets/image/png/textmassige.png";
function Contacts() {
  return (
    <>
      <section className="bg_light ">
        <div className="container bg_color py-5">
          <div className="text-center ">
            <button className="border-0 button_Services fw-bolder fs_12 color_blue  ">
              CONTACTS
            </button>
            <div className="position-relative ">
              <h2 className="font_roboto fs_150 fw-bolder text_color ">
                IN TOUCH
              </h2>
              <p className=" position-absolute w-100 h-100  service_overflow fw-bold fs_36 color_sky font_roboto">
                Get It Touch Now
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
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-4">
            <div className="first_border d-flex justify-content-between w_30">
              <input
                className="border-0 first_border1 w-100 fw-bold font_roboto fs_12 color_light_sky"
                type="text"
                placeholder="First Name"
              />
              <a href="#">
                <img src={account} alt="account" />
              </a>
            </div>
            <div className="first_border  d-flex justify-content-between  w_30">
              <input
                className="border-0 first_border1 w-100 fw-bold font_roboto fs_12 color_light_sky"
                type="text"
                placeholder="Last Name"
              />
              <a href="#">
                <img src={account} alt="account" />
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center gap-4 pt-4 flex-column flex-sm-row ">
            <div className="first_border d-flex justify-content-between w_30">
              <input
                className="border-0 first_border1 w-100 fw-bold font_roboto fs_12 color_light_sky"
                type="text"
                placeholder="Email Address"
              />
              <a href="#">
                <img src={massige} alt="massige" />
              </a>
            </div>
            <div className="first_border  d-flex justify-content-between  w_30">
              <input
                className="border-0 first_border1 w-100 fw-bold font_roboto fs_12 color_light_sky"
                type="text"
                placeholder="Phone Number"
              />
              <a href="#">
                <img src={call} alt="call" />
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center pt-4">
            <div className="first_border  d-flex justify-content-between w_100  w_62">
              <input
                className="border-0 first_border1 w-100 fw-bold font_roboto fs_12 color_light_sky"
                type="text"
                placeholder="Your Message"
              />
              <a href="#">
                <img src={textmassige} alt="textmassige" />
              </a>
            </div>
          </div>
          <div className="text-center pt-4">
            <button className="text-white bg_blue border-0 fw-bolder fs_14 font_roboto button_send ">
              Send Request
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;

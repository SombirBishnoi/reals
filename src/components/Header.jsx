import React, { useState } from "react";
import logo from "../assets/image/png/logo.png";
import search from "../assets/image/png/search.png";
import Icon from "../assets/image/png/Icon.png";
import phone from "../assets/image/png/phone.png";
import sms from "../assets/image/png/sms.png";
function Header() {
  const [navShow, setNavShow] = useState(false);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <section className="background_image_header d-flex flex-column  position-relative bg_light min-vh-100  ">
        <div class="container pt-2">
          <div className=" d-flex justify-content-around  align-items-center w-100 ">
            <span className="d-flex gap-3 ">
              <a className=" " href="#">
                <img className="logo_size" src={logo} alt="logo" />
              </a>
              <h2 className="font_roboto fw-bold fs_20 text-white m-0">
                Constructor
              </h2>
            </span>
            <span className="d-flex gap-3 align-items-center  py-3 list-unstyled d-none d-xl-flex align-items-center mb-0 justify-content-end">
              <a
                class="  text-white nav_text_hover position-relative    "
                href="#foot"
              >
                <img src={search} alt="search" />
              </a>
              <p className="m-0 font_roboto fs_14 text-white fw_500 opacity-50">
                Search
              </p>
            </span>
            <ul className="d-flex gap-5 py-3 list-unstyled d-none d-xl-flex align-items-center mb-0 justify-content-end">
              <li>
                <a
                  class=" text-white nav_text_hover position-relative   font_roboto fw-bold fs_13    "
                  href="#"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  class=" text-white nav_text_hover position-relative  font_roboto fw-bold fs_13    "
                  href="#"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  class=" text-white nav_text_hover position-relative  font_roboto fw-bold fs_13    "
                  href="#"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  class=" text-white nav_text_hover position-relative  font_roboto fw-bold fs_13    "
                  href="#"
                >
                  Contacts
                </a>
              </li>
            </ul>
            <span className="d-flex gap-5 py-3 list-unstyled d-none d-xl-flex align-items-center mb-0 justify-content-end">
              <a class=" text-white   font_roboto fw-bold fs_14    " href="#">
                Get In Touch
              </a>
            </span>

            <label
              className="menu_formatting d-flex justify-content-end d-xl-none"
              for="check"
            >
              <input
                onClick={() => setNavShow(!navShow)}
                className="menu bg-black "
                type="checkbox"
                id="check"
              />
              <span className="span_nav1"></span>
              <span className="span_nav2"></span>
              <span className="span_nav3"></span>
            </label>
          </div>
          <div className="d-xl-none d-flex ">
            <div className={` ${navShow ? "nav-fix " : "fix-navbar"}`}>
              <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center  list-unstyled gap-3 gap-md-5 pt-3 transition">
                <li>
                  <a
                    class="text-decoration-none font_roboto fw-bold fs_20 text-white text-white  transition "
                    href="#foot"
                  >
                    Constructor
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a
                    class="  text-white nav_text_hover position-relative    "
                    href="#foot"
                  >
                    <img src={search} alt="search" />
                  </a>
                  <p className="m-0 font_roboto fs_14 text-white fw_500">
                    Search
                  </p>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-white  font_roboto fw-bold fs_13     transition "
                    href="#"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-white   font_roboto fw-bold fs_13      transition "
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    class="text-decoration-none text-white  font_roboto fw-bold fs_13      transition "
                    href="#"
                  >
                    Reviews
                  </a>
                </li>
                <li>
                  <a
                    class=" text-white  font_roboto fw-bold fs_13    "
                    href="#"
                  >
                    Contacts
                  </a>
                </li>
                <li>
                  <a
                    class=" text-white  font_roboto fw-bold fs_14    "
                    href="#"
                  >
                    Get In Touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container d-flex flex-column  flex-grow-1 justify-content-center ">
          <div className="text-center ">
            <div>
              <button className=" border-0 font_roboto fs_12 text-white fw-bolder bg_origin real_button  mb-lg-5    ">
                REAL ESTATE
              </button>
            </div>
            <h2 className="font_roboto fs_64 fw-normal text-white py-lg-5 py-3">
              Invest on Real Estate with{" "}
              <span className="d-block">Our Company</span>
            </h2>
            <span className="d-flex justify-content-center flex-column flex-lg-row gap-lg-5 gap-2 py-lg-5 py-3">
              <span className="d-flex align-items-center justify-content-center  gap-4">
                <a href="#">
                  <img src={Icon} alt="Icon" />
                </a>
                <p className="fw-bold fs_13 text-white font_roboto m-0">
                  225 S 1st St Brooklyn, NY 11211
                </p>
              </span>
              <span className="d-flex align-items-center justify-content-center gap-4">
                <a href="#">
                  <img src={phone} alt="phone" />
                </a>
                <p className="fw-bold fs_13 text-white font_roboto m-0">
                  (929) 356-0147
                </p>
              </span>
              <span className="d-flex align-items-center justify-content-center gap-4">
                <a href="#">
                  <img src={sms} alt="sms" />
                </a>
                <p className="fw-bold fs_13 text-white font_roboto m-0">
                  hotel@gmail.com
                </p>
              </span>
            </span>
            <button className="button_show border-0 font_roboto fw-bolder fs_14 mt-sm-0 mt-4">
              Show More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;

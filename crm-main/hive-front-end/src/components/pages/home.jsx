import React from "react";
import { Link } from "react-router-dom";

//CSS
import "../assets/css/home.css";

//Images
import bottomShapeImg from "../assets/img/banner-10.png";
import homeImg from "../assets/img/bannerHome.png";
import FooterPage from "../assets/nav/footer";
import HomeNav from "../assets/nav/homeNav";


function Home() {
  return (
    <div>
      <section className="bannerHome  bg_img pos-rel oh">
        <HomeNav />
        <section className="banner-10">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="banner-content-10 cl-white">
                  <h1 className="title">
                    {" "}
                    Where <span>everything</span> comes together
                  </h1>
                  <p>
                    The simple, intuitive and powerful software to manage your
                    work.
                  </p>
                  <Link to="/login">
                    <button type="button" className="banner-button-group btn">
                      {" "}
                      Login
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 d-lg-block d-none">
                <div className="imgAnimation banner-thumb-10 ">
                  <img src={homeImg} alt="banner" className="vert-move" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <FooterPage />
    </div>
  );
}

export default Home;

import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ForumIcon from "@mui/icons-material/Forum";
import FooterPage from "./assets/nav/footer";
import PieChartIcon from "@mui/icons-material/PieChart";
import "./assets/css/dashboard.css";
import Axios from "axios";
//Images
import CrmTabImg from "./assets/img/custom-15.svg";
import DashImg from "./assets/img/h3.png";
import PagesNav from "./assets/nav/pagesNav";
//Graph
import { DashChart } from "./charts/graph";
import Map from "./map";

const axios = require("axios");
// ===========================|| DEFAULT DASHBOARD ||=========================== //

export default function Dashboard() {
  return (
    <>
      <div className="contentPages">
        <br />
        <div className="dashContentsMargin">
          <PagesNav />

          <div className="row">
            <div className="col-xl-10 col-lg-9 col-md-8 col-sm-12">
              <div className="box bg-gradient-primary overflow-hidden pull-up crmTab">
                <div className="box-body pr-0 pl-lg-50 pl-15 py-0 ">
                  <div className="row align-items-center ">
                    <div className="col-12 col-lg-8">
                      <h1 className="font-size-30 text-white">Welcome Jane !</h1>
                      <h4 className="text-white ml-4"><em>Dashboard</em></h4>
                      <p className="text-white mb-0 font-size-20">
                        Take a peek at your overview analytics in the last 24 hours.
                      </p>
                    </div>
                    <div className="col-12 col-lg-4">
                      <img src={CrmTabImg} />
                    </div>
                  </div>
                </div>
              </div>
              {" "}
              <div className="row">
                {" "}
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6>Leads For the week</h6>
                      </div>
                      <div className="iq-customer-box d-flex align-items-center justify-content-between mt-3">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle iq-card-icon3 iq-bg-warning mr-2">
                            <LeaderboardIcon className="iconDash3" />
                          </div>
                          <h2 className="ml-4">  62</h2>
                        </div>
                        <div className="iq-map text-warning font-size-32">
                          <i className="bx bx-bar-chart"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6>Customers</h6>
                      </div>
                      <div className="iq-customer-box d-flex align-items-center justify-content-between mt-3">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle iq-card-icon4 iq-bg-info mr-2">
                            <PersonOutlineIcon className="iconDash4" />
                          </div>
                          <h2>33</h2>
                        </div>
                        <div className="iq-map text-danger font-size-32">
                          <i className="bx bx-bar-chart"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6>Website Visitors</h6>
                        <span className="iq-icon">
                          <i className="ri-information-fill" />
                        </span>
                      </div>
                      <div className="iq-customer-box d-flex align-items-center justify-content-between mt-3">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle iq-card-icon iq-bg-primary mr-2">
                            {" "}
                            <LanguageIcon className="iconDash" />
                          </div>
                          <h2>122</h2>
                        </div>
                        <div className="iq-map text-info font-size-32">
                          <i className="bx bx-bar-chart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-3">
                  <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                    <div className="iq-card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <h6>Forms Submitted</h6>
                      </div>
                      <div className="iq-customer-box d-flex align-items-center justify-content-between mt-3">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle iq-card-icon2 iq-bg-danger mr-2">
                            <ForumIcon className="iconDash2" />
                          </div>
                          <h2>23</h2>
                        </div>
                        <div className="iq-map text-primary font-size-32">
                          <i className="bx bx-bar-chart"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 ">
                  <div className="chartWeekly">
                    <h4>This Week's Stats</h4>
                    <DashChart />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 container">
                  <div className="dashImageElement ">
                    <div className="row">
                      <h4>Website Pages</h4>
                      <br />
                      <br />
                      <br />
                      <div className="col-lg-6 col-md-8 col-sm-12 chartDis">
                        <div className="dashListCont ">
                          <ul>
                            <li>
                              <i className="bx bx-home-heart"></i> Home Page{" "}
                              <button className="btnViewMoreDash">
                                12 min
                              </button>
                            </li>
                            <li>
                              {" "}
                              <i className="bx bxs-receipt"></i> About us{" "}
                              <button className="btnViewMoreDash">5 min</button>
                            </li>
                            <li>
                              <i className="bx bx-archive-in"></i> Services Page{" "}
                              <button className="btnViewMoreDash">3 min</button>
                            </li>
                            <li>
                              <i className="bx bx-message-square-dots"></i>{" "}
                              Contact Page{" "}
                              <button className="btnViewMoreDash">6 min</button>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-4 col-sm-12">
                        <div className="dashboardImage">
                          <img src={DashImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <br />
                    <button className="btn btnViewMoreDash">View More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2  col-lg-3 col-md-4 col-sm-12">
              <div className="quick-link-container">
                <div className="quick-link">
                  <div className="background" />
                  <a href="/analytics">Analytics</a>
                </div>
                <div className="quick-link">
                  <div className="background" />
                  <a href="/crm">CRM</a>
                </div>
                <div className="quick-link">
                  <div className="background" />
                  <a href="/customers">customers</a>
                </div>

                <div className="quick-link">
                  <div className="background" />
                  <a href="/call-tracking">Call tracking</a>
                </div>
              </div>
            </div>
          </div>
          <br />

        </div>
        <br />
      </div>

      <FooterPage />
    </>
  );
}; 

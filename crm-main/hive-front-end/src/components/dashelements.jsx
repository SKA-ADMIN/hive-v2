import React from "react"; 
import landingImg1 from "./assets/img/test2.webp"; 
// Css
import "bootstrap/dist/css/bootstrap.min.css";
//Icons
import LanguageIcon from '@mui/icons-material/Language';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ForumIcon from '@mui/icons-material/Forum';

function DashElements() {
  return (
    <div className="content dashElements">
      <div className="container-fluid p-0">
        <div className="row">
      <div class="col-xl-7 col-xxl-4">
            <div className="ImgContainer  container">
              <img src={landingImg1} alt="" srcset="" />
            </div>
          </div>
          <div className="col-xl-5 col-xxl-8 d-flex">
            <div className="w-100">
              <div className="row">
                <div className="col-sm-6">
                  <div className="card cardLight">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Leads</h5>
                        </div>

                        <div className="col-auto">
                          <div className="stat text-primary">
                            <LeaderboardIcon/>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-1 mb-3">4</h3>
                      <div className="mb-0">
                        <span className="text-danger">
                          {" "}
                          <i className="mdi mdi-arrow-bottom-right"></i> -3.65%{" "}
                        </span>
                        <span className="text-muted">Since last week</span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="card cardDark">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Website Visitors</h5>
                        </div>

                        <div className="col-auto">
                          <div className="stat text-primary">
                            <LanguageIcon/>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-1 mb-3">32</h3>
                      <div className="mb-0">
                        <span className="text-success">
                          {" "}
                          <i className="mdi mdi-arrow-bottom-right"></i> +5.25%{" "}
                        </span>
                        <span className="text-muted">Since last week</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="card cardDark">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Forms submitted</h5>
                        </div>

                        <div className="col-auto">
                          <div className="stat text-primary">
                            <ForumIcon/>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-1 mb-3">21</h3>
                      <div className="mb-0">
                        <span className="text-success">
                          {" "}
                          <i className="mdi mdi-arrow-bottom-right"></i> 6.65%{" "}
                        </span>
                        <span className="text-muted">Since last week</span>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="card cardLight">
                    <div className="card-body">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Customers</h5>
                        </div>

                        <div className="col-auto">
                          <div className="stat text-primary">
                            <PersonOutlineIcon/>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-1 mb-3">7</h3>
                      <div className="mb-0">
                        <span className="text-danger">
                          {" "}
                          <i className="mdi mdi-arrow-bottom-right"></i> -2.25%{" "}
                        </span>
                        <span className="text-muted">Since last week</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashElements;

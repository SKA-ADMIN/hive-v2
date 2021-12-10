import React, { useEffect } from "react";
import "./assets/css/analytics.css";
import LanguageIcon from "@mui/icons-material/Language";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import ForumIcon from "@mui/icons-material/Forum";

import GraphChart, { GraphChart2, PieChart } from "./charts/graph.jsx";

import HiveWorkers from "./assets/img/Hive-Element.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FooterPage from "./assets/nav/footer";
import PagesNav from "./assets/nav/pagesNav";

import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

function Analytics() {
  const [date, setDate] = React.useState("");
  const [date2, setDate2] = React.useState("");
  const [value, setValue] = React.useState(new Date());

  const handleChange = (event) => {
    setDate(event.target.value);
  };
  const handleChange2 = (event)=>{
    setDate2(event.target.value);
  };
  const handleChange3 = (event) => {
    //setValue(event.target.value);
  };
  return (
    <>
      <div className="contentPages">
        <br />
        <div className="anaNAv">
          <PagesNav />
        </div>
        <br />
        <div className="content dashElements">
          {/*           <div className="container-fluid p-0">
            <div className="row">
              <div className="col-xl-5 col-xxl-4">
                <div className="card card-congratulation-medal">
                  <div className="card-body analyticsCard">
                    <h5>Congratulations 🎉 Jane!</h5>
                    <p className="card-text font-small-3">
                      You have won gold medal for this weeks Leads
                    </p>
                    <h3 className="mb-75 mt-2 pt-50">
                      <a href="javascript:void(0);">30</a>
                    </h3>
                    <img
                      src={badge}
                      className="congratulation-medal"
                      alt="Medal Pic"
                    />
                    <p>Leads this week</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-md-6 col-12">
                <div className="card card-statistics">

                  <div className="card-body statistics-body statsCard">
                    <div className="row">
                      <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                        <div className="media">
                          <div className="avatar bg-light-primary mr-2">
                            <div className="avatar-content avatar1">
                              <PollOutlinedIcon className="iconAna1" />
                            </div>
                          </div>
                          <div className="media-body my-auto">
                            <h4 className="font-weight-bolder mb-0">12</h4>
                            <p className="card-text font-small-3 mb-0">Leads</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-xl-0">
                        <div className="media">
                          <div className="avatar bg-light-info mr-2">
                            <div className="avatar-content avatar2">
                              <PersonOutlineIcon className="iconAna2" />
                            </div>
                          </div>
                          <div className="media-body my-auto">
                            <h4 className="font-weight-bolder mb-0">9</h4>
                            <p className="card-text font-small-3 mb-0">
                              Customers
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6 col-12 mb-2 mb-sm-0">
                        <div className="media">
                          <div className="avatar bg-light-danger mr-2">
                            <div className="avatar-content avatar3">
                              <ForumIcon className="iconAna3" />
                            </div>
                          </div>
                          <div className="media-body my-auto">
                            <h4 className="font-weight-bolder mb-0">14</h4>
                            <p className="card-text font-small-3 mb-0">
                              Forms Submitted
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-sm-6 col-12">
                        <div className="media">
                          <div className="avatar bg-light-success mr-2">
                            <div className="avatar-content avatar">
                              <LanguageIcon className="iconAna4" />
                            </div>
                          </div>
                          <div className="media-body my-auto">
                            <h4 className="font-weight-bolder mb-0">24</h4>
                            <p className="card-text font-small-3 mb-0">
                              Website Visits
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="row match-height">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="card card-tiny-line-stats2">
                    <div className="card-body pb-50">
                      <h6>Customers</h6>
                      <h2 className="font-weight-bolder mb-1">+ 5.25% </h2>
                    </div>
                  </div>
                  <div className="card card-tiny-line-stats3 mt-3">
                    <div className="card-body pb-50">
                      <h6>Forms Submitted</h6>
                      <h2 className="font-weight-bolder mb-1">+ 9.65%</h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="ImgContainer">
                    <img src={HiveWorkers} alt="HiveWorkers" srcset="" />
                  </div>
                </div>

                <div className="col-lg-12 col-md-6 col-12">
                  <div className="card earnings-card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12">
                          <h4 className="  mb-2">Overall Performance</h4>
                          <div className="font-small-2 mb-2">This Week</div>
                          <h5 className="mb-1 percentageText">68.2%</h5>
                          <p className="text-muted textCardAna">
                            more Leads, Website Visitors, Forms Submitted and
                            Customers than last week.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="container mapDash">
                <div className="webVisit">
                  <h4>Website Visitors Location</h4>
                </div>
                <Map />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="dashChart2">
                <h4>WebSite Visits</h4>
                <div className="container">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Date
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={date}
                      onChange={handleChange}
                      label="Date"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={7}>Last Week</MenuItem>
                      <MenuItem value={30}>Last month</MenuItem>
                      <MenuItem value={90}>3 months</MenuItem>
                      <MenuItem value={180}>6 months</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <GraphChart />
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="pieChart">
                <h4>Average Time spent on Each Page</h4>
                <p>
                  <em>measured in minutes</em>
                </p>
                <PieChart />
              </div>
            </div>
          </div>
          <div className="formAndLeadsSec"> */}
          {/* <div className="row">
              
              <div className="col-lg-4">
                <div className="card leads-card">
                  <header className="card-header">
                    <h3 className="card-header-title"> Recent Leads</h3>
                  </header>

                  <div className="card-table">
                    <div className="content">
                      <BasicTable />
                      <div className="viewAll">
                        <button className="btn">View all</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="dashChart">
                  <h4>Forms Submitted</h4>
                  <div className="container">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Date
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={date2}
                      onChange={handleChange2}
                      label="Date"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={7}>Last Week</MenuItem>
                      <MenuItem value={30}>Last month</MenuItem>
                      <MenuItem value={90}>3 months</MenuItem>
                      <MenuItem value={180}>6 months</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                  <GraphChart2 />
                </div>
              </div>
            </div>{" "}
          </div> */}
        </div>
        <div className="dashElements">
          <div className="row">
            <div className="analyticsIconsGrid">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                  <div className="analyticsIcon">
                    <div className="analyticsTopSecIcon">
                      <PollOutlinedIcon className="iconAna1" />
                    </div>
                    <p>Total Leads</p>
                    <p>29</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                  <div className="analyticsIcon">
                    <div className="analyticsTopSecIcon2">
                      <ForumIcon className="iconAna1" />
                    </div>
                    <p>Total Forms submitted</p>
                    <p>54</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                  <div className="analyticsIcon">
                    <div className="analyticsTopSecIcon3">
                      <PersonOutlineIcon className="iconAna1" />
                    </div>
                    <p>Total Customers</p>
                    <p>53</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
                  <div className="analyticsIcon">
                    <div className="analyticsTopSecIcon4">
                      <LanguageIcon className="iconAna1" />
                    </div>
                    <p>Total Website Visits</p>
                    <p>66</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="dashChart">
                <h4>Forms Submitted</h4>
                <div className="container">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Date
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={date2}
                      onChange={handleChange2}
                      label="Date"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={7}>Last Week</MenuItem>
                      <MenuItem value={30}>Last month</MenuItem>
                      <MenuItem value={90}>3 months</MenuItem>
                      <MenuItem value={180}>6 months</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <GraphChart2 />
              </div>
            </div>{" "}
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="dashChart2">
                <h4>WebSite Visits</h4>
                <div className="container">
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Date
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={date}
                      onChange={handleChange}
                      label="Date"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={7}>Last Week</MenuItem>
                      <MenuItem value={30}>Last month</MenuItem>
                      <MenuItem value={90}>3 months</MenuItem>
                      <MenuItem value={180}>6 months</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <GraphChart />
                <br />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="pieChart">
                <h4>Average Time spent on Each Page</h4>
                <p>
                  <em>measured in minutes</em>
                </p>
                <PieChart />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="ImgContainer">
                <img
                  src={HiveWorkers}
                  alt="HiveWorkers"
                  srcSet=""
                  className="mb-5"
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
              <div className="pieChart">
                <h4>Average Time spent on Each Page</h4>
                <p>
                  <em>measured in minutes</em>
                </p>
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPage />
    </>
  );
}

export default Analytics;

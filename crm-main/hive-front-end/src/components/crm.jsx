import React, { useState, useEffect } from "react";
import "../App.css";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import Axios from "axios";
import CrmTabImg from "./assets/img/custom-15.svg";
import noDataImg from "./assets/img/widget-img.png";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import "./assets/css/crm.css";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useTable from "./table/useTable";
import Box from "@mui/material/Box";
import StarWidget from "./rating";
import { InputAdornment } from "@mui/material";
import Search from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Controls from "./table/search";
import moment from "moment";
 

import CsvData from "./csv";
const axios = require("axios");



 

const CRM = () => {
  const [userData, setUserData] = useState([]);
  const [date, setDate] = useState();
  const [valueDateRange, setValueDateRange] = React.useState();
  const [valueDateRange2, setValueDateRange2] = React.useState();
  const [dropdownDate, setDropdownDate] = React.useState("");
  const [valuePreset, setValuePreset] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isDone2, setIsDone2] = useState(false);
  const [isDone3, setIsDone3] = useState(false);

  const headCells = [
    { id: "Date", label: "Date" },
    { id: "Name", label: "Name" },
    { id: "Surname", label: "Surname", disableSorting: true },
    { id: "Email", label: "Email", disableSorting: true },
    { id: "Rating", label: "Rating", disableSorting: true },
  ];
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  useEffect(() => {
    Axios.get("/data").then((response) => {
      setUserData(response.data);

      //console.log(newDateArr);
    });
  }, []);
  const dataGetByPreset = () => {
    setIsDone(true);
    console.log("object");
  };
  useEffect(() => {
    if (isDone === true) {
      Axios.get(`/databypreset`, {
        params: { preset: valuePreset },
      }).then((response) => {
        setUserData(response.data);
        console.log(response);
        setIsDone(false);
      });
    }
  }, [isDone]);
  const dataGetByRange = () => {
    setIsDone2(true);
    console.log("done");
  };
  useEffect(() => {
    if (isDone2 === true) {
      Axios.get(`/databyrange`, {
        params: { range1: valueDateRange, range2: valueDateRange2 },
      }).then((response) => {
        setUserData(response.data);
        console.log(response);
        setIsDone2(false);
      });
    }
  }, [isDone2]);
  useEffect(() => {
    if (isDone3 === true) {
      Axios.get(`/databydate`, {
        params: { date: date },
      }).then((response) => {
        setUserData(response.data);
        console.log(response);
        setIsDone3(false);
      });
    }
  }, [isDone3]);
  const dataGetByDate = () => {
    setIsDone3(true);
  };
  const handleValueDateRange2 = (value) => {
    let newDate = moment(value).format("YYYY-MM-DD");
    setValueDateRange2(newDate);
    console.log(newDate);
    dataGetByRange();
  };
  const handleChange = (value) => {
    let newDate = moment(value).format("YYYY-MM-DD");
    setDate(newDate);
    console.log(newDate);
    dataGetByDate();
  };
  const handleValueDateRange = (value) => {
    let newDate = moment(value).format("YYYY-MM-DD");
    setValueDateRange(newDate);
    console.log(newDate);
  };
  const handleChangeDropdown = (event) => {
    setDropdownDate(event.target.value);
    setValuePreset(event.target.value);
    dataGetByPreset();
  };

  const {
    TblContainer,
    TblHead,
    TblPagination,
    userDataAfterPagingAndSorting,
  } = useTable(userData, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;

    setFilterFn({
      fn: (items) => {
        if (target.value === "") return items;
        else
          return items.filter((x) =>
            x.Name.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };
  const csvReport = {
    filename: "report.csv",
    headers: headCells,
    data: userData,
  };
  return (
    <>
      <div className="CRMContent contentPages">
        <br />

        <div className="crmNavSearch">
          <div className="box bg-gradient-primary overflow-hidden pull-up crmTab">
            <div className="box-body pr-0 pl-lg-50 pl-15 py-0 ">
              <div className="row align-items-center ">
                <div className="col-12 col-lg-8">
                  <h1 className="font-size-30 text-white">Welcome Jane !</h1>
                  <h4 className="text-white ml-4">CRM</h4>
                  <p className="text-white mb-0 font-size-20">
                    View ,Sort and Rate your generated leads. Lets Have a look !
                  </p>
                </div>
                <div className="col-12 col-lg-4">
                  <img src={CrmTabImg} alt />
                </div>
              </div>
            </div>
          </div>
          <br />
          <nav className="navbar navbar-expand-lg navbar-light bg-light crmNav">
            <div className="container-fluid">
              <a className="navbar-brand mr-5" href="#">
                CRM
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fas fa-bars" />
              </button>
              <div className="collapse navbar-collapse " id="navbarText">
                <ul className="navbar-nav me-auto ml-5 mb-2 mb-lg-0">
                  <li className="nav-item ">
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 120 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Filter
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Filter"
                        value={dropdownDate}
                        onChange={handleChangeDropdown}
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
                  </li>
                  <li className="nav-item nav-item22">
                    {" "}
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <MobileDatePicker
                        label="Filter by custom date"
                        inputFormat="MM/dd/yyyy"
                        variant="standard"
                        value={date}
                        onChange={handleChange}
                        renderInput={(params) => (
                          <TextField variant="standard" {...params} />
                        )}
                      />
                    </LocalizationProvider>
                  </li>
                  <li className="nav-item nav-item23">
                    <Button onClick={handleClickOpen} className="btnCrm">
                      Filter by date range
                    </Button>
                    <Dialog
                      disableEscapeKeyDown
                      open={open}
                      onClose={handleClose}
                    >
                      <DialogContent>
                        <DialogTitle>First date</DialogTitle>
                        <Box
                          component="form"
                          sx={{ display: "flex", flexWrap: "wrap" }}
                        >
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <StaticDatePicker
                                orientation="landscape"
                                openTo="day"
                                value={valueDateRange}
                                shouldDisableDate={isWeekend}
                                onChange={handleValueDateRange}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </FormControl>
                          <DialogTitle>Second date</DialogTitle>
                          <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <StaticDatePicker
                                orientation="landscape"
                                openTo="day"
                                value={valueDateRange2}
                                shouldDisableDate={isWeekend}
                                onChange={handleValueDateRange2}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </FormControl>
                        </Box>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleClose}>Ok</Button>
                      </DialogActions>
                    </Dialog>
                  </li>
                  <li className="nav-item nav-item23">
                    <CsvData />
          
                  </li>
                </ul>
                <span className="navbar-text">
                  <Controls
                    label="Search for data"
                    className="searchBar"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleSearch}
                  />
                </span>
              </div>
            </div>
          </nav>
        </div>

        {userData.length > 0 ? (
          <div className="tableCrm ">
            <Paper className="tableDataLayout">
              <TblContainer component={Paper}>
                <TblHead />
                <TableBody sx={{ m: 1, minWidth: 220 }}>
                  {userDataAfterPagingAndSorting().map((item) => (
                    <TableRow key={item.ID}>
                      <TableCell>
                        {moment(item.date_added).format("YYYY-MM-DD")}
                      </TableCell>
                      <TableCell>{item.Name}</TableCell>
                      <TableCell>{item.Email}</TableCell>
                      <TableCell>{item.Surname}</TableCell>
                      <TableCell>
                        {" "}
                        <StarWidget />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </TblContainer>
              <TblPagination />
            </Paper>
          </div>
        ) : (
          <div className="noDataTable">
            <div className="noData">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    {" "}
                    <div className="imgNodata">
                      <img src={noDataImg} alt={"noData"} />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    {" "}
                    <div className="crmTextArea">
                      <h4>Mhm....</h4>
                      <p>
                        That's weird. Unfortunately, theres no available data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CRM;

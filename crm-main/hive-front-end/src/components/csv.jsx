import React, { Component } from "react";
import { CSVLink } from "react-csv";

const headers = [
  { label: "ID", key: "ID" }, 
  { label: "Name", key: "Name" },
  { label: "Surname", key: "Surname" },
  { label: "Email", key: "Email" },
  { label: "Rating", key: "Rating" },
  { label: "Subject", key: "Subject" },
];
const newData = [
  {
    ID: 1,
    Name: "nico",
    Surname: "Something",
    Email: "nico@ska.com",
    Subject: "Hi I am nico",
  },
  {
    ID: 2,
    Name: "lwazi",
    Surname: "Something",
    Email: "lwazi@ska.com",
    Subject: "Hi I am Lwazi",
  },
  {
    ID: 3,
    Name: "robbie",
    Surname: "Something",
    Email: "robbie@ska.com",
    Subject: "Hi I am robbie",
  },
  {
    ID: 4,
    Name: "dave",
    Surname: "Something",
    Email: "dave@ska.com",
    Subject: "hi I am dave",
  },
  {
    ID: 5,
    Name: "steve",
    Surname: "Something",
    Email: "steve@ska.com",
    Subject: "hi I am Steve",
  },
  {
    ID: 6,
    Name: "jordan",
    Surname: "Something",
    Email: "jordan@ska.com",
    Subject: "Hi I am Jordan",
  },
  {
    ID: 7,
    Name: "brett",
    Surname: "Something",
    Email: "brett@ska.com",
    Subject: "Hi I am the boss",
  },
  {
    ID: 8,
    Name: "devin",
    Surname: "Something",
    Email: "devin@ska.com",
    Subject: "Hi I am Devin",
  },
  {
    ID: 9,
    Name: "janno",
    Surname: "Something",
    Email: "janno@ska.com",
    Subject: "hi i am janno",
  },
  {
    ID: 10,
    Name: "kagiso",
    Surname: "Something",
    Email: "kagiso@ska.com",
    Subject: "Hi I am KG",
  },
  {
    ID: 11,
    Name: "harry",
    Surname: "Something",
    Email: "harry@ska.com",
    Subject: "Hi I am the chef",
  },
  {
    ID: 12,
    Name: "kyla",
    Surname: "Something",
    Email: "kyla@ska.com",
    Subject: "Hi I am Kyla",
  },
  {
    ID: 13,
    Name: "gabi",
    Surname: "Something",
    Email: "gabi@ska.com",
    Subject: "Hi I am Gabi",
  },
  {
    ID: 14,
    Name: "michelle",
    Surname: "Something",
    Email: "michelle@ska.com",
    Subject: "Hi I am michelle",
  },
];
export default class CsvData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.csvLinkEl = React.createRef();
  }

  getUserList = () => {
    return fetch("http://localhost:3001/data").then((res) => res.json());
  };
  downloadReport = async () => {
    const UserData = await this.getUserList();

    this.setState({ data: UserData }, () => {
      setTimeout(() => {
        this.csvLinkEl.current.link.click();
      });
    });
  };
  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        {" "}
        <button className="btnCrm" onClick={this.downloadReport}>
          Export{" "}
        </button>
        <CSVLink
          headers={headers}
          data={newData}
          filename="report.csv"
          ref={this.csvLinkEl}
        />
      </div>
    );
  }
}

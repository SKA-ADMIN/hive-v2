import React, { Component } from "react"; 
import { Link } from "react-router-dom";
 
import "./assets/css/sidebar.css";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { addClass: false, isHovered: false };
  }
  handleHover = () => {
    this.setState({ isHovered: !this.state.isHovered });
  };
  handleHoverLeave = () => {
    this.setState({ isHovered: false });
    console.log("object");
  };
  toggle() {
    this.setState({ addClass: !this.state.addClass });
  }
  render() {
    let boxClass = ["sidebar"];
    if (this.state.addClass) {
      boxClass.push("open");
    }
    if (this.state.isHovered) {
      boxClass.push("open");
    }
    return (
      <div>
        <div
          className={boxClass.join(" ")}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHoverLeave}
        >
          <div className="logo-details">
            <i className="bx bx-crown icon"></i>
            <div className="logo_name">Hive</div>
            <i
              className="bx bx-menu"
              id="btn"
              onClick={this.toggle.bind(this)}
            ></i>
          </div>
          <ul className="nav-list">
            <li className="menuItems">
              <i className="bx bx-search"></i>
              <input type="text" placeholder="Search..."></input>
            </li>
            <br />
            <li className="menuItems">
              <div className="breakPointLine">
                <span className="lineText">
                  {" "}
                  <span className="lineNav">- </span>Dashboard
                </span>
              </div>
              <Link to="/dashboard">
                <i className="bx bx-grid-alt"></i>
                <span className="links_name">Overview</span>
              </Link>
            </li>
            <div className="breakPointLine"></div>
            <li className="menuItems">
              <Link to="/analytics">
                <i className="bx bx-pie-chart-alt-2"></i>
                <span className="links_name">Analytics</span>
              </Link>
            </li>
            <li className="menuItems">
              <Link to="/CRM">
                <i className="bx bx-file"></i>
                <span className="links_name">CRM</span>
              </Link>
            </li>
            <li className="menuItems">
              <Link to="/customers">
                <i className="bx bx-user"></i>
                <span className="links_name">Customers</span>
              </Link>
            </li>
            <li className="menuItems">
              <Link to="/call-tracking">
                <i class="bx bx-phone-call"></i>
                <span className="links_name">Call Tracking</span>
              </Link>
            </li>
            <div className="breakPointLine">
              <span className="lineText">
                {" "}
                <span className="lineNav">- </span>Profile
              </span>
            </div>
            <li className="menuItems">
              <Link to="/CRM">
                <i className="bx bx-file"></i>
                <span className="links_name">Account</span>
              </Link>
            </li>
            <li className="menuItems">
              <Link to="/">
                <i className="bx bx-log-out" id="log_out"></i>
                <span className="links_name">Logout</span>
              </Link>
            </li>

            <li className="profile">
              <div className="profile-details">
                <div className="name_job">
                  <div className="name">Jane Doe</div>
                  <div className="job">Google Ads</div>
                </div>
              </div>
              <i className="bx bx-log-out" id="log_out"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Sidebar;

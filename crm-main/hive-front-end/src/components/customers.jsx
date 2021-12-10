import React from "react";
import CollapsibleTable from "./table/customersTAble";
import "./assets/css/customers.css";
import CrmTabImg from "./assets/img/custom-15.svg";

import PagesNav from "./assets/nav/pagesNav";

function Customers() {
  return (
    <div className="contentPages customersPage">
      <div className=" customers">
                <br />
 
          <div className="box bg-gradient-primary overflow-hidden pull-up crmTab">
            <div className="box-body pr-0 pl-lg-50 pl-15 py-0 ">
              <div className="row align-items-center ">
                <div className="col-12 col-lg-8">
                <h1 className="font-size-30 text-white">Welcome Jane !</h1>
                <h4 className="text-white ml-4"><em>Customers</em></h4>
                  <p className="text-white mb-0 font-size-20">
                    View all your customers , lorem ipsum dolor lorem ipsum lorem ipsum lorem ipsum
                  </p>
                </div>
                <div className="col-12 col-lg-4">
                  <img src={CrmTabImg} alt />
                </div>
              </div>
            </div>
          </div> 
        <br />
        <CollapsibleTable />
      </div>
    </div>
  );
}

export default Customers;

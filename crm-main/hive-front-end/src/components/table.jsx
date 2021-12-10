import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import StarWidget from "./rating";

const BasicTable = () => {
  return (
    <MDBTable hover borderless striped>
      <caption>Last updated a minute ago</caption>
      <MDBTableHead>
        <tr>
          
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Rate Lead</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
         
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            {" "}
            <StarWidget />
          </td>
        </tr>
        <tr>
         
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            {" "}
            <StarWidget />
          </td>
        </tr>
        <tr>
         
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
            {" "}
            <StarWidget />
          </td>
        </tr>
        <tr>
  
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>
            {" "}
            <StarWidget />
          </td>
        </tr>
        <tr>

          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
          <td>
            {" "}
            <StarWidget />
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
};

export default BasicTable;

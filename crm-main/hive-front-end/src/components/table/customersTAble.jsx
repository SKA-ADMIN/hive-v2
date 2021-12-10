import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Jazz com", "example@jazzcom.com"," 6.0%", "011 233 4555"),
  createData("Monkey Land", "example@monkeyland.com", "9.0%", "021 232 2337"),
  createData("Botaga", "example@botaga.co.za", "16.0%", "011 233 4555"),
  createData("SARS", "example@sars.co.za", "3.7%", "012 723 1212"),
  createData("Kia", "example@kia.co.za", "16.0%", "231 122 2123"),
  createData("Kia", "example@kia.co.za", "16.0%", "011 234 2122"),
  createData("BMW", "example@bmw.com", "16.0%", "011 234 2122"),
  createData("BMW", "example@bmw.com", "16.0%", "011 234 2122"),
  createData("Ford", "example@ford.com", "16.0%", "011 234 2122"),
  createData("Ford", "example@ford.com", "16.0%", "011 234 2122"),
  createData("Toyota Fourways", "example@toyota.co.za", "16.0%", "011 234 2122"),
  createData("Toyota Fourways", "example@toyota.co.za", "16.0%", "011 234 2122"),
  createData("Toyota Fourways", "example@toyota.co.za", "16.0%", "011 234 2122"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Return Rate</TableCell>
            <TableCell align="center">Phone Number</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({ data, loading }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> No</TableCell>
            <TableCell>Branch Name</TableCell>
            <TableCell>Branch Number</TableCell>
            <TableCell>Last Sync</TableCell>
            <TableCell>Screen No</TableCell>
            <TableCell>Last Modified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading && (
            <TableRow>
              <TableCell colSpan={6}>
                <p className="text-xl text-center">Loading Data...</p>
              </TableCell>
            </TableRow>
          )}
          {!loading &&
            data?.map?.((row, index) => (
              <TableRow
                key={index + 1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.BranchName}</TableCell>
                <TableCell>{row.BranchNbr}</TableCell>
                <TableCell>{row.LastSync}</TableCell>
                <TableCell>{row.ScreenNo}</TableCell>
                <TableCell>{row.LastModifiedDateTime}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

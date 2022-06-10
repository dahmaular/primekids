import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { ContestantContext } from "../../services/contestants-service";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

export default function LeadersBoard() {
  const { 
    leaders, 
    fetchLeadingVotes, 
    // fetchLeadingVotesStage2,
    // fetchLeadingVotesStage3,
    isLoading } =
    useContext(ContestantContext);
  const classes = useStyles();
  

  useEffect(() => {
    fetchLeadingVotes();
    
  }, []);

  return (
    <div className={classes.section}>
      <h1 className="gradient__text mt-4 mb-4">LEADERBOARD</h1>
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell></TableCell>
                <TableCell>Full name</TableCell>
                {/* <TableCell >Age</TableCell> */}
                <TableCell>Votes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaders.map((usr, index) => (
                <TableRow key={usr?._id}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell className="img-cell">
                    <img
                      src={usr?.user?.image}
                      alt="image"
                      style={{ width: 70, height: 75, borderRadius: 50 }}
                    />
                  </TableCell>
                  <TableCell> {usr?.user?.childName}</TableCell>
                  <TableCell>{usr?.votes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}

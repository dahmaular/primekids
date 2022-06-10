import React, {useState, useEffect, useContext} from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SearchBar from "material-ui-search-bar";

import { Link } from 'react-router-dom';
import { ContestantContext } from '../../services/contestants-service';

const useStyles = makeStyles({
  root: {
    width: '100%',
    color:'#000000'
  },
  text: {
    color:'#000000'
  },
  container: {
    // maxHeight: 440,
    // backgroundColor: '#000000'
  },
  table: {
    minWidth: 350,
  },
});
export default function Contestants() {
    const {
      fetchUsers,
      // fetchStage2,
      // fetchStage3,
       isLoading, 
       user, 
       setUser} = useContext(ContestantContext);
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState('');
 
  useEffect(() => {
    fetchUsers();
  },[])

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const requestSearch = (searchVal) => {
    if (searchVal === '') {
      fetchUsers();
    }
    const filteredUser = user.filter((row) => {
      return row.user?.childName?.toLowerCase().includes(searchVal.toLowerCase());
    });
    setUser(filteredUser)
  };
  
  const cancelSearch = () => {
    setSearched('');
    fetchUsers();
  };

  return (
    <>
    {isLoading ? (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    ) : (
    <Paper className={classes.root}>
    <h6 className={classes.text}>If you haven't registered your child, kindly <Link to={'/register'}><Button color='primary' variant='contained'>REGISTER HERE.</Button></Link></h6>
    <SearchBar
    value={searched}
    onChange={(searchVal) => requestSearch(searchVal)}
    onCancelSearch={() => cancelSearch()}
  />
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
          <TableRow>
            <TableCell>S/N</TableCell>
            <TableCell></TableCell>
            <TableCell >Full name</TableCell>
            <TableCell >Age</TableCell>
            <TableCell>Votes</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {user.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((usr, index) => (
            <TableRow key={usr?._id}>
              <TableCell component="th" scope="row">
               {index + 1}
              </TableCell>
              <TableCell className="img-cell"><img src={usr?.user?.image} alt="image" style={{width:140, height:150, borderRadius:50}} /></TableCell>
              <TableCell> {usr?.user?.childName}</TableCell>
              <TableCell>{usr?.user?.age}</TableCell>
              <TableCell>{usr?.votes}</TableCell>
              <TableCell align="right"><Link to={"/profile/"+usr?.user?._id}> <Button color="warning" variant="contained">
            Vote
          </Button> </Link>
          </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={user.length}
        rowsPerPage={rowsPerPage}
        page={page}
        className={classes.text}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    )}
    </>
  );
}
import React, { Component } from 'react';
import '../../../Assets/Styles/HomePage.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const file = require('../../../Text/list.txt');

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#282c34',
    color: '#ffffff',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function handleList() { 
  fetch(file)
  .then(response => response.text())
  .then(text => { 
    var ListArray =  text.split("\n");
    console.log(ListArray);
  })
    
} 
 
class HomePage extends Component {
  
  componentDidMount(){
    handleList();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <p></p>
        </header>
        <div className="App-body">
          <h3>Departamento</h3>
            <Paper className={styles.root}>
              <Table className={styles.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Codigo</CustomTableCell>
                    <CustomTableCell align="center">Nombre</CustomTableCell>
                    <CustomTableCell align="center">Codigo Padre</CustomTableCell>
                    <CustomTableCell align="center">Descripcion Padre</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={styles.row} >
                    <CustomTableCell component="th" scope="row">Lima</CustomTableCell>
                    <CustomTableCell align="center">123123</CustomTableCell>
                    <CustomTableCell align="center"> -- </CustomTableCell>
                    <CustomTableCell align="center"> -- </CustomTableCell>
                  </TableRow>
                  <TableRow className={styles.row} >
                    <CustomTableCell component="th" scope="row">Lima</CustomTableCell>
                    <CustomTableCell align="center">123123</CustomTableCell>
                    <CustomTableCell align="center"> -- </CustomTableCell>
                    <CustomTableCell align="center"> -- </CustomTableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          <h3>Provincia</h3>
          <Paper className={styles.root}>
          <Table className={styles.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Codigo</CustomTableCell>
                <CustomTableCell align="center">Nombre</CustomTableCell>
                <CustomTableCell align="center">Codigo Padre</CustomTableCell>
                <CustomTableCell align="center">Descripcion Padre</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={styles.row} >
                <CustomTableCell component="th" scope="row">
                  Lima
                </CustomTableCell>
                <CustomTableCell align="center">123123</CustomTableCell>
                <CustomTableCell align="center">131313</CustomTableCell>
                <CustomTableCell align="center">13132</CustomTableCell>
 
              </TableRow>
              <TableRow className={styles.row} >
                <CustomTableCell component="th" scope="row">
                  Lima
                </CustomTableCell>
                <CustomTableCell align="center">123123</CustomTableCell>
                <CustomTableCell align="center">131313</CustomTableCell>
                <CustomTableCell align="center">13132</CustomTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
        <h3>Distrito</h3>
          <Paper className={styles.root}>
          <Table className={styles.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Codigo</CustomTableCell>
                <CustomTableCell align="center">Nombre</CustomTableCell>
                <CustomTableCell align="center">Codigo Padre</CustomTableCell>
                <CustomTableCell align="center">Descripcion Padre</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow className={styles.row} >
                <CustomTableCell component="th" scope="row">
                  Lima
                </CustomTableCell>
                <CustomTableCell align="center">123123</CustomTableCell>
                <CustomTableCell align="center">131313</CustomTableCell>
                <CustomTableCell align="center">13132</CustomTableCell>
 
              </TableRow>
              <TableRow className={styles.row} >
                <CustomTableCell component="th" scope="row">
                  Lima
                </CustomTableCell>
                <CustomTableCell align="center">123123</CustomTableCell>
                <CustomTableCell align="center">131313</CustomTableCell>
                <CustomTableCell align="center">13132</CustomTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    </div>
    );
  }
}

export default HomePage;
import React, { Component } from 'react';
import '../../../assets/styles/HomePage.css';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const file = require('../../../assets/text/list.txt');

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
  //  minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = { 
      dataList:[],
      departamentsList:[],
    }
  }

  handleList() { 
    fetch(file)
    .then(response => response.text())
    .then(text => {
      this.setState({
        dataList: text.replace(/[“”]+/g,'').split("\n")
      })
     
    })
  }

  getDepartments(){
    // let departaments = dataList.map(function (dataList) {
    //   return dataList.split('/')[0]
    // });
    // let listing = departaments.filter(function(elem, index, self) {
    //   return index === self.indexOf(elem)
    // }); 
    // this.setState({departamentsList });
  }

  componentDidMount(){
    this.handleList();
    
  }
  render() {
    let  dataList = this.state.dataList;
    console.log(dataList)
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-body">
          <h3>Departamento</h3>
              <Table className={styles.table}>
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Codigo</CustomTableCell>
                    <CustomTableCell align="center">Nombre</CustomTableCell>
                    <CustomTableCell align="center">Codigo Padre</CustomTableCell>
                    <CustomTableCell align="center">Descripcion Padre</CustomTableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                  { departamentsList.map( department =>{
                    return(
                      <TableRow className={styles.row}>
                        <CustomTableCell component="th" scope="row">{department[0]}</CustomTableCell>
                        <CustomTableCell component="th" scope="row">{department[1]}</CustomTableCell>
                        <CustomTableCell component="th" scope="row">{department[2]}</CustomTableCell>
                        <CustomTableCell component="th" scope="row">{department[3]}</CustomTableCell>
                      </TableRow>
                      )
                    })
                  }
                </TableBody> */}
              </Table>
              
          <h3>Provincia</h3>
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
            { dataList.map( elem =>{
              return(
                <TableRow className={styles.row}>
                <CustomTableCell component="th" scope="row">{elem.split(' ')[3]}</CustomTableCell>
                <CustomTableCell component="th" scope="row">{elem.split(' ')[4]}</CustomTableCell>
                <CustomTableCell component="th" scope="row">{elem.split(' ')[0]}</CustomTableCell>
                <CustomTableCell component="th" scope="row">{elem.split(' ')[1]}</CustomTableCell>
              </TableRow>
              )
              })
            }
            </TableBody>
          </Table>

        <h3>Distrito</h3>
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
            { dataList.map( elem =>{
              return(
                <TableRow className={styles.row}>
                <CustomTableCell component="th" scope="row">{elem.split(' ')[6]}</CustomTableCell>
                <CustomTableCell component="th" scope="row">{elem.split(' ')[7]}</CustomTableCell>
                <CustomTableCell component="th" scope="row">{elem.split(' ')[3]}</CustomTableCell>
                <CustomTableCell component="th" scope="row">{elem.split(' ')[4]}</CustomTableCell>
              </TableRow>
              )
              })
            }
            </TableBody>
          </Table>
            
      </div>
    </div>
    );
  }
}

export default HomePage;
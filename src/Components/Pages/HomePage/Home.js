import React , { Component } from 'react';
import '../../../assets/styles/HomePage.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const file = require('../../../assets/text/list.txt');


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    fontWeight:700
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop:0,
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

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { 
      dataFile:[],
      departamentsList:[],
      provinceList:[],
      districtList:[]
    }
  }

  handleFile(){ 
    fetch(file)
    .then(response => response.text())
    .then(text => {
      this.setState({
        dataFile: text.replace(/[“”]+/g,'').split("\n")
      })
      this.getDepartments(this.state.dataFile);
      this.getProvince(this.state.dataFile);
      this.getDistrict(this.state.dataFile);
    })
  }

  getDepartments (dataFile){
    let departments = dataFile.map(function(x){
      return x.split('/')[0]
    });
    let Listing = departments.filter(function(elem, index, self){
      return index === self.indexOf(elem)
    });
    let departamentsList = Listing.map( departments =>
      departments.trim().split(' ')
    );
    this.setState({departamentsList})
  }

  getProvince(dataFile){
    let departments = dataFile.map(function(x){
      let List = x.split('/');
      return [List[0], List[1]]
    });
    let  emptySpaceList = departments.sort(((a,b) => a-b)).filter( function (elem, index, self) {
        return elem[1].trim() !== ''
      });
    let newListing=[];
      emptySpaceList.sort().map(function(value, index){
      (!index || value[1] !== emptySpaceList[index - 1][1]) && newListing.push(value)
      return newListing
    })
    let provinceList = newListing.map(elem =>
      [elem[0].trim().split(' '), elem[1].trim().split(' '),]
    )
    this.setState({provinceList})
  }

  getDistrict(dataFile){
    let departments = dataFile.map(function(x){
      let newList = x.split('/');
      return [newList[1], newList[2]]
    });
    let emptySpaceList = departments.sort((a,b) => a-b).filter( function (elem, index, self) {
      return elem[1].trim() !== ''
    });
    let districtList = emptySpaceList.map(elem =>
      [elem[0].trim().split(' '), elem[1].trim().split(' '), ]
    )
    this.setState({districtList})
  }

  componentDidMount(){
    this.handleFile();
  }
  render(){
     const { classes } = this.props;
     console.log(this.state)
     return(
      <Paper className={classes.root}>
        <div><header className="App-header"> EJERCICIO</header></div>
        <div><h3>DEPARTAMENTO</h3></div>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Código</CustomTableCell>
              <CustomTableCell>Nombre</CustomTableCell>
              <CustomTableCell>Código Padre</CustomTableCell>
              <CustomTableCell>Descripción Padre</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.departamentsList.map((department,id) => (
              <TableRow className={classes.row} key={id}>
                <CustomTableCell component="th" scope="row">
                  {department[0] || '-'}
                </CustomTableCell>
                <CustomTableCell>{department[1] || ' '}</CustomTableCell>
                <CustomTableCell>{department[2] || ' '}</CustomTableCell>
                <CustomTableCell>{department[3] || ' '}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
       </Table>
 
       <h3>PROVINCIA</h3>
       <Table className={classes.table}>
         <TableHead>
           <TableRow>
             <CustomTableCell>Código</CustomTableCell>
             <CustomTableCell>Nombre</CustomTableCell>
             <CustomTableCell>Código Padre</CustomTableCell>
             <CustomTableCell>Descripción Padre</CustomTableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {this.state.provinceList.map((province, id) => (
             <TableRow className={classes.row} key={id}>
               <CustomTableCell component="th" scope="row">
               {province[1][0] || '-'}
               </CustomTableCell>
               <CustomTableCell>{province[1][1] || ' '}</CustomTableCell>
               <CustomTableCell>{province[0][0] || ' '}</CustomTableCell>
               <CustomTableCell>{province[0][1] || ' '}</CustomTableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
 
       <h3>DISTRITO</h3>
       <Table className={classes.table}>
         <TableHead>
           <TableRow>
             <CustomTableCell>Código</CustomTableCell>
             <CustomTableCell>Nombre</CustomTableCell>
             <CustomTableCell>Código Padre</CustomTableCell>
             <CustomTableCell>Descripción Padre</CustomTableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {this.state.districtList.map((district, id) => (
             <TableRow className={classes.row} key={id}>
               <CustomTableCell component="th" scope="row">
               {district[1][0]||'-'}
               </CustomTableCell>
               <CustomTableCell>
               {`${district[1][1]} ${district[1][2]}`||'-'}
               </CustomTableCell>
               <CustomTableCell>{district[0][0]||'-'}</CustomTableCell>
               <CustomTableCell>{district[0][1]||'-'}</CustomTableCell>
             </TableRow>
           ))}
         </TableBody>
       </Table>
     </Paper>
     )
    }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

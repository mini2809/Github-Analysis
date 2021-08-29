import React from "react";
import { connect } from "react-redux";
import { SaveLogin } from "./redux/login/login.actions";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from "@material-ui/core";
import  Container  from "@material-ui/core/Container";
import  TextField  from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
//login 
const useStyles = makeStyles({
  root: {
   marginTop:120,
  },
});

const App=(props)=>{
 const classes= useStyles();
    return(
        
          <Container >
          <AppBar >
            <Toolbar>
              <MenuIcon/>
              <Typography>Settings</Typography>
            
            <Button variant="contained" color="primary" onClick={() => props.saveLogin1()}>
            Login
          </Button>
          </Toolbar>
          </AppBar>
         <TextField className={classes.root}  
         style = {{width: "100%"}} 
         variant="outlined" 
         label="Search" 
         color="primary"
         
         InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}></TextField>
          </Container>
        
    )
}

const mapDispatchToProps = dispatch => {
    return {
      saveLogin1: () => dispatch(SaveLogin()),
      
    }
  }
  export default connect(null, mapDispatchToProps)(App)

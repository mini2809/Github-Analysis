import React from "react";
import { connect } from "react-redux";
import { SaveLogin } from "./redux/login/login.actions";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//login 
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const App=(props)=>{
  const classes = useStyles();
    return(
        <div>
          <Button variant="contained" color="primary" onClick={() => props.saveLogin1()}>
            Login
          </Button>
           
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      saveLogin1: () => dispatch(SaveLogin()),
      
    }
  }
  export default connect(null, mapDispatchToProps)(App)

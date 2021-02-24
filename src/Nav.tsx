import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { MyLogs } from './MyLogs';
import { Workouts } from './Workouts';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';




interface Props {

}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


export const Nav: React.FC<Props> = () => {
    const classes = useStyles();

        return (
            <>
                <div className={classes.root}>
                  <AppBar position="static">
                     <Toolbar>
                       <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                       <Link to="/mylogs">
                        <Button>My Logs</Button>
                       </Link>
                       </IconButton>
                       <IconButton>
                       <Link to="/">
                        <Button> My Workout</Button>
                       </Link>  
                       </IconButton>
                       <IconButton>
                       {/* <Link to="/"> */}
                        <Button color="inherit"> Log Out</Button>
                       {/* </Link>   */}
                       </IconButton>
                     </Toolbar>
                 </AppBar>
                </div>
        </>
        );
}



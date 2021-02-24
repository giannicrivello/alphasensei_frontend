import React, { useContext } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';

import './TechList.css'
import { Guard1Context, Guard2Context, Guard3Context, Pass2Context, Pass3Context, PassingContext, Takedown1Context, Takedown2Context, Takedown3Context } from './TechniqueContext';
import {Link} from 'react-router-dom';




function refresh() {
  window.location.reload();
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: "#44475A",
    },
    avatar: {
        width: 70,
        height: 70,
        marginRight: 20

    },
    title: {
        backgroundColor: "#44475A",
    },
    header: {
        marginLeft: 10,
        color: "white",
    },
    button: {
        backgroundColor: "#FF5555",
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
        borderRadius: 25,
        width: 200,
        hover: "white"
    }
  }),
);

export default function FolderList() {
const classes = useStyles();

// PASSING
const pass1 = useContext(PassingContext)
const pass2 = useContext(Pass2Context)
const pass3 = useContext(Pass3Context)

// GUARD
const guard1 = useContext(Guard1Context)
const guard2 = useContext(Guard2Context)
const guard3 = useContext(Guard3Context)

//TAKEDOWN
const takedown1 = useContext(Takedown1Context)
const takedown2 = useContext(Takedown2Context)
const takedown3 = useContext(Takedown3Context)

  return (
      <>
      <div className={classes.title}>
        <div className="header">
          <h1 className={classes.header}>My Passes</h1>
        </div>
      </div>

      {/* PASSING */}

        {/* //tech1 */}
        {/* link */}
        {/* turnary */}
        <List className={classes.root}>
      {pass1 ? 
      <Link to='/pass1'>
        <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {/* <ImageIcon fontSize="large" /> */}
                <img src="https://cdn.dribbble.com/users/60166/screenshots/3679846/g.jpg?compress=1&resize=80x80" />
              </Avatar>
           </ListItemAvatar>
          <ListItemText primary={pass1?.title} secondary={pass1?.description} />
        </ListItem>
      
      </Link> : null}
      

      {/* //tech2 */}
      {/* link */}
      {/* turnary */}
      {pass2 ? 
        <Link to='/pass2'>
        <ListItem>

        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            {/* <WorkIcon /> */}
            <img src="https://cdn.dribbble.com/users/60166/screenshots/3679846/g.jpg?compress=1&resize=80x80" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={pass2?.title} secondary={pass2?.description}  />
      </ListItem>  
      </Link>
    : null}
        

      {/* //tech 3 */}
      {/* link */}
      {/* turnary */}
      {pass3 ?
      <Link to='/pass3'>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            {/* <BeachAccessIcon /> */}
            <img src="https://cdn.dribbble.com/users/60166/screenshots/3679846/g.jpg?compress=1&resize=80x80" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={pass3?.title} secondary={pass3?.description} />
      </ListItem>
      </Link>
     : null}
    </List>
        
        
      {/* GUARD */}

    {/* Tech1 */}
    <div className={classes.title}>
      <div className="header">
          <h1 className={classes.header}>My Guard</h1>
      </div>
      </div>
      <List className={classes.root}>
      {guard1 ? 
      <Link to='/guard1'>
        <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {/* <ImageIcon fontSize="large" /> */}
                <img src="https://cdn.dribbble.com/users/60166/screenshots/3679846/g.jpg?compress=1&resize=80x80" />
              </Avatar>
           </ListItemAvatar>
          <ListItemText primary={guard1?.title} secondary={guard1?.description} />
        </ListItem>
      
      </Link> : null}
      

      {/* //tech2 */}
      {/* link */}
      {/* turnary */}
      {guard2 ? 
        <Link to='/guard2'>
        <ListItem>

        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            {/* <WorkIcon /> */}
            <img src="https://cdn.dribbble.com/users/60166/screenshots/3679846/g.jpg?compress=1&resize=80x80" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={guard2?.title} secondary={guard2?.description}  />
      </ListItem>  
      </Link>
    : null}
        

      {/* //tech 3 */}
      {/* link */}
      {/* turnary */}
      {guard3 ?
      <Link to='/guard3'>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            {/* <BeachAccessIcon /> */}
            <img src="https://cdn.dribbble.com/users/60166/screenshots/3679846/g.jpg?compress=1&resize=80x80" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={guard3?.title} secondary={guard3?.description} />
      </ListItem>
      </Link>
     : null}
    </List>






{/* TAKEDOWN */}
{/* tech1 */}
{/* Link */}

<div className={classes.title}>
      <div className="header">
          <h1 className={classes.header}>My Takedowns</h1>
      </div>
      </div>
      <List className={classes.root}>
      {takedown1 ? 
      <Link to='/takedown1'>
        <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                {/* <ImageIcon fontSize="large" /> */}
                <img src="https://cdn.dribbble.com/users/60166/screenshots/3679846/g.jpg?compress=1&resize=80x80" />
              </Avatar>
           </ListItemAvatar>
          <ListItemText primary={takedown1?.title} secondary={takedown1?.description} />
        </ListItem>
      
      </Link> : null}
      

      {/* //tech2 */}
      {/* link */}
      {/* turnary */}
      {takedown2 ? 
        <Link to='/takedown2'>
        <ListItem>

        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            {/* <WorkIcon /> */}
            <img src="https://cdn.dribbble.com/users/60166/screenshots/3679846/g.jpg?compress=1&resize=80x80" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={takedown2?.title} secondary={takedown2?.description}  />
      </ListItem>  
      </Link>
    : null}
        

      {/* //tech 3 */}
      {/* link */}
      {/* turnary */}
      {takedown3 ?
      <Link to='/takedwon3'>
      <ListItem>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            {/* <BeachAccessIcon /> */}
            <img src="https://cdn.dribbble.com/users/60166/screenshots/3679846/g.jpg?compress=1&resize=80x80" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={takedown3?.title} secondary={takedown3?.description} />
      </ListItem>
      </Link>
     : null}
    </List>

   
   
    <div className={classes.title}>
      <div className="button">
          <Button className={classes.button} onClick={refresh}>ReGen Drills</Button>



      </div>
    </div>
    </>
  );
}
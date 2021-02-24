import React, { useContext, useState } from 'react';
import { PassingContext } from './TechniqueContext';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box'
import { useMeQuery, usePostToLogMutation } from './generated/graphql';


interface Props {

}

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    button: {
        width: 150,
        borderRadius: 20,
        fontSize: 20,
        background: "#8BE9FD",
        marginTop: 20,
        marginBottom: 20,
        '&:hover': {
        background: "#f00",
    },  
    },
    header: {
        backgroundColor: "#282A36",
        color: "white",
        fontSize: 100,

    },
    background: {
        background: "#282A36",
    },
    rating: {
      width: 200,
      display: 'flex',
      alignItems: 'center'
    }
  }),
);

export const Pass1: React.FC<Props> = () => {

  const pass1 = useContext(PassingContext)

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);


  const [postToUser] = usePostToLogMutation();
  const [title, setTitle] = useState<any>('');
  const [category, setCategory] = useState<any>('');
  const [rank, setRank] = useState<any>('');
  const [user_id, setUser_id] = useState<any>('');

  const me = useMeQuery();
  console.log(me.data?.me?.email)

  function log() {
    setTitle(pass1?.title)
    setCategory(pass1?.category)
    setRank(pass1?.rank)
    setUser_id(me.data?.me?.email)
    alert('if you log a new workout will be generated and this will be saved to your workout')
  }


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



        return (
            <>
            <div className={classes.background}>
            <Link to='/'>
             <Button className={classes.button}>
               <KeyboardArrowLeftIcon />
               Back
        
              </Button>
            </Link>
          <Card className={classes.root}>
          
          <div>
              <h1 className={classes.header}>{pass1?.title}</h1>

          </div>

          <iframe 
          width="100%" height="500" src="https://www.youtube.com/embed/qMy7lKUo8aU" 
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen> 

          </iframe>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
         <div className={classes.root}>
           <p>rate this technique (this will help us improve your daily workout)</p>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon fontSize="large"/>
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
      <form
        onSubmit={async e => {
          e.preventDefault()
          const response = await postToUser({
            variables: {
              title,
              category,
              rank,
              user_id
            }
          })
        }}
        >
        <Button className={classes.button} type='submit' onClick={log}>log</Button>

        </form>
    </Card>
    </div>

            
  </>

        );
}


   
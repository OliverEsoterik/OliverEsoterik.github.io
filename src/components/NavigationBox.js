import React from 'react';
import './NavigationBox.css'
import { makeStyles } from '@material-ui/core/styles';

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 5px',
      transform: 'scale(0.8)',
      opacity: '75%'
    },
    title: {
      fontSize: 12,
    },
    pos: {
      marginBottom: 12,
      marginLeft: 'auto',
      marginRight: 'auto',
      position: 'relative'
    },
  });

  export default function NavigationBox() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div class="animate__animated animate__fadeInLeft">
      We are active investors and startup catalysts
    </div>
);
}

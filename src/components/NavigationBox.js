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
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  export default function NavigationBox() {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div class="animate__animated animate__fadeInLeft">
      We help our clients to grow their Spotify Audience and Fanbase  
          {/* Solutions Architecture {bull} Product Development {bull} Infrastructure {bull} Hyperledger Fabric {bull} Business Design {bull} Growth Engineering */}
    </div>
  );
}

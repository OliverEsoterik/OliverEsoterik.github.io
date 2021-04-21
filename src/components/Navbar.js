import React from 'react';
import Button from '@material-ui/core/Button';

export default function Navbar() {

  return (
    <div style={{
        position: 'absolute', left: '50%', top: '10%',
        transform: 'translate(-50%, -50%)'
    }}>
 
      <Button>Portfolio</Button>
      <Button>Research</Button>
      <Button>Resume</Button>
      <Button>Contact</Button>
    </div>
  );
}

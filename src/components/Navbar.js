import React from 'react';
import './Navbar.css'
import { render } from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


class Navbar extends React.Component {


  render() {
    return (
    <div class="an animate__fadeInDown">
        <Button color="secondary" onClick={() => { downloadFile('whitepaper-growth.pdf') }}>Whitepaper</Button>
        <Button color="secondary" onClick={() => { window.open('mailto:oliver.esoterik@gmail.com') }}>Contact</Button>          
    </div>
  );
}
}

function downloadFile(filePath){
  var link=document.createElement('a');
  link.href = filePath;
  link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
  link.click();
}

export default Navbar
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Tabs className="mod">
        <Tab label="Home" to='/home' component={Link} />
        <Tab label="About" to='/about' component={Link} />
        <Tab label="Blog" to='/home' component={Link} />
        <Tab label="Contacts" to='/contacts' component={Link} />
      </Tabs>
    </div>
  );
}

export default NavBar;
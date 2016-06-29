import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Login</IndexLink>
      {" | "}
      <Link to ="/home" activeClassName="active">Home</Link>
    </nav>

  );
};




export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';


import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <div className="AuthOn">
  <ul>
  <li>  <img id="5" src='./LOGO.png'/>
  </li>
    <li>
      <Link to={ROUTES.LANDING}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>CheckOut</Link>
    </li> 
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
  </div>
);

const NavigationNonAuth = () => (
  <div className="AuthOff">

  <ul>
  <li>  <img id="5" src='./LOGO.png'/>
  </li>
    <li>
      <Link to={ROUTES.LANDING}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
  </div>
);

export default Navigation;

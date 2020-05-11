import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import LOGO from './LOGO.png';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <div className="AuthOn">
  <ul>
  <li>  <img className="logo" alt="paybybarcode" src={LOGO}/>
  </li>
    <li>
      <Link to={ROUTES.LANDING}>Home</Link>
    </li>
    <li>
    <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li> 
    <li>
    <Link to={ROUTES.CHECKOUT}>Checkout</Link>
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
  <li>  <img  alt="" src={LOGO}/>
  </li>
    <li>
      <Link to={ROUTES.LANDING}>Home</Link>
    </li>
    <li>
    <Link to={ROUTES.INFO}>About</Link>
  </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>

  </ul>
  </div>
);

export default Navigation;

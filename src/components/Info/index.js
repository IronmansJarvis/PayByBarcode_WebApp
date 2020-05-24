import React from 'react';
import './index.css';
import bcode1 from './PBBbcode.gif';
import p1 from './1.JPG';
 

const Landing = () => (
  <div className="t">
  <h2>"Now all you need is your phone and you're Set! "</h2>

    <img  src={bcode1} alt="bcode" />
    <div className="p">

    <p>You ever been in a  situation where you were at a cash counter or a restaurant and you forgot your wallet?  </p>
    <p>You had no cash or card on you either?</p>
    <p>Well don't you worry because all you need to pay now is your phone. </p>
    <p>Future is here!</p>
    <p>(Works with Any smartphone)</p>
    </div>
    
    <h3><a href='#team'> Learn About The Meet the Team</a></h3>
    <div className="Behind_curtain" id="team">

    <div className="1">
      <img  alt="1" src={p1}/>
      <h3> <a href="https://www.linkedin.com/in/hussain-bin-farrukh/">HUSSAIN BIN FARRUKH </a> </h3>
      <h5>- PROJECT MANAGER</h5>
 
      </div>
      <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="hussain-bin-farrukh"><a class="LI-simple-link" href='https://www.linkedin.com/in/hussain-bin-farrukh?trk=profile-badge'>Hussain Bin Farrukh</a></div>      
      </div>
      </div>
);

export default Landing;

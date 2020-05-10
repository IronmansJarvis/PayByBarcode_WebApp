import React from 'react';
import './index.css';
import bcode1 from './PBBbcode.gif';
import p1 from './1.JPG';
import p2 from './2.jpg';
import p3 from './3.jpg';


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
      <h5>~PROJECT MANAGER</h5>
      <h5>~Lead Web Application</h5>
      <h5> ~Lead Web interface design</h5>
      <h5>  ~Lead Mobile interface design</h5>
      <h5>~Lead Production Build</h5>

      </div>
      <div className="2">
      <img alt="2" src={p2}/>
      <h3><a href="https://www.linkedin.com/in/leland-fletcher-4b742b139/"> LELAND FLETCHER</a></h3>
      <h5>~Lead Database Design</h5>
      <h5>~Lead Database implementation</h5>

      </div>
      <div className="3">
      <img  alt="3" src={p3}/>
      <h3> <a href="https://www.linkedin.com/in/taylor-benefield-b8a5b7196/">TAYLOR BENEFIELD </a></h3>
      <h5>~Lead Mobile App development</h5>
    

      </div>
    
    </div>
    <hr/>
    <h4>PayByBarcode LTD</h4>
    </div>
);

export default Landing;

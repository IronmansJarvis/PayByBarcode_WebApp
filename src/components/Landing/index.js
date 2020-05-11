import React from 'react';
import "./info_page.css"
import phonewf from './phone-finger.png';
import socialP from './scanp1.png';
import phone from './phone (1).png'


const Info = () => (
  <div className="info-p">
  <h1>Welcome to PayByBarcode</h1>
    <h3>Here's All you need to know</h3>

  <div >
  <ul className="infospace">
      <li className='c1'>
          <p className="Step1">Step One:</p>
          <p className="p1">Generate a barcode on the PayByBarcode App</p>
          <img  alt="3" src={phonewf}/>
        </li>
        <li className='c2'>
          <p className="Step2">Step Two:</p>
          <p className="p2">Scan the Generated barcode and follow the link.</p>
          <img  alt="3" src={socialP}/>
        </li>
        <li className='c3'>
          <p className="Step3">Step Three:</p>
          <p className="p3">Navigate the PayByBarcode website and proceed to Checkout.</p>
          <img  alt="3" src={phone}/>
        </li>
    </ul>

  </div>

  </div>
);

export default Info;

import React from 'react';
import './HomePage.styles.css';

import StripeCheckoutButton from './Checkout';


export const HomePage = props => (
<div className = 'HomePage'>
    <img alt= " title"src={"Screenshot_5.png"}></img>
    <div className = 'Title'>
    <h2>"Now all you need is a phone that can scan a code and you're Set!"</h2>
    </div>
    <div className='Nav-Bar'>
    </div>
    <div className='Checkout'>
        <p>Here after some time when we have our database fullt setup and operationalble along with it integrating with this webapp we will see the details of the vendor and amount of how much we need to pay through this choukout:</p>
      <StripeCheckoutButton />
    </div>
</div>
);

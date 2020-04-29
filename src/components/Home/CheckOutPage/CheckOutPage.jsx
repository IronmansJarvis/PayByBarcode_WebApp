import React from 'react';
import './CheckOutPage.css';
import StripeCheckoutButton from './Checkout';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

 const CheckOutPage = function ({match}){
  
    var status = "Please continue to process the transaction.";
    var amount  = match.params.amount;   if ( amount == undefined){ amount = "amount= $---"; status = "You do not have any transactions in process. "};
    amount =  amount.split('amount=$');
    var id = match.params.id;  if ( id == undefined){ id = "id=---"; };
    id = id.split('id=');
    return (  
      <div className = 'CheckOutPage'>
      <h2>{status} </h2>
      
        <div className='Checkout'>
        <ul>
        <li> <h2>Payment Amount:  $ {amount} </h2> </li> 
        <li> <h2>Transaction ID:  {id}</h2>     </li>
        </ul>
          <StripeCheckoutButton />
        </div>
      
        </div>
      );
  };

  export default CheckOutPage;


/* if ( price == undefined){
      price = "amount=$0";
    };
   */
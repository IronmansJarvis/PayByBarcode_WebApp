import React from 'react';
import './CheckOutPage.css';
import StripeCheckoutButton from './StripeCheckout';
import PPB from './PayPalBtn'

 const CheckOutPage = function ({match}){
  
    var status = "Please Select A Payment Method To Continue.";
    var amount  = match.params.amount;   if ( amount === undefined){ amount = "---"; status = "You do not have any transactions in process. "};
    amount =  amount.split('amount=');

    var id = match.params.id;  if ( id === undefined){ id = "---"; };
    id = id.split('id=');


    var des = match.params.des; if ( des === undefined){ des = "---"; };
    des = des.split('des=');

    var name = match.params.name; if ( name === undefined){ name = "---"; };
    name = name.split('name=');






    return (  
      <div className = 'CheckOutPage'>
      <h2>{status} </h2>
      
        <div className='Checkout'>
        <ul>
        <li>  <b>Name:</b> {name}</li>
        <li> <b>Payment Amount: $</b>{amount}  </li> 
        <li> <b>Transaction ID: </b> {id}     </li>
        <li> <b>Description: </b> {des}</li>
        </ul>
        <p>For payment using Credit or Debt Card</p>
          <StripeCheckoutButton  price={amount}/>
          <p>For payment using PayPal</p>
         
          <PPB total={amount}/>
        </div>
      

        
        </div>
      );
  };

  export default CheckOutPage;


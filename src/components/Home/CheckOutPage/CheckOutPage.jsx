import React from 'react';
import './CheckOutPage.css';
import StripeCheckoutButton from './Checkout';


 const CheckOutPage = function ({match}){
  
    var status = "Please continue to process the transaction.";
    var amount  = match.params.amount;   if ( amount === undefined){ amount = "amount= $---"; status = "You do not have any transactions in process. "};
    amount =  amount.split('amount=$');
    amount = amount.toString().match(/\d+/g);

    var id = match.params.id;  if ( id === undefined){ id = "id=---"; };
    id = id.split('id=');
    return (  
      <div className = 'CheckOutPage'>
      <h2>{status} </h2>
      
        <div className='Checkout'>
        <ul>
        <li> <h2>Payment Amount:  $ {amount} </h2> </li> 
        <li> <h2>Transaction ID:  {id}</h2>     </li>
        <li>  <h2>Reciever: Buisness Name</h2></li>
        </ul>
          <StripeCheckoutButton  price={amount}/>
        </div>
      
        </div>
      );
  };

  export default CheckOutPage;


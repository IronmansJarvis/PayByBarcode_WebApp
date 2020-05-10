import './CheckOutPage.css';
import React, {useState, useEffect} from 'react';
import StripeCheckoutButton from './StripeCheckout';
import PPB from './PayPalBtn';
import Firebase from '../../Firebase';

 const CheckOutPage = ({ match }) => {
       //initialize state
       const [amount, setAmount] = useState(0);
       const [name, setName] = useState('');
       const [id, setId] = useState('');
       const [des, setDes] = useState('');
      var status = "Please Select A Payment Method To Continue.";
      var invoice  = match.params.invoice;   if ( invoice === undefined){ invoice = "t3kOlJT2fskMgzq3YPJE"; status = "You do not have any transactions in process. "};
      invoice =  invoice.split('invoice=');
      var key = match.params.key;  if ( key === undefined){ key = "l585anq4gghf0lw2nkjju5"; };
      key = key.split('key=');
      //initialize firebase and search for invoice in the url.  This function should only run one time
      useEffect(() => {
        //check if invoice is undefined first
        var firebase = new Firebase();
         console.log("------------here------------")
         console.log( 'invoice = ' + invoice[1]  + invoice[0]);
         console.log('key = ' + key[0] + key[1]);
         
         if ( invoice[1] === undefined){ invoice[1] = "3w1uYuXNBmCsSrCrR9DS";}
         if ( key[1] === undefined){ key[1] = "l585anq4gghf0lw2nkjju5"; };
        firebase.store.collection('invoices').doc(invoice[1]).get()
        .then(function(doc) {
          if(doc.exists) {                       //check if document exists in firebase
            console.log('doc exists');
            doc = doc.data();
            if(doc.securityKey === key[1]) {         //check if security key in url matches security key in firebase
              console.log('security key matched');
              setName(doc.user);                 //set variables
              setAmount(doc.payment);
              if(invoice[1] === "3w1uYuXNBmCsSrCrR9DS"){ 
                invoice = "-----";
                setId(invoice);              }
                setId(invoice);
              setDes(doc.description);
            }
            else {
              console.log('security key not found');
              
            }
          }
          else
            console.log("doc does not exist");
  
        })
        .catch(function(error) {
          alert(error);
        });
      }, []);


    return (  
      <div className = 'CheckOutPage'>
      <h2>{status} </h2>
      
        <div className='Checkout'>
        <ul>
        <li>  <b>Name:</b> {name}</li>
        <li> <b>Payment Amount: $</b>{amount}  </li> 
        <li> <b>Your Invoice ID: </b> {id}     </li>
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



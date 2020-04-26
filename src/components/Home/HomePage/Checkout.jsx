import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
   const stripePrice = price * 100;
   const publishableKey = 'pk_test_9Vx8e3fYCgvnTcL7VcPABfqb00gUK0XHu1'
    const onToken = token => {
        console.log(token);
        alert('payment Successful');
    }

    return(
           
        <StripeCheckout
        label = 'Pay Now'
        name = 'PayByBarcode Ltd.'
        shippingAddress
        billingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={'Your total is $$50.00 '}
        amount={stripePrice}
        token={onToken}
        stripeKey={publishableKey}
        />
       

    )

    };

    export default StripeCheckoutButton;

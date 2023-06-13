
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const CheckoutForm = ({ price }) => {
    // console.log(price);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const {user} = useContext(AuthContext);
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    // console.log(clientSecret);

    useEffect(() => {
      if(price > 0){
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type':'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify({price})
        })
        .then(res => res.json())
        .then(data => {
            setClientSecret(data.clientSecret)
        } )
      }
    }, [price])



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
            setCardError(error.message);
            console.log('error', error)
        }
        else {
            setCardError('')
            // console.log('pay method', paymentMethod)
        }

        setProcessing(true);

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'no email',
                  name: user?.displayName || 'no name'
                },
              },
            },
          );
          
          if(confirmError){
            console.log(confirmError);
          }
          console.log('payment intent',paymentIntent);
          setProcessing(false);
          if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id)
            
          }
    }
    return (
        <>
            <form className='w-2/3 mx-auto' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-600'>{cardError}</p>}
            {transactionId && <p className='text-green-600'>Your Transaction ID: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;
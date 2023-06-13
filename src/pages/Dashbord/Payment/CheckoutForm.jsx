
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const CheckoutForm = ({ price, name, itemId }) => {
    // console.log(price);
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useContext(AuthContext);
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    // console.log(clientSecret);

    useEffect(() => {
        if (price > 0) {
            fetch('http://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                },
                body: JSON.stringify({ price })
            })
                .then(res => res.json())
                .then(data => {
                    setClientSecret(data.clientSecret)
                })
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
        const { error, } = await stripe.createPaymentMethod({
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

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
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

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent);
        setProcessing(false);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // saving info for payment
            const payment = {
                userEmail: user?.email,
                userName: user?.displayName,
                transactionId: paymentIntent.id,
                price,
                name,
                date: new Date(),
                itemId: itemId,
            }

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`,
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    // alert
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'payment successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            });
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
            {transactionId && <p className='text-green-600 ml-40 mt-10'>Your Transaction ID: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;
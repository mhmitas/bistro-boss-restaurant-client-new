import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../components/hooks/useAxiosSecure';
import { useCartItems } from '../../../../components/hooks/useCart';
import useAuth from '../../../../hooks/useAuth';

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState('')
    const [error, setError] = useState('')
    const axiosSecure = useAxiosSecure()
    const stripe = useStripe()
    const elements = useElements()
    const { user } = useAuth()

    const [cartItems] = useCartItems()
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then((res) => {
                    setClientSecret(res.data.clientSecret)
                    console.log(res.data.clientSecret);
                })
        }
    }, [totalPrice])

    async function handleSubmit(event) {
        event.preventDefault()
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('payment error:', error);
            setError(error.message)
        } else {
            console.log('payment methode:', paymentMethod);
            setError('')
        }

        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error:', confirmError);
            setError(confirmError.message)
        } else {
            console.log('paymentIntent:', paymentIntent);
            setError('')
        }
    }

    return (
        <>
            <form className='bg-gray-100 p-6 max-w-md mx-auto' onSubmit={handleSubmit}>
                <CardElement />
                <button type="submit" className='btn btn-sm btn-info mt-4' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            <div className="card-body text-error">{error}</div>
        </>
    );
};

export default CheckoutForm;
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()

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
        } else {
            console.log('payment methode:', paymentMethod);
        }
    }

    return (
        <form className='bg-gray-100 p-6 max-w-md mx-auto' onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" className='btn btn-sm btn-info mt-4' disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;
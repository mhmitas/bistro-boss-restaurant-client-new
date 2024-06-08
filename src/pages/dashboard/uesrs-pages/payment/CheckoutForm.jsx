import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../components/hooks/useAxiosSecure';
import useCart, { useCartItems } from '../../../../components/hooks/useCart';
import useAuth from '../../../../hooks/useAuth';
import Container from '../../../../components/common/container/Container';
import SectionTitle from '../../../../components/common/section-title/SectionTitle';
import toast, { } from "react-hot-toast";

/////////////////////////////////////////////
// set up React Stripe.js and use Elements //
/////////////////////////////////////////////

const CheckoutForm = () => {
    const [error, setError] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('')
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const stripe = useStripe();
    const elements = useElements();

    const [cartItems] = useCartItems()
    const [cart] = useCart()
    const price = cartItems.reduce((total, item) => parseFloat(total + item.price), 0)

    // console.log(cart);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: price })
                .then(res => {
                    // console.log(res.data);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price])

    async function handleSubmit(event) {
        event.preventDefault()
        setProcessing(true)

        if (price < 1) { return toast.error('Your payment amount is empty') }

        if (!stripe || !elements) {
            setProcessing(false);
            return
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            setProcessing(false)
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('Payment Error:', error);
            setProcessing(false)
            setError(error.message)
        } else {
            console.log('Payment method:', paymentMethod);
            setError('')
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName || 'anonymous',
                },
            },
        });

        if (confirmError) {
            console.log('confirm error:', confirmError);
            setProcessing(false)
            setError(confirmError.message)
        }
        if (paymentIntent.status === 'succeeded') {
            const paymentInfo = {
                customerEmail: user?.email,
                customerName: user?.displayName,
                price: price,
                date: new Date(),
                cartIds: cart.map(item => item._id),
            }
            const res = await axiosSecure.post('/payment', paymentInfo)
            console.log(res.data);
            if (res.data.insertedId) {
                toast.success('Payment completed successfully')
            }
            console.log('Payment intent:', paymentIntent);
        }
        setProcessing(false)
    }

    return (
        <Container>
            <SectionTitle subHeading={`Payment amount: $${price}`} />
            <form className='bg-gray-100 p-6 max-w-md mx-auto' onSubmit={handleSubmit}>
                <CardElement />
                <button disabled={!stripe || processing} type='submit' className='btn btn-primary mt-4'>Pay</button>
            </form>
            <div className="text-error">{error && error}</div>
            {processing && <span>Processing...</span>}
        </Container>
    );
};

export default CheckoutForm;
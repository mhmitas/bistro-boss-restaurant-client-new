import React from 'react';
import Container from '../../../../components/common/container/Container';
import SectionTitle from '../../../../components/common/section-title/SectionTitle';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm';

// TODO: need pk here
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)

const Payment = () => {
    return (
        <Container>
            <SectionTitle heading="Payment"></SectionTitle>
            {/*  */}
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </Container>
    );
};

export default Payment;
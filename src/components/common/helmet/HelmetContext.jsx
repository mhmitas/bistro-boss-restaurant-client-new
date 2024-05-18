import React from 'react';
import { Helmet } from 'react-helmet-async';

const MyHelmet = ({ title }) => {
    return (
        <Helmet>
            <title>{title} - Bistro Boss</title>
        </Helmet>
    );
};

export default MyHelmet;
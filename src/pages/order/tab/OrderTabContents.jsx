import React, { useState } from 'react';
import FoodCard from '../../../components/common/food-card/FoodCard';
import axios from 'axios';

const OrderTabContents = ({ category }) => {
    // console.log(items);
    return (
        <div className='md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6 gap-4'>
            {
                category.map(item => <FoodCard item={item} key={item._id} />)
            }
        </div>
    )
};

export default OrderTabContents;
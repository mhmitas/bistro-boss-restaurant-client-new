import React, { useEffect, useState } from 'react';
import MenuCover from '../../components/common/menu-cover/MenuCover';
import axios from 'axios';
import OrderTabContents from './tab/OrderTabContents';
import { useParams } from 'react-router-dom';

const Order = () => {
    const params = useParams()
    console.log(params?.category);

    const [category, setCategory] = useState(params?.category)
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL}/menu?category=${category}`)
            .then(res => {
                setItems(res.data)
                // console.log(res.data);
            })
    }, [category])

    function handleTabButton(e) {
        // console.log(e.target.value);
        setCategory(e.target.value);

    }
    return (
        <div>
            <MenuCover image="https://i.ibb.co/6FSDVxD/banner2.jpg" title="Order food"></MenuCover>

            <div className='m-12 mb-10'>
                <div role="tablist" className="tabs tabs-bordered w-max mx-auto *:text-lg font-semibold">
                    <button className={`tab ${category === 'salad' && 'tab-active text-warning'}`} role='tab' onClick={handleTabButton} value="salad">Salad</button>
                    <button className={`tab ${category === 'pizza' && 'tab-active text-warning'}`} role='tab' onClick={handleTabButton} value="pizza">Pizza</button>
                    <button className={`tab ${category === 'soup' && 'tab-active text-warning'}`} role='tab' onClick={handleTabButton} value="soup">Soups</button>
                    <button className={`tab ${category === 'dessert' && 'tab-active text-warning'}`} role='tab' onClick={handleTabButton} value="dessert">Desserts</button>

                </div>
            </div>

            <OrderTabContents category={items}></OrderTabContents>
        </div >
    );
};

export default Order;

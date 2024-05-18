import React, { useEffect, useState } from 'react';
import MenuCover from '../../components/common/menu-cover/MenuCover';
import axios from 'axios';
import FoodCard from '../../components/common/food-card/FoodCard';
import OrderTabContents from './tab/OrderTabContents';

const Order = () => {
    const [category, setCategory] = useState('salad')
    const [menu, setMenu] = useState([])
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_URL}/menu?category=${category}`)
            .then(res => {
                setItems(res.data)
                // console.log(res.data);
            })
    }, [category])

    function handleTabButton(e) {
        console.log(e.target.value);
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
                    <button className={`tab ${category === 'dessert' && 'tab-active text-warning'}`} role='tab' onClick={handleTabButton} value="dessert">Disserts</button>

                </div>
            </div>

            <OrderTabContents category={items}></OrderTabContents>
        </div >
    );
};

export default Order;

{/* <input
    onClick={handleTabButton}
    type="radio"
    value='salad'
    name="my_tabs_1" role="tab"
    className={`tab ${category === 'salad' && 'tab-active'} font-bold mb-4`}
    aria-label="Salad" /> */}
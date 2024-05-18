import React, { useEffect, useState } from 'react';
import MenuCover from '../../components/common/menu-cover/MenuCover';
import axios from 'axios';
import FoodCard from '../../components/common/food-card/FoodCard';

const Order = () => {
    const [category, setCategory] = useState('salad')
    const [menu, setMenu] = useState([])
    const [items, setItems] = useState([])
    useEffect(() => {
        axios.get('menu.json')
            .then(res => {
                setMenu(res.data)
            })
    }, [])

    useEffect(() => {
        const updateItem = (menu.filter(item => item.category === category))
        console.log(updateItem);
    }, [category])

    function handleTabButton(e) {
        console.log(e.target.value);
        setCategory(e.target.value);

    }
    return (
        <div>
            <MenuCover image="https://i.ibb.co/6FSDVxD/banner2.jpg" title="Order food"></MenuCover>

            <div className='mt-10 mb-4'>
                <div role="tablist" className="tabs tabs-bordered w-max mx-auto">
                    <input
                        onClick={handleTabButton}
                        type="radio"
                        value='salad'
                        name="my_tabs_1" role="tab"
                        className={`tab ${category === 'salad' && 'tab-active'} font-bold mb-4`}
                        aria-label="Salad" />
                    <input
                        onClick={handleTabButton}
                        type="radio"
                        value='pizza'
                        name="my_tabs_1" role="tab"
                        className={`tab ${category === 'pizza' && 'tab-active'} font-bold mb-4`}
                        aria-label="Pizza" />
                    <input
                        onClick={handleTabButton}
                        type="radio"
                        value='dessert'
                        name="my_tabs_1" role="tab"
                        className={`tab ${category === 'dessert' && 'tab-active'} font-bold mb-4`}
                        aria-label="Dessert" />
                </div>
            </div>

            <div className='md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {
                    items.map(item => <FoodCard item={item} key={item._id} />)
                }
            </div>
        </div >
    );
};

export default Order;
import React from 'react';

const MenuItemCard = ({ item }) => {
    const { name, image, price, recipe, category } = item;

    return (
        <div className='flex flex-col sm:grid grid-cols-6 gap-4 p-4 shadow-md bg-base-100 rounded-md'>
            <div className='col-span-2'>
                <img className='w-full rounded-full rounded-tl-sm ' src={image} alt="" />
            </div>
            <div className='col-span-3 space-y-2'>
                <h3 className='uppercase'>{name} -----------</h3>
                <p className='text-justify'>"{recipe}"</p>
                <p>Category: <span className='badge badge-info '>{category}</span></p>
            </div>
            <div className='flex justify-end'>
                <p className=' badge badge-lg badge-warning'>${price}</p>
            </div>
        </div>
    );
};

export default MenuItemCard;
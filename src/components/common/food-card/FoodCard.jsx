import React from 'react';

const FoodCard = ({ item }) => {
    let { name, image, price, recipe, category } = item;
    return (
        <div>
            <div className="card bg-base-100 shadow-md rounded-md">
                <figure className='relative'>
                    <span className='badge badge-neutral badge-lg rounded-md p-4 absolute top-4 right-4'>${price}</span>
                    <img src={image} alt="" className="w-full" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name.slice(0, 18)} ({category})</h2>
                    <p className="">{recipe.slice(0, 66)}</p>
                    <div className='card-actions justify-center mt-2'>
                        <button className='uppercase btn btn-warning btn-outline font-semibold  border-0 border-b-2 btn-sm'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const FoodCard = ({ item }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useAuth()
    let { name, image, price, recipe, category } = item;

    function handleAddToCart(item) {
        if (user && user.email) {
            console.log(item);

        } else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to continue",
                allowOutsideClick: false,
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/auth/login', { state: { from: location } })
                }
            });
        }
    }

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
                        <button
                            onClick={() => handleAddToCart(item)}
                            className='uppercase btn btn-warning btn-outline font-semibold  border-0 border-b-2 btn-sm rounded-sm'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
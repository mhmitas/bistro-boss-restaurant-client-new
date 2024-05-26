import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios'
import toast from 'react-hot-toast'
import useCart from '../../hooks/useCart';

/////////////////////////////////////////////////////////////////
// TODO: REMOVE ALL FUNCTIONALITY FROM CARD TO THE ORDER PAGE ///
/////////////////////////////////////////////////////////////////
const FoodCard = ({ item }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useAuth()
    const [cart, refetch] = useCart()
    let { name, image, price, recipe, category, _id } = item;

    // extracting itemIds from cart items and checking does the _id(which i want to add) already exist?  
    const cartItemsIds = cart.map(item => item.itemId)
    const doesExists = cartItemsIds.includes(_id)

    function handleAddToCart() {
        if (doesExists) {
            // toast.error('already exists')
            return
        }
        if (user && user.email) {
            const cartItem = {
                itemId: _id,
                userId: user.uid,
                userEmail: user.email
            }
            axios.post(`${import.meta.env.VITE_URL}/carts`, cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data?.insertedId) {
                        toast.success(`${name} added to the cart`)
                    }
                    // refetch the cart to update the cart 
                    refetch()
                })
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
                            onClick={handleAddToCart}
                            className='uppercase btn btn-warning btn-outline font-semibold  border-0 border-b-2 btn-sm rounded-sm'
                        >{doesExists ? 'Added' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
import React from 'react';
import { useCartItems } from '../../../components/hooks/useCart';
import Container from '../../../components/common/container/Container';
import { FaTrash } from 'react-icons/fa'
import LoadingBars from '../../../components/common/loading/LoadingBars';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import toast from "react-hot-toast";
import confirm from '../../../components/common/modal/confirm';
import { Link } from 'react-router-dom';

const Cart = () => {
    // const [cart] = useCart()
    const axiosSecure = useAxiosSecure()
    // get cart items added by the user
    const [cartItems, isLoading, refetch] = useCartItems()

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)

    async function handleDelete(id) {
        const ask = await confirm('Are you sure? You want to remove this item from your cart.')
        if (!ask) { return }
        try {
            const res = await axiosSecure.delete(`/carts/${id}`)
            if (res.data.deletedCount) {
                toast.success('Deleted')
                refetch()
            }
        } catch (err) {
            console.error(err);
        }
    }

    if (isLoading) return <LoadingBars />

    return (
        <>
            <Container>
                <div className='flex justify-between my-6 items-center'>
                    <h3 className="text-2xl font-semibold text-center my-4">Items: {cartItems.length}</h3>
                    <h3 className="text-2xl font-semibold text-center my-4">Total Price: ${parseFloat(totalPrice).toFixed(2)}</h3>
                    {
                        cartItems.length > 0 ?
                            <Link to="/dashboard/payment">
                                <button className='btn btn-sm btn-info'>Pay</button>
                            </Link>
                            :
                            <button disabled className='btn btn-sm btn-info'>Pay</button>
                    }
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className='bg-base-100'>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* rows */}
                                {
                                    cartItems.map((item, idx) => <TableRow
                                        key={item._id}
                                        item={item}
                                        index={idx}
                                        handleDelete={handleDelete}
                                    ></TableRow>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Cart;


function TableRow({ item, index, handleDelete }) {
    return (
        <>
            <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </td>
                <td>{item.name} ({item.category})</td>
                <td>$ {item.price}</td>
                <th>
                    <button onClick={() => handleDelete(item._id)} className="btn hover:btn-error btn-sm"><FaTrash size={15} /></button>
                </th>
            </tr>
        </>
    )
}
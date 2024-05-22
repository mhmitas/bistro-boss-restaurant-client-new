import React from 'react';
import { useCartItems } from '../../../components/hooks/useCart';
import Container from '../../../components/common/container/Container';
import { FaTrash } from 'react-icons/fa'
import LoadingBars from '../../../components/common/loading/LoadingBars';
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import toast from "react-hot-toast";

const Cart = () => {
    // const [cart] = useCart()
    const axiosSecure = useAxiosSecure()
    // get cart items added by the user
    const [cartItems, isLoading, refetch] = useCartItems()

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0)
    // console.log();

    function handleDelete(id) {
        // console.log(id);
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // i will delete it
                    axiosSecure.delete(`/carts/${id}`)
                        .then(res => {
                            console.log(res.data);
                            if (res.data.deletedCount) {
                                toast.success('Deleted')
                                refetch()
                            }
                        })
                }
            });
        } catch (err) {

        }
    }

    if (isLoading) return <LoadingBars />

    return (
        <>
            <Container>
                <div className='flex justify-between my-6'>
                    <h3 className="text-2xl text-center my-4">Items: {cartItems.length}</h3>
                    <h3 className="text-2xl text-center my-4">Total Price: ${totalPrice}</h3>
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
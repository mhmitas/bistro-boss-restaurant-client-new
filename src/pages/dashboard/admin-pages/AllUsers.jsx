import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import Container from '../../../components/common/container/Container';
import LoadingBars from '../../../components/common/loading/LoadingBars';
import { FaTrashAlt, FaUserAlt } from "react-icons/fa";
import Swal from 'sweetalert2'
import toast from "react-hot-toast";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], isPending, refetch, error } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users')
            // console.log(data);
            return data
        }
    })

    function handleDelete(user) {
        console.log(user);
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
                    axiosSecure.delete(`/users/${user._id}`)
                        .then(res => {
                            // console.log(res.data);
                            if (res.data.deletedCount) {
                                toast.success('Deleted')
                                refetch()
                            }
                        })
                }
            });
        } catch (err) {
            console.error(err);
        }
    }

    async function handleMakeAdmin(user) {
        if (!confirm('You are making this user an admin')) {
            return
        }
        try {
            const { data } = await axiosSecure.patch(`/users/admin/${user._id}`)
            if (data.modifiedCount > 0) {
                toast.success(`${user.name} is now Admin`)
                console.log(data);
                refetch()
            }
        } catch (err) {
            console.error(err);
        }
    }

    if (isPending) return <LoadingBars />
    if (error) return <span>{error.message}</span>
    return (
        <Container>
            <div>
                <div className='flex justify-between my-6'>
                    <h3 className="text-2xl text-center my-4">All Users</h3>
                    <h3 className="text-xl text-center my-4">Total Users: {users.length}</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="table bg-base-100">
                        {/* head */}
                        <thead className='bg-base-300'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row  */}
                            {
                                users.map((user, index) => <UsersTableRow
                                    user={user}
                                    key={user._id}
                                    index={index}
                                    handleDelete={handleDelete}
                                    handleMakeAdmin={handleMakeAdmin}
                                />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    );
};

export default AllUsers;


const UsersTableRow = ({ user, index, handleDelete, handleMakeAdmin }) => {
    const { name, email, _id } = user

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>
                    {
                        user?.role === 'admin' ?
                            <span className="badge badge-primary">Admin</span>
                            :
                            <button onClick={() => handleMakeAdmin(user)} className='btn btn-neutral btn-xs'><FaUserAlt /></button>
                    }
                </td>
                <td>
                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-xs"><FaTrashAlt size={15} /></button>
                </td>
            </tr>
        </>
    );
};

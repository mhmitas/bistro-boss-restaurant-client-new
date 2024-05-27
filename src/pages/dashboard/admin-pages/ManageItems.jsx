import React, { useState } from 'react';
import SectionTitle from '../../../components/common/section-title/SectionTitle';
import { FaEdit, FaTrash } from 'react-icons/fa'
import useMenu from '../../../components/hooks/useMenu';
import Container from '../../../components/common/container/Container';
import confirm from '../../../components/common/modal/confirm';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import toast, { } from "react-hot-toast";


const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure()

    async function handleDelete(id) {
        const ask = await confirm('Are you sure you want to delete this item?')
        if (ask) {
            const res = await axiosSecure.delete(`/menu/${id}`)
            if (res.data.deletedCount > 0) {
                toast.success('Item Deleted')
                refetch()
            }
        }

    }
    async function handleEdit() {
        const result = await confirm('Do you want to edit this item?')
    }

    return (
        <Container>
            <SectionTitle heading="MANAGE ALL ITEMS" subHeading="Hurry up" />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-base-100'>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {
                            menu.map((item, idx) => <TableRow
                                key={item._id}
                                item={item}
                                index={idx}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            ></TableRow>)
                        }

                    </tbody>
                </table>
            </div>
        </Container>
    );
};


function TableRow({ item, index, handleDelete, handleEdit }) {
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
                    <button onClick={() => handleEdit(item._id)} className="btn hover:btn-info btn-sm"><FaEdit size={15} /></button>
                </th>
                <th>
                    <button onClick={() => handleDelete(item._id)} className="btn hover:btn-error btn-sm"><FaTrash size={15} /></button>
                </th>
            </tr>
        </>
    )
}

export default ManageItems;
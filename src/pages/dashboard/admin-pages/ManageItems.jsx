import React, { useState } from 'react';
import SectionTitle from '../../../components/common/section-title/SectionTitle';
import { FaEdit, FaTrash } from 'react-icons/fa'
import useMenu from '../../../components/hooks/useMenu';
import Container from '../../../components/common/container/Container';
import ConfirmModal from '../../../components/common/modal/ConfirmModla';

const ManageItems = () => {
    const [menu] = useMenu();
    const [isModalOpen, setIsModalOpen] = useState(false);
    function handleDelete() {
        setIsModalOpen(true);
    }
    const handleConfirm = () => {
        // Handle the confirmation logic here
        console.log('Confirmed!');
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

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
                            ></TableRow>)
                        }

                    </tbody>
                </table>
                {isModalOpen && (
                    <ConfirmModal
                        message="Are you sure you want to delete this item?"
                        onConfirm={handleConfirm}
                        onCancel={handleCancel}
                    />
                )}
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
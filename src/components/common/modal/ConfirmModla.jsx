// ConfirmModal.js
import React, { useState } from 'react';

const ConfirmModal = ({ message, setIsModalOpen, handleConfirm }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false)
        }
    };
    function onConfirm() {
        handleConfirm()
        setIsModalOpen(false)
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50" onClick={handleOverlayClick}>
            <div className="bg-base-100 rounded-lg shadow-lg p-6 w-96">
                <div className='text-black'>
                    <h2 className="text-xl font-semibold mb-2">Confirm Action</h2>
                    <p className="mb-6 text-lg">{message}</p>
                </div>
                <div className="flex justify-center space-x-4">
                    <button className="btn btn-primary" onClick={onConfirm}>
                        Confirm
                    </button>
                    <button className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;

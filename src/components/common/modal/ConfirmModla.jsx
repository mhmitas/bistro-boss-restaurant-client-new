// ConfirmModal.js
import React from 'react';

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onCancel();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50" onClick={handleOverlayClick}>
            <div className="bg-base-100 rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-lg font-semibold mb-4">Confirm Action</h2>
                <p className="mb-6">{message}</p>
                <div className="flex justify-center space-x-4">
                    <button className="btn btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" onClick={onConfirm}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;

// ConfirmModal.js
import React from 'react';

const ConfirmModal = ({ message, onConfirm, onCancel }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onCancel();
        }
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
            onClick={handleOverlayClick}
        >
            <div className="bg-white text-slate-950 rounded-lg shadow-lg p-6 w-96">
                <h2 className="mb-2">Confirm Action</h2>
                <div className="text-lg font-semibold mb-6">{message}</div>
                <div className="flex justify-end space-x-4">
                    <button className="btn btn-primary" onClick={onConfirm}>
                        Confirm
                    </button>
                    <button className="btn btn-secondary" onClick={onCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;

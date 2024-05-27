// confirm.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import ConfirmModal from './ConfirmModal2';

const confirm = (message) => {
    return new Promise((resolve, reject) => {
        const div = document.createElement('div');
        document.body.appendChild(div);

        const root = createRoot(div);

        const handleConfirm = () => {
            cleanup();
            resolve(true);
        };

        const handleCancel = () => {
            cleanup();
            resolve(false);
        };

        const cleanup = () => {
            root.unmount();
            div.remove();
        };

        root.render(
            <ConfirmModal
                message={message}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        );
    });
};

export default confirm;

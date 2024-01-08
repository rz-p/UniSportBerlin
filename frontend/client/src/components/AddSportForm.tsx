import React, { useState } from 'react';

const AddSportForm = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
        closeModal();
    };

    const launchModal = () => {
        openModal();
    };

    return (
        <div>
            <button onClick={launchModal}>Add Sport</button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Add New Sport</h2>
                        <form onSubmit={handleSubmit}>
                            {/* Add form fields for adding a new sport */}
                            {/* ... */}
                            <button type="submit">Add</button>
                            <button onClick={closeModal}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddSportForm;

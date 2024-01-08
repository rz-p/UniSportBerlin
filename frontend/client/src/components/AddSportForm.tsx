import React, { useState } from 'react';

const AddSportForm = () => {
    const [showModal, setShowModal] = useState(false);


    return (
        <div>
            <button onClick={()=>{}}>Add Sport</button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Add New Sport</h2>
                        <form onSubmit={() => {}}>
                            <button type="submit">Add</button>
                            <button onClick={()=>{}}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddSportForm;

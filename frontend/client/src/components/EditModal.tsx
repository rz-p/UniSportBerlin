import React, { useState } from 'react';

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    sports: string[];
    onSave: (updatedSports: string[]) => void;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, sports, onSave }) => {
    const [editedSports, setEditedSports] = useState<string[]>(sports);

    const handleSportChange = (index: number, value: string) => {
        const updatedSports = [...editedSports];
        updatedSports[index] = value;
        setEditedSports(updatedSports);
    };

    const handleSave = () => {
        onSave(editedSports);
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Edit Sports</h2>
                        {editedSports.map((sport, index) => (
                            <input
                                key={index}
                                type="text"
                                value={sport}
                                onChange={(e) => handleSportChange(index, e.target.value)}
                            />
                        ))}
                        <button onClick={handleSave}>Save</button>
                        <button onClick={onClose}>Cancel</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditModal;

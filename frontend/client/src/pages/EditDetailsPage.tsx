import React, { useState } from 'react';

interface SportsDetails {
    name: string;
    description: string;
}

const EditDetailsPage: React.FC = () => {
    const [details, setDetails] = useState<SportsDetails>({
        name: 'Sports Name',
        description: 'Sports Description',
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDetails((prevDetails) => ({
            ...prevDetails,
            name: event.target.value,
        }));
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDetails((prevDetails) => ({
            ...prevDetails,
            description: event.target.value,
        }));
    };

    return (
        <div>
            <h1>Edit Sports Details</h1>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={details.name}
                onChange={handleNameChange}
            />
            <label htmlFor="description">Description:</label>
            <textarea
                id="description"
                value={details.description}
                onChange={handleDescriptionChange}
            />
            <button onClick={() => console.log(details)}>Save</button>
        </div>
    );
};

export default EditDetailsPage;
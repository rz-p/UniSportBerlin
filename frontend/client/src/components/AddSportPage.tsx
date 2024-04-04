import React, {useState} from 'react';
import {useNavigate} from "react-router";

const AddSportPage: React.FC = () => {

    const [form, setForm] = useState({
        slug: "",
        name: "",
        location: "",
        details: "",
        schedule: "",
        image: ""
    });

    const navigate = useNavigate();

    function updateForm(value: any) {
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }

    // This function will handle the submission.
    async function onSubmit() {
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newSport = {...form};
        await fetch("http://localhost:4000/sports/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSport),
        }).catch((error) => {
            window.alert(error);
            return;
        });
        setForm({name: "", slug: "", location: "", details: "", schedule: "", image: ""});
        navigate("/");
    }

    return (
        <div className="form-small">
            <form onSubmit={() => onSubmit()}>
                <div className="form-group">
                    <h2>Add New Sport</h2>
                    <div className="form-group">
                        <label htmlFor="position">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={form.name}
                            onChange={(e) => updateForm({name: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            value={form.location}
                            onChange={(e) => updateForm({location: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Details</label>
                        <input
                            type="text"
                            className="form-control"
                            id="details"
                            value={form.details}
                            onChange={(e) => updateForm({details: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Slug</label>
                        <input
                            type="text"
                            className="form-control"
                            id="slug"
                            value={form.slug}
                            onChange={(e) => updateForm({slug: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Schedule</label>
                        <input
                            type="text"
                            className="form-control"
                            id="schedule"
                            value={form.schedule}
                            onChange={(e) => updateForm({schedule: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Image</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            value={form.image}
                            onChange={(e) => updateForm({image: e.target.value})}
                        />
                    </div>
                    <button type="submit" onClick={() => onSubmit()}>Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddSportPage;
import React, {useEffect, useState} from 'react';
import {getSport, updateSport} from "../actions/SportActions";
import {useNavigate, useParams} from "react-router";

const EditDetailsPage: React.FC = () => {
    const [form, setForm] = useState({
        slug: "",
        name: "",
        location: "",
        details: "",
        schedule: "",
        image: ""
    });
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        const fetchSport = async () => {
            try {
                const sportsData = await getSport(id || "");
                setForm(sportsData);
            } catch (error) {
                console.error("Error fetching sport:", error);
            }
        };
        fetchSport();
    }, []);

    function updateForm(value: any) {
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }

    console.log(form.name);
    async function onSubmit(e: any) {
        e.preventDefault();
        // When a post request is sent to the create url, we'll add a new record to the database.
        const updatedSport = {...form};
        let sport = updateSport(updatedSport.slug, JSON.stringify(updatedSport)).catch((error) => {
            window.alert(error.toString());
            navigate("/");
            return;
        });
        console.log(sport);
        sport.then(() => {
            navigate("/detail/" + updatedSport.slug);
        })
    }

    return (
        <div className="form-wrapper">
            <div className="form-inner">
                <form onSubmit={onSubmit}>
                    <h3>Edit Sport</h3>
                    <div className="mb-3">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={form.name}
                            onChange={(e) => updateForm({name: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="details">Details</label>
                        <textarea
                            className="form-control"
                            id="details"
                            value={form.details}
                            onChange={(e) => updateForm({details: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="position">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            value={form.location}
                            onChange={(e) => updateForm({location: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="position">Schedule</label>
                        <input
                            type="text"
                            className="form-control"
                            id="schedule"
                            value={form.schedule}
                            onChange={(e) => updateForm({schedule: e.target.value})}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="position">Image</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            value={form.image}
                            onChange={(e) => updateForm({image: e.target.value})}
                        />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-secondary" onClick={() => navigate("/")}>
                            Cancel
                        </button>
                        <button type="submit" className="btn btn-primary mt-3">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDetailsPage;

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../actions/UserActions";
import { createSport } from "../actions/SportActions";
import { useAuth } from "../auth-context";

const AddSportPage: React.FC = () => {
	const auth = useAuth();
  const [form, setForm] = useState({
    slug: "",
    name: "",
    location: "",
    details: "",
    schedule: "",
    image: "",
  });
  const navigate = useNavigate();

  function updateForm(value: any) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e: any) {
    e.preventDefault();
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newSport = { ...form };
    let sport = createSport(JSON.stringify(newSport)).catch((error) => {
      window.alert(error.toString());
      navigate("/");
      return;
    });
    sport.then((result) => {
      navigate("/detail/" + newSport.slug);
    });
  }

  if (auth.status === "false") {
    navigate("/error/405");
		return null;
  } else {
    return (
      <div className="form-wrapper">
        <div className="form-inner">
          <form onSubmit={onSubmit}>
            <h3>Add New Sport</h3>
            <div className="mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="details">Details</label>
              <textarea
                className="form-control"
                id="details"
                value={form.details}
                onChange={(e) => updateForm({ details: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="position">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                value={form.location}
                onChange={(e) => updateForm({ location: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="position">Slug</label>
              <input
                type="text"
                className="form-control"
                id="slug"
                value={form.slug}
                onChange={(e) => updateForm({ slug: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="position">Schedule</label>
              <input
                type="text"
                className="form-control"
                id="schedule"
                value={form.schedule}
                onChange={(e) => updateForm({ schedule: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="position">Image</label>
              <input
                type="text"
                className="form-control"
                id="image"
                value={form.image}
                onChange={(e) => updateForm({ image: e.target.value })}
              />
            </div>
            <div className="d-grid">
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/")}
              >
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
  }
};

export default AddSportPage;

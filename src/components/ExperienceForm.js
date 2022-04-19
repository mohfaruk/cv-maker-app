import React, { useState, useContext } from "react";
import { CVInfoContext } from "../contexts/CVInfoContext";

function ExperienceForm() {
  const { addJob } = useContext(CVInfoContext);

  //Creates states for data inputs
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [jobStart, setJobStart] = useState("");
  const [jobEnd, setJobEnd] = useState("");
  const [description, setDescription] = useState("");

  //Submits data from form
  const handleSubmit = e => {
    e.preventDefault();
    addJob(position, company, city, jobStart, jobEnd, description);
    setPosition("");
    setCompany("");
    setCity("");
    setJobStart("");
    setJobEnd("");
    setDescription("");
  };

  return (
    <div>
      <form id="experience-form" onSubmit={handleSubmit}>
        <label>Add a job:</label>
        <br />
        <input
          type="text"
          value={position}
          placeholder="Position held"
          onChange={e => setPosition(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={company}
          placeholder="Company"
          onChange={e => setCompany(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={city}
          placeholder="City"
          onChange={e => setCity(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={jobStart}
          placeholder="Start date"
          onChange={e => setJobStart(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={jobEnd}
          placeholder="Finish date"
          onChange={e => setJobEnd(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={description}
          placeholder="Describe role"
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ExperienceForm;

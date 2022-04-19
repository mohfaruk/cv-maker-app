import React, { useState, useContext } from "react";
import { CVInfoContext } from "../contexts/CVInfoContext";

function EducationForm() {
  const { addQualification } = useContext(CVInfoContext);

  //Creates states for data inputs
  const [qualification, setQualification] = useState("");
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const [finished, setFinished] = useState("");

  //Submits data from form
  const handleSubmit = e => {
    e.preventDefault();
    addQualification(qualification, school, location, finished);
    setQualification("");
    setSchool("");
    setLocation("");
    setFinished("");
  };

  return (
    <div>
      <form id="education-form" onSubmit={handleSubmit}>
        <label>Add a qualification:</label>
        <br />
        <input
          type="text"
          value={qualification}
          placeholder="Qualification name"
          onChange={e => setQualification(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={school}
          placeholder="Insitution of qualification"
          onChange={e => setSchool(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={location}
          placeholder="Location"
          onChange={e => setLocation(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={finished}
          placeholder="Finish date"
          onChange={e => setFinished(e.target.value)}
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default EducationForm;

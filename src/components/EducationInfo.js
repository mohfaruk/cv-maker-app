import React, { useContext, useState } from "react";
import { CVInfoContext } from "../contexts/CVInfoContext";

const EducationInfo = ({ certificate }) => {
  const { removeQualification, editQualification } = useContext(CVInfoContext);

  //Creates state with existing data
  const [qualification, setQualification] = useState(certificate.qualification);
  const [school, setSchool] = useState(certificate.school);
  const [location, setLocation] = useState(certificate.location);
  const [finished, setFinished] = useState(certificate.finished);
  const [seeForm, setSeeForm] = useState(false);

  //Below functions remove & edit jobs
  const handleDelete = e => {
    e.preventDefault();
    removeQualification(certificate.id);
  };

  const handleStartEdit = e => {
    e.preventDefault();
    setSeeForm(!seeForm);
  };

  const handleSaveEdit = e => {
    e.preventDefault();
    editQualification(
      qualification,
      school,
      location,
      finished,
      certificate.id
    );
    setSeeForm(!seeForm);
  };

  return (
    <div className="education-container">
      {/* Education details render when edit button is clicked */}
      {seeForm ? (
        <div className="edit-form">
          <form>
            <input
              type="text"
              value={qualification}
              placeholder={certificate.qualification}
              onChange={e => setQualification(e.target.value)}
            />
            <br />
            <input
              type="text"
              value={school}
              placeholder={certificate.school}
              onChange={e => setSchool(e.target.value)}
            />
            <br />
            <input
              type="text"
              value={location}
              placeholder={certificate.location}
              onChange={e => setLocation(e.target.value)}
            />
            <br />
            <input
              type="text"
              value={finished}
              placeholder={certificate.finished}
              onChange={e => setFinished(e.target.value)}
            />
            <br />
            <button onClick={handleSaveEdit}>Save edits</button>
          </form>
        </div>
      ) : (
        <div className="education-info">
          <h4>{certificate.qualification}</h4>
          <p>{certificate.school}</p>
          <p>{certificate.location}</p>
          <p>Completed {certificate.finished}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleStartEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationInfo;

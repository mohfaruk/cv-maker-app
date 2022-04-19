import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const CVInfoContext = createContext();

const CVInfoContextProvider = props => {
  //Declare arrays holding data for users cv details

  const [contactInfo, setContactInfo] = useState([]);

  const [experience, setExperience] = useState([
    {
      position: "Developer",
      company: "Roman Post",
      city: "London, UK",
      jobStart: "01/05/2021",
      jobEnd: "present",
      description: "Maintain company's website and online presence",
      id: 1,
    },
  ]);

  const [qualifications, setQualifications] = useState([
    {
      qualification: "BSc Psychology",
      school: "University of Westminster",
      location: "London, UK",
      finished: "01/07/2017",
      id: 1,
    },
  ]);

  const [skills, setSkills] = useState([
    { skill: "HTML/CSS", id: 1 },
    { skill: "ReactJS", id: 2 },
  ]);

  //Functions to be passed to components for changing the above arrays data

  const addContact = (firstName, lastName, phone, email, jobTitle, about) => {
    setContactInfo({
      firstName,
      lastName,
      phone,
      email,
      jobTitle,
      about,
      id: uuid(),
    });
  };

  const addJob = (position, company, city, jobStart, jobEnd, description) => {
    setExperience([
      ...experience,
      { position, company, city, jobStart, jobEnd, description, id: uuid() },
    ]);
  };

  const addQualification = (qualification, school, location, finished) => {
    setQualifications([
      ...qualifications,
      { qualification, school, location, finished, id: uuid() },
    ]);
  };

  const addSkill = skill => {
    setSkills([...skills, { skill, id: uuid() }]);
  };

  const removeJob = id => {
    setExperience(experience.filter(job => job.id !== id));
  };

  const removeQualification = id => {
    setQualifications(qualifications.filter(grade => grade.id !== id));
  };

  const clearSkills = () => {
    setSkills([]);
  };

  const editJob = (
    position,
    company,
    city,
    jobStart,
    jobEnd,
    description,
    id
  ) => {
    const updateState = experience.map(job => {
      if (job.id === id) {
        return { position, company, city, jobStart, jobEnd, description, id };
      } else {
        return job;
      }
    });
    return setExperience(updateState);
  };

  const editQualification = (qualification, school, location, finished, id) => {
    const updateState = experience.map(grade => {
      if (grade.id === id) {
        return { qualification, school, location, finished, id };
      } else {
        return grade;
      }
    });
    return setQualifications(updateState);
  };

  return (
    <CVInfoContext.Provider
      value={{
        contactInfo,
        experience,
        qualifications,
        skills,
        addContact,
        addJob,
        removeJob,
        addQualification,
        removeQualification,
        editJob,
        editQualification,
        addSkill,
        clearSkills,
      }}
    >
      {/* Displays Elements */}
      {props.children}
    </CVInfoContext.Provider>
  );
};

export default CVInfoContextProvider;

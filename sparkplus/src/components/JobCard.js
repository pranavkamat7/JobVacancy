import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteJobVacancy, updateJobVacancy } from '../actions';
import "../JobCard.css"

const JobCard = ({ job, deleteJobVacancy, updateJobVacancy }) => {
  const { id, jobTitle, companyName, salary, dateTime, description } = job;
  const [isEditing, setIsEditing] = useState(false);
  const [editedJobTitle, setEditedJobTitle] = useState(jobTitle);
  const [editedCompanyName, setEditedCompanyName] = useState(companyName);
  const [editedSalary, setEditedSalary] = useState(salary);
  const [editedDateTime, setEditedDateTime] = useState(dateTime);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedJob = {
      id,
      jobTitle: editedJobTitle,
      companyName: editedCompanyName,
      salary: editedSalary,
      dateTime: editedDateTime,
      description: editedDescription,
    };

    // Dispatch the updateJobVacancy action with the updated job details
    updateJobVacancy(updatedJob);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteJobVacancy(id);
  };

  return (
    <div className="job-card">
      <div className="job-card-header">
        {isEditing ? (
          <form>
            <input
              type="text"
              value={editedJobTitle}
              onChange={(e) => setEditedJobTitle(e.target.value)}
            />
            <input
              type="text"
              value={editedCompanyName}
              onChange={(e) => setEditedCompanyName(e.target.value)}
            />
            <input
              type="text"
              value={editedSalary}
              onChange={(e) => setEditedSalary(e.target.value)}
            />
            <input
              type="Date"
              value={editedDateTime}
              onChange={(e) => setEditedDateTime(e.target.value)}
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            ></textarea>
          </form>
        ) : (
          <h3 className="job-card-title">{jobTitle}</h3>
        )}
        <div className="job-card-actions">
          {isEditing ? (
            <>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          )}
        </div>
      </div>
      <p className="job-card-company">Title: {jobTitle}</p>
      <p className="job-card-company">Company: {companyName}</p>
      <p className="job-card-salary">Salary: {salary}</p>
      <p className="job-card-date">Joining Date: {dateTime}</p>
      <p className="job-card-description">Description: {description}</p>
      
    </div>
  );
};

export default connect(null, { deleteJobVacancy, updateJobVacancy })(JobCard);






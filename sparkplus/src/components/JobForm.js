import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addJobVacancy } from '../actions';
import "../JobForm.css"
const JobForm = ({ addJobVacancy, history }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    salary: '',
    dateTime: '',
    description: '',
  });

  const { jobTitle, companyName, salary, dateTime, description } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newJobVacancy = {
      jobTitle,
      companyName,
      salary,
      dateTime,
      description,
    };

    // Dispatch the action to add the job vacancy
    addJobVacancy(newJobVacancy);

    // Clear the form
    setFormData({
      jobTitle: '',
      companyName: '',
      salary: '',
      dateTime: '',
      description: '',
    });

    // Navigate back to the home page
    history.push('/');
  };

  return (
    <div className="job-form">
  <h2>Add Job Vacancy</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="jobTitle">Job Title:</label>
      <input
        type="text"
        id="jobTitle"
        name="jobTitle"
        value={jobTitle}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="companyName">Company Name:</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={companyName}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="salary">Salary:</label>
      <input
        type="text"
        id="salary"
        name="salary"
        value={salary}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="dateTime">Date/Time:</label>
      <input
       type='Date'
        id="dateTime"
        name="dateTime"
        value={dateTime}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={description}
        onChange={handleChange}
        required
      />
    </div>
    <button type="submit">Submit</button>
  </form>
</div>

  );
};

export default connect(null, { addJobVacancy })(JobForm);

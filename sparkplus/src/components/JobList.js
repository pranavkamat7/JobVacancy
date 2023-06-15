import React from 'react';
import { connect } from 'react-redux';
import JobCard from './JobCard';

import "../JobList.css"
const JobList = ({ jobVacancies }) => {
  return (
    <div className="job-list">
      
      <div className="grid-container">
        {jobVacancies.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    jobVacancies: state.jobVacancies,
  };
};

export default connect(mapStateToProps)(JobList);



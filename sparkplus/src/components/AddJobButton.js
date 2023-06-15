import React from 'react';
import { useHistory } from 'react-router-dom';
import "../App.css"
const AddJobButton = () => {
  const history = useHistory();

  const handleAddJob = () => {
    history.push('/add-job');
  };

  return (
    <div className='addbutton'>
       <button onClick={handleAddJob} className="add-job-button">
      Add Job
    </button>
    </div>
   
  );
};

export default AddJobButton;


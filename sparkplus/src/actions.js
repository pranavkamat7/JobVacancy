// action types
export const ADD_JOB_VACANCY = 'ADD_JOB_VACANCY';
export const DELETE_JOB_VACANCY = 'DELETE_JOB_VACANCY';
export const UPDATE_JOB_VACANCY = 'UPDATE_JOB_VACANCY';

// action creators
export const addJobVacancy = (job) => {
  return {
    type: ADD_JOB_VACANCY,
    payload: job,
  };
};

export const deleteJobVacancy = (jobId) => {
  return {
    type: DELETE_JOB_VACANCY,
    payload: jobId,
  };
};

export const updateJobVacancy = (job) => {
  return {
    type: UPDATE_JOB_VACANCY,
    payload: job,
  };
};

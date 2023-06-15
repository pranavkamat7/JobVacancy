import { ADD_JOB_VACANCY, DELETE_JOB_VACANCY, UPDATE_JOB_VACANCY } from './actions';

const initialState = {
  jobVacancies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB_VACANCY:
      return {
        ...state,
        jobVacancies: [...state.jobVacancies, action.payload],
      };
    case DELETE_JOB_VACANCY:
      return {
        ...state,
        jobVacancies: state.jobVacancies.filter((job) => job.id !== action.payload),
      };
    case UPDATE_JOB_VACANCY:
      const updatedJobIndex = state.jobVacancies.findIndex((job) => job.id === action.payload.id);
      if (updatedJobIndex !== -1) {
        const updatedJobVacancies = [...state.jobVacancies];
        updatedJobVacancies[updatedJobIndex] = action.payload;
        return {
          ...state,
          jobVacancies: updatedJobVacancies,
        };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;


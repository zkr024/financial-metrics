import company from './company';

const COMPANIES = 'financial-metrics/mainSite/COMPANIES';

const companyReducer = (state = [], action) => {
  switch (action.type) {
    case COMPANIES:
      return action.payload;
    default:
      return state;
  }
};

const getInfo = () => ({
  type: COMPANIES,
  payload: company,
});

export default companyReducer;
export { getInfo };

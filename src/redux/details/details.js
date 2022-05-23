const DATE = 'financial-metrics/details/DATE';

const dateReducer = (state = '', action) => {
  switch (action.type) {
    case DATE:
      return action.payload;
    default:
      return state;
  }
};

const getDate = (date) => ({
  type: DATE,
  payload: date,
});

export default dateReducer;
export { getDate };

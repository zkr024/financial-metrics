import axios from 'axios';

const FINANCIAL = 'financial-metrics/quarters/FINANCIAL';

const api = 'https://financialmodelingprep.com/api/v3/income-statement/';
const key = '177e7470a52d9fcb6780331b067db588';

const financialReducer = (state = [], action) => {
  switch (action.type) {
    case FINANCIAL:
      return action.payload;
    default:
      return state;
  }
};

const loadInfo = (id) => async (dispatch) => {
  const res = await axios.get(`${api}${id}?&apikey=${key}`);
  dispatch({
    type: FINANCIAL,
    payload: res,
  });
};

export default financialReducer;
export { loadInfo };

import Redux from 'redux';

var pageReducer = (state = 0, action) => {
  if (action.type === 'INCREMENT_PAGE' && state < 4) {
    return state + 1;
  }
  if (action.type === 'DECREMENT_PAGE' && state > 0) {
    return state - 1;
  }
  return state;
};

export default pageReducer;
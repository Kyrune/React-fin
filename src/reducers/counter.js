const initialState = {
  count: 0,
  clicks: 0,
  addCount: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicks: state.clicks + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicks: state.clicks + 1
      };
      case 'INPUT':
        return {
          ...state,
          addCount: action.number
      };
      case 'INPUTNUMBER':
        return {
          ...state,
          clicks: state.clicks = 0,
          count: (state.count = state.addCount)
      };
    default:
      return state;
  }
}

export default counterReducer;
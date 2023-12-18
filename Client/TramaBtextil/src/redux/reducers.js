import { SET_IMPACT } from './actions';

const initialState = {
  impact: {
    waterImpact: 0,
    carbonImpact: 0
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMPACT:
      return {
        ...state,
        impact: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
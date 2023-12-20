import { SET_IMPACT } from './actions';

const initialState = {
  impact: {
    waterImpactLandfill: 0,
    waterImpactCloseloop: 0,
    carbonImpactLandfill: 0,
    carbonImpactCloseloop: 0
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
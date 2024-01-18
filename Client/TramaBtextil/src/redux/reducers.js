import { SET_IMPACT, CLEAR_IMPACT } from './actions';

const initialState = {
  impact: {
    waterImpactLandfill: 0,
    waterImpact2dnChance: 0,
    carbonImpactLandfill: 0,
    carbonImpact2dnChance: 0
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMPACT:
      return {
        ...state,
        impact: action.payload
      };
    case CLEAR_IMPACT:
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;
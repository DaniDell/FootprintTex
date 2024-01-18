export const SET_IMPACT = 'SET_IMPACT';
export const CLEAR_IMPACT = 'CLEAR_IMPACT';

export const setImpact = (impact) => {
  return {
    type: SET_IMPACT,
    payload: impact
  };
};

export const clearImpact = () => {
  return {
    type: CLEAR_IMPACT
  };
};
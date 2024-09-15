export const RESET_STATE = 'RESET_STATE';

/**
 * Action creator to reset Redux state to its initial state.
 * This function should be used when the user logs out from the app,
 * ensuring that sensitive user data is cleared from the state.
 *
 * @returns {Object} Action object with type RESET_STATE to be handled by Redux reducers.
 */
export const resetAllState = () => {
  return {
    type: RESET_STATE,
  };
};

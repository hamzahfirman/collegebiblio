// Action creator
// Notes: 'export' allow exporting multiple functions
export const signedUp = loginInfo => {
  return {
    type: "SIGN_UP",
    payload: loginInfo
  };
};

export const addedItem = increment => {
  return {
    type: "ADD_ITEM",
    payload: increment
  };
};

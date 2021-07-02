// Action creator
// Notes: 'export' allow exporting multiple functions
export const signedUp = loginInfo => {
  return {
    type: "SIGN_UP",
    payload: loginInfo
  };
};

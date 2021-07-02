import { combineReducers } from "redux";
// let currCount = 0;
const itemsReducer = () => {
  return [
    { brand: "Nike", color: "Red", size: "10" },
    { brand: "Adidas", color: "Red", size: "12" },
    { brand: "Crocs", color: "Blue", size: "13" },
    { brand: "Nike", color: "Yellow", size: "11" }
  ];
};
// const newUsersReducer = (listOfUsers = [], action) => {
//   if (action.type === "SIGN_UP") {
//     if (!listOfUsers.filter(user => user === action.payload.username)) {
//       return [...listOfUsers, action.payload];
//     }
//   }
//   return listOfUsers;
// };
const newUsersReducer = (listOfUsers = {}, action) => {
  if (action.type === "SIGNED_IN") {
    listOfUsers = action.payload;
    return listOfUsers;
  }

  return listOfUsers;
};

const selectedItem = (currCount = 0, action) => {
  if (action.type === "ADD_ITEM") {
    return currCount + action.payload;
  }

  return currCount;
};

// Notes:
// Each key holds the return values from its
// associated reducers
export default combineReducers({
  users: newUsersReducer,
  items: itemsReducer,
  selectedItem: selectedItem
});

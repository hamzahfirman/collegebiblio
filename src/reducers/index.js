import { combineReducers } from "redux";

const ALLSALEITEMS = [
  { brand: "doritos", flavor: "Ranch", quantity: 0 },
  { brand: "kitkat", flavor: "Green Tea", quantity: 0 },
  { brand: "cocacola", flavor: "Original", quantity: 0 }
];
// let currCount = 0;
const itemsReducer = (items = ALLSALEITEMS) => {
  return items;
};
// const newUsersReducer = (listOfUsers = [], action) => {
//   if (action.type === "SIGN_UP") {
//     if (!listOfUsers.filter(user => user === action.payload.username)) {
//       return [...listOfUsers, action.payload];
//     }
//   }
//   return listOfUsers;
// };
const userLoginReducer = (listOfUsers = {}, action) => {
  if (action.type === "SIGNED_IN") {
    listOfUsers = action.payload;
    return listOfUsers;
  } else if (action.type === "LOG_OUT") {
    listOfUsers = action.payload;
  }

  return listOfUsers;
};

const selectedItem = (currCount = 0, action) => {
  if (action.type === "ADD_ITEM") {
    // Add based on their type
    let selected = action.payload.item.brand;
    let currItem = ALLSALEITEMS.filter(item => item.brand === selected);
    currItem[0].quantity += action.payload.increment;

    return currCount + action.payload.increment;
  }

  return currCount;
};

// Notes:
// Each key holds the return values from its
// associated reducers
export default combineReducers({
  user: userLoginReducer,
  items: itemsReducer,
  selectedItem: selectedItem
});

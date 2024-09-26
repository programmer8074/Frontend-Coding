import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (store, action) => {
      store = [...store, action.payload];
      return store;
    },
    removeFromBag: (store, action) => {
      store = store.filter((id) => id !== action.payload);
      return store;
    },
  },
});
export const bagSliceActions = bagSlice.actions;
export default bagSlice;

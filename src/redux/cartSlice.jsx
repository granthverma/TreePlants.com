import { createSlice } from "@reduxjs/toolkit";

// Initialize the cart state from localStorage, or use an empty array if not available
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Action to add an item to the cart
    addToCart(state, action) {
      state.push(action.payload);
    },

    // Action to delete an item from the cart
    deleteFromCart(state, action) {
      // Step 1: Find the index of the item to be deleted
      const index = state.findIndex(item => item.id === action.payload.id);
      
      // Step 2: If the item is found (index is not -1)
      if (index !== -1) {
        // Step 3: Remove one item at the found index using splice
        state.splice(index, 1);
      }
    },

    // Action to clear the entire cart
    clearCart(state) {
      state = []; // Set the cart state to an empty array
    }
  }
});

// Export the actions for use in components
export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;

// Export the reducer to be included in the store
export default cartSlice.reducer;

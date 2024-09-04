import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  img: string;
  price: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const { id, name, img, price } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ id, name, img, price, quantity: 1 });
      }
    },

    inCrement: (state, action: PayloadAction<number>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    deCrement: (state, action: PayloadAction<number>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },

    removeCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeCart, inCrement, deCrement } =
  cartSlice.actions;

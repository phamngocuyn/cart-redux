import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  img: string;
  price: number;
  totalPrice: number;
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
    addToCart: (
      state,
      action: PayloadAction<Omit<CartItem, "quantity" | "totalPrice">>
    ) => {
      const { id, name, img, price } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += price;
      } else {
        state.cart.push({
          id,
          name,
          img,
          price,
          quantity: 1,
          totalPrice: price,
        });
      }
    },

    inCrement: (state, action: PayloadAction<number>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += existingItem.price;
      }
    },

    deCrement: (state, action: PayloadAction<number>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
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

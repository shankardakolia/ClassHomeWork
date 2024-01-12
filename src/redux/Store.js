import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './CartSlice';
import FavouritesSlice from './FavouritesSlice';

const Store = configureStore({
  reducer: {
    cart: CartReducer,
    fav: FavouritesSlice,
  },
});

export default Store;

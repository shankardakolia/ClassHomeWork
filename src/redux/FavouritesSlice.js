import {createSlice} from '@reduxjs/toolkit';

const FavouritesSlice = createSlice({
  name: 'fav',
  initialState: {
    data: [],
  },
  reducers: {
    addItemToFav(state, action) {
      const newItem = action.payload;
      const isFavoritesEmpty = state.data.length === 0;
      // console.log(isFavoritesEmpty);
      if (isFavoritesEmpty) {
        state.data.push(newItem);
      } else {
        const itemExists = state.data.filter(item => item.id === newItem.id);
        // console.log('Item Exists', itemExists);
        if (itemExists.length === 0) {
          state.data.push(newItem);
        }
      }
    },
    removeItemFromFav(state, action) {
      let temp = state.data.filter(item => {
        return item.id != action.payload.id;
      });
      state.data = temp;
    },
  },
});

export const {removeItemFromFav, addItemToFav} = FavouritesSlice.actions;
export default FavouritesSlice.reducer;

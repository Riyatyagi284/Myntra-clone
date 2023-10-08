import {createSlice} from "@reduxjs/toolkit"

export const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addToWishlist : (state,action) => {
            state.push(action.payload);
        },
        removeFromWishlist : (state,action) => {
            const index = state.findIndex(item => item.id === action.payload );
            if(index !== -1){
                state.splice(index,1)
            }
        },
    },
});

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions;

export default wishlistSlice.reducer;
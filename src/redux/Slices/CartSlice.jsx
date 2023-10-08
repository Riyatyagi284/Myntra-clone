import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add : (state,action) => {
            state.push(action.payload);
        },
        remove : (state,action) => {
            const productId = action.payload;
            return state.filter((item) => item.id!==productId);
        },
    },
});

export const {add,remove} = cartSlice.actions;

export default cartSlice.reducer;
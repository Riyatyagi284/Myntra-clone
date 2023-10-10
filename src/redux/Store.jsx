import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../redux/Slices/CartSlice";
import wishlistReducer from "../redux/Slices/WishlistSlice";
import userReducer from "../redux/Slices/UserSlice";
import authReducer from "../redux/Slices/AuthSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        wishlist:wishlistReducer,
        user: userReducer,
        // Authentication: authReducer,
        auth: authReducer,
    },
});


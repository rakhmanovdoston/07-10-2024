import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./CounteSlice"

export default configureStore({
    reducer: {
        postsReducer: postsSlice
    },
});
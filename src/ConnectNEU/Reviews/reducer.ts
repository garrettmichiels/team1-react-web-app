import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [] as any[],
    review: {},
},
  reducers: {
    setReviews: (state, action) => {
      state.reviews = action.payload;
    },
    addReview: (state, action) => {
      state.reviews = [action.payload, ...state.reviews,];
    },
    deleteReview: (state, action) => {
      state.reviews = state.reviews.filter(
        (r: any) => r._id !== action.payload
      );
    },
    updateReview: (state, action) => {
      state.reviews = state.reviews.map((r: any) => {
        if (r._id === action.payload._id) {
          return action.payload;
        } else {
          return r;
        }
      });
    },
    setReview: (state, action) => {
      state.review = action.payload;
    },
  }
})

export const {setReviews, addReview, deleteReview, updateReview, setReview} = reviewsSlice.actions;
export default reviewsSlice.reducer;
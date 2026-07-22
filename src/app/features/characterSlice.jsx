import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async ({page = 1}) => {
    try {
      const url = `https://rickandmortyapi.com/api/character?page=${page}`;
      const res = await fetch(url);
      const charactersData = await res.json();
      // console.log(charactersData, "data here 2 ");
      return charactersData;
    } catch (error) {
      console.log(error);
    }
  },
);

const initialState = {
  characters: [],
  status: "idle",
  pagination: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characters = action.payload.results;
        state.pagination = action.payload.info;
       
      });
    //  addCase(fatchCharacters.rejected, (state, action) => {});
  },
});

// export const selectData = (state) => console.log(state, "state here");
// export const selectData = (state) => state?.characters?.characters?.results;
// export const paginationData = (state) => state?.characters?.pagination;

export default characterSlice.reducer;
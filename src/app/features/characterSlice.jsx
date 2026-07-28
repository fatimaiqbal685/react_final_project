import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async ({page = 1, query = ""}) => {
    try {
      const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${encodeURIComponent(query)}`;
      const res = await fetch(url);
      const charactersData = await res.json();
      return charactersData;
    } catch (error) {
      console.log(error);
    }
  },
);



export const fetchSingleCharacter = createAsyncThunk(
  "characters/fetchSingleCharacter",
  async (id) => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return await res.json();
  }
);





const initialState = {
  characters: [],
  singleCharacter: null,
 recentVisitedProfile: [],
  status: "",
  pagination: {
    count: 0,
    pages: 0,
    next: "",
    prev: "",
  },
};

export const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
selectSingleCharatcer :(state,action)=>{
  state.singleCharacter=action.payload
  
},
selectRecentVisitedProfile: (state, action) => {
      state.recentVisitedProfile = state.recentVisitedProfile.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.recentVisitedProfile.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading...";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characters = action.payload.results;
        state.pagination = action.payload.info;
          })
      
          .addCase(fetchSingleCharacter.pending, (state) => {
      state.status = "loading...";
    })

    .addCase(fetchSingleCharacter.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.singleCharacter = action.payload;
    });

  }
})





// export const selectData = (state) => console.log(state, "state here");
// export const selectData = (state) => state?.characters?.characters?.results;
// export const paginationData = (state) => state?.characters?.pagination;


// export const { selectProfile } = recentProfileSlice.action;
export const selectVisitedProfile = (state) =>
  state.character?.recentVisitedProfile;
export const { selectRecentVisitedProfile ,selectSingleCharatcer} = characterSlice.actions;
export default characterSlice.reducer;
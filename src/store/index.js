import axios from "axios";
import { API_KEY, TMDB_BASE_URL } from "../utils/constant";
import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: [],
};

export const getGenres = createAsyncThunk("netflix/genres", async () => {

    const link = `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
    const { data:{genres} } = await axios.get(link)
    console.log(genres)
    return genres;
})

const NetflixSlice = createSlice({
    name: "Netflix",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getGenres.fulfilled, (state, action) =>{
            console.log(state)
            state.genres = action.payload;
            state.genresLoaded =true;
        })
    }
})

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer
    }
}) 
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = "https://real-state-backend-uvau.onrender.com/clientdata" 

export const fetchClients = createAsyncThunk("clients/fetchClients", async ()=>{
    const response = await axios.get(`${BASE_URL}`)
    return response.data.msg
})

const clientSlice = createSlice({
    name:"clients",
    initialState:{
        clients:[],
        loading:false,
        error:null,
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchClients.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchClients.fulfilled, (state,action)=>{
            state.loading = false;
            state.clients = action.payload;
        })
        .addCase(fetchClients.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
    }
})
export default clientSlice.reducer;
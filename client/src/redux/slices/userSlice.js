import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 const BASE_URL = "http://localhost:5000/registerdata"

 export const fetchUsers = createAsyncThunk("users/fetchUsers", async()=>{
const response = await axios.get(`${BASE_URL}`)
return response.data.msg
 })

 const userSlice = createSlice({
    name:"users",
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false;
            state.users = action.payload;
        })
        .addCase(fetchUsers.rejected,(state)=>{
            state.loading=false;
            state.error= action.error.message;
        })
    }
 })
 export default userSlice.reducer;
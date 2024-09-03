import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"auth",
    initialState:{
        loading:false,
        user:null
    },
    reducers:{
        setLoading:(state, action) =>{
            state.loading = action.payload;
        },
        setUser:(sate, action) =>{
            sate.user = action.payload;
        }
    }
});

export const {setLoading} = authSlice.actions;
export default authSlice.reducer;
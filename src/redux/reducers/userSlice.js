import { createSlice, current } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:'user',
    initialState:{
        currentUser:JSON.parse(localStorage.getItem('currentUser'))||null,
        allUsers:JSON.parse(localStorage.getItem('allUsers'))||[]
    },
    reducers:{
        signup:(state,action)=>{
            state.currentUser=action.payload
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
            state.allUsers.push(action.payload)
            localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
        },
        login:(state,action)=>{
            state.currentUser=action.payload
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        },
        logout:(state,action)=>{
            state.currentUser='';
            localStorage.removeItem('currentUser');
        }
    }
})

export const { signup, login, logout } = userSlice.actions;
export default userSlice.reducer;
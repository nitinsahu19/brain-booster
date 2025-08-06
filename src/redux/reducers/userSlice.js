import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { db } from "../../firebase/config";
import { addDoc, collection, query, where, getDocs  } from "firebase/firestore"


export const signupUser = createAsyncThunk(
  'user/signupUser',
  async (userData, thunkAPI) => {
    // Firestore में डालो
    await addDoc(collection(db, "users"), userData);

    // return reducer के लिए
    return userData;
  }
);




export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, thunkAPI) => {
    const q = query(
      collection(db, "users"),
      where("email", "==", email),
      where("password", "==", password)
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error("User not found or wrong credentials");
    }

    let userData = {};
    querySnapshot.forEach((doc) => {
      userData = { id: doc.id, ...doc.data() };
    });

    return userData;
  }
);



const userSlice=createSlice({
    name:'user',
    initialState:{
        currentUser:JSON.parse(localStorage.getItem('currentUser'))||null,
        allUsers:JSON.parse(localStorage.getItem('allUsers'))||[]
    },
    reducers:{
        // signup:(state,action)=>{
        //     state.currentUser=action.payload
        //     localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        //     state.allUsers.push(action.payload)
        //     localStorage.setItem("allUsers", JSON.stringify(state.allUsers));

        // },
        // login:(state,action)=>{
        //     state.currentUser=action.payload
        //     localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
        // },
        logout:(state)=>{
            state.currentUser='';
            localStorage.removeItem('currentUser');

        }
    },
     extraReducers: (builder) => {
    builder
    .addCase(signupUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      state.allUsers.push(action.payload);
      localStorage.setItem("allUsers", JSON.stringify(state.allUsers));
    })
     .addCase(loginUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
      });


    
  }
})

export const { signup, login, logout } = userSlice.actions;
export default userSlice.reducer;
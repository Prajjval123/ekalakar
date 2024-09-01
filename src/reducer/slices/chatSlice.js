import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatUser:null , 
    currentChat: JSON.parse(localStorage.getItem("currentChat")) || null,
}

const chatSlice = createSlice({
    name:"chatUsers",
    initialState:initialState,
    reducers:{
        setChatUser(state , value){
            state.chatUser = value.payload;
        },
        setCurrentChat(state , value){
            state.currentChat = value.payload;
        }
    }
})

export const {setChatUser , setCurrentChat} = chatSlice.actions;

export default chatSlice.reducer;


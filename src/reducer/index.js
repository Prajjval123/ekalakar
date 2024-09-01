import {combineReducers} from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice";
import chatSlice from "./slices/chatSlice";


const rootReducer = combineReducers({
  auth:authSlice , 
  chatUsers:chatSlice
 
})

export default rootReducer;
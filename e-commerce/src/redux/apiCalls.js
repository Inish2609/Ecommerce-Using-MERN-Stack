import axios from "axios";
import { loginStart,loginFailure,loginSuccess } from "./userRedux";

export const login = async(dispatch,user) =>{
    dispatch(loginStart());
    try{
        const res = await axios.post("https://localhost:5000/auth/login",user)
        dispatch(loginSuccess(res.data))
    }
    catch(err){
        dispatch(loginFailure)
    }
}
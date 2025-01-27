import {create} from "zustand"
import axios from "axios";

const API_URL = "http://localhost:3000/user" 
export const useAuthStore = create((set) => ({
    user:null,
    isLoading: false,
    error: null,
    isAuthenticated: false,
    isCheckingAuth:true,

    signup: async (email, password, username) => {
        set({isLoading:true, error:null});
        try{
            const response  = await axios.post(`${API_URL}/signup`,{email, password, username}, {withCredentials:true});
            set({isLoading:false, isAuthenticated:true, user: response.data.user});
            return response.data; 
        }catch(error){
            set({isLoading:false, error: error.message});
            console.log(error.response.data.success)
            return error.response?.data || { success: false, message: "An error occurred" };
        }
    },

    verifyEmail: async(code)=>{
        set({isLoading:true, error:null});
        try{
            const response = await axios.post(`${API_URL}/verify-email`, {code});
            set({isLoading:false, isAuthenticated:true, user: response.data.user});
            return response.data
        }catch(error){
            set({isLoading:false, error: error.message});
            console.log(error);
            return error.response?.data || { success: false, message: "An error occurred" };
        }
    },

    login: async (email,password)=>{
        set({isLoading:true, error:null});
        try {
            const response = await axios.post(`${API_URL}/login`, {email,password}, {withCredentials:true});
            set({isLoading:false, isAuthenticated:true, user: response.data.user});
            return response.data; 
        } catch (error) {
            set({isLoading:false, error:error.message});
            console.log(error);
            return error.response?.data || { success: false, message: "An error occurred" };
        }
    },

    checkAuth: async ()=>{
        set({isCheckingAuth:true, error: null});
        try{
            const response = await axios.get(`${API_URL}/check-auth`, {withCredentials:true});
            
            if(response.data.user){
                set({isCheckingAuth: false, isAuthenticated:true, user: response.data.user});
            }else{
                set({isCheckingAuth: false, isAuthenticated:false, user: null});
            }
        }catch(error){
            set({isCheckingAuth:false, isAuthenticated:false, user:null});
            // console.log(error);     
        }
    },

    logout: async ()=>{
        set({isLoading:true, error:null});
        try{
            const response = await axios.post(`${API_URL}/logout`, null, {withCredentials:true});
            set({isLoading:false, isAuthenticated:false, user:null});
        }catch(error){
            set({isLoading:false, error: error.message});
            console.log(error);
            throw error;
        }        
    }
}))
import React from "react"
import DrawerAppBar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import { LoginPage } from "./pages/Auth/LoginPage/LoginPage"
import { SignUpPage } from "./pages/Auth/SignUpPage/SignUpPage"
import VerificationEmailPage from "./pages/Auth/VerificationEmailPage/VerificationEmailPage"
import { ToastContainer } from "react-toastify"
import { useAuthStore } from "./store/authStore"

export default function App(){
    const {isCheckingAuth, checkAuth, isAuthenticated, user} = useAuthStore();

    React.useEffect(()=>{
        checkAuth();
    },[checkAuth]);
    // console.log(user);
    // console.log(isAuthenticated);
    return(
        <>
        <DrawerAppBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/verify-email" element={<VerificationEmailPage/>}/>
        </Routes>
        <ToastContainer />
        </>
    )
}
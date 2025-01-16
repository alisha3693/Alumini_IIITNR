import React from "react"
import DrawerAppBar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"

export default function App(){
    return(
        <>
        <DrawerAppBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
        </>
    )
}
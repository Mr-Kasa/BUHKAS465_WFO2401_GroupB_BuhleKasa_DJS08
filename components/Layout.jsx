import {React, Outlet }from "react"
import Header from "./Header"


export default function Layout() {
    return (
        <>
        <Header/>
        <Outlet />
        </>
    )
}
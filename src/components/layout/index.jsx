import { Outlet } from "react-router"
import { Navbar } from "../navbar"


export const RootLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

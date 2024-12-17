import { Routes, Route } from "react-router";
// import { RootLayout } from "../components";
// import { DateFactsPage, MathFactsPage } from "../pages";
import { RootLayout } from "../../components";
import { DateFactsPage, MathFactsPage, RandomFactsPage, YearFactsPage } from "../../pages";

export const RoutesWrapper = () => {
  return (
   <Routes>
    <Route element={<RootLayout/>}>
    <Route path="/" element={<DateFactsPage/>}/>
    <Route path="/math-facts" element={<MathFactsPage/>}/>
    <Route path="/Random-facts" element={<RandomFactsPage/>}/>
    <Route path="/Year-Facts" element={<YearFactsPage/>}/>
    </Route>
   </Routes>
  )
}
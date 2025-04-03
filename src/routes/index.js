import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./const";
import HomeScreen from "../components/HomeScreen";
import Login from "../components/Login";
import Register from "../components/Register";
export const ROUTERS = () =>{
    return(
        <Routes>
            <Route path={ROUTES.PATH} element={<HomeScreen/>}/>
            <Route path={ROUTES.AUTH.LOGIN} element={<Login/>}/>
            <Route path={ROUTES.AUTH.REGISTER} element={<Register/>}/>
        </Routes>
    )
}
import { Route, Router } from "react-router-dom";
import { ROUTES } from "./const";
export const ROUTERS = () =>{
    return(
        <Router>
            <Route path={ROUTES.PATH} element={[]}/>
            <Route path={ROUTES.AUTH.LOGIN} element={[]}/>
            <Route path={ROUTES.PATH.REGISTER} element={[]}/>
        </Router>
    )
}
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/const.js";
export default function HomeScreen(){
    return (<>
   <div className="container">
   < Link to={ROUTES.AUTH.LOGIN}><button className="btn" >Login</button></Link>
   < Link to={ROUTES.AUTH.REGISTER}><button className="btn" >Register</button></Link>
   </div>
    </>)
}
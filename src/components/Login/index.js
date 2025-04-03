import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/const.js";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function Login(){
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const response = await axios.get("http://localhost:3000/posts");
        const userData = response.data.find(
          loginData => loginData.email === data.email && loginData.password === data.password
        )
         if (!userData) {
          alert("Yazdiginiz email ve ya sifre yanlisdir.");
          reset();
        } 
        else {
          alert("Uğurla giriş olundu");
          reset();
        }
    };
  
    return(<>
    <div className="back">
        < Link to={ROUTES.PATH}><h2>Back</h2></Link>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-login'>
            <div className='div-login'>
              <label>Email</label>
              <input {...register("email", {
                required: "Email-ivizi daxil edin",
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "Email-de @ olmalıdır";
                  }
                  return true;
                },
              })} type="text" className='input-login'/>
            </div>
            {errors.email && (
            <div className="red-error">{errors.email.message}</div>
          )}
            <div className='div-login'>
              <label>Password</label>
              <input  {...register("password", {
                required: "Sifreni daxil edin",
                minLength:{
                  value:8,
                  message:"Sifre ən azı 8 simvoldan ibarət olmalıdır"
                }
              })} type="password" className='input-login'/>
            </div>
            {errors.password && (
            <div className="red-error">{errors.password.message}</div>
          )}
            <button className='btn-login'>Login</button>
            </div>
        </form>
    </>)
}
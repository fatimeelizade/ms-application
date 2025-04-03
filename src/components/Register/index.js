import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes/const";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await axios.post("http://localhost:3000/posts", data);
    reset();
   return response; 
  };
  return (
    <>
      <div className="back">
        <Link to={ROUTES.PATH}>
          <h2>Back</h2>
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-register">
          <div className="div-register">
            <label>Ad</label>
            <input
              {...register("name", {
                required: "Adivizi daxil edin",

              })}
              type="text"
              className="input-register"
            />
          </div>
          {errors.name && (
            <div className="red-error">{errors.name.message}</div>
          )}
          <div className="div-register">
            <label>Soyad</label>
            <input
              {...register("surname", {
                required: "Soyadivizi daxil edin",
              })}
              type="text"
              className="input-register"
            />
          </div>
          {errors.surname && (
            <div className="red-error">{errors.surname.message}</div>
          )}
          <div className="div-register">
            <label>Email</label>
            <input
              {...register("email", {
                required: "Email-ivizi daxil edin",
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "Email-de @ olmalıdır";
                  }
                  return true;
                },
              })}
              type="email"
              className="input-register"
            />
          </div>
          {errors.email && (
            <div className="red-error">{errors.email.message}</div>
          )}
          <div className="div-register">
            <label>New password</label>
            <input
              {...register("password", {
                required: "Yeni sifreni daxil edin",
                minLength:{
                  value:8,
                  message:"Sifre ən azı 8 simvoldan ibarət olmalıdır"
                }
              })}
              type="password"
              className="input-register"
            />
          </div>
          {errors.password && (
            <div className="red-error">{errors.password.message}</div>
          )}
          <div className="div-register">
            <label>Confirm password</label>
            <input
              {...register("confirm_password", {
                required: "Sifreni testiqleyin",
                validate: (val) => {
                  if (watch("password") !== val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              type="password"
              className="input-register"
            />
          </div>
          {errors.confirm_password && (
            <div className="red-error">{errors.confirm_password.message}</div>
          )}
          <button className="btn-register">Register</button>
        </div>
      </form>
    </>
  );
}

import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignUp({ setSignUpData }) {
  const navigate = useNavigate();
  const signUpFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      newLogin: e.target.newLogin.value,
      newPassword: e.target.newPassword.value,
    };
    toast.success("Ma'lumotlar yangilandi!");
    setTimeout(() => {
      setSignUpData(data);
      navigate("/");
    }, 1000);
    window.localStorage.setItem("newToken", JSON.stringify(data));
  };
  return (
    <div className="w-full h-[100vh] overflow-auto gradient-custom pt-[100px]">
      <h2 className="text-center font-[600] text-[36px] leading-[39px] mb-[53px] opacity-70">
        Welcome, Sign up
      </h2>
      <Toaster position="top-center" reverseOrder={false} />
      <form
        onSubmit={signUpFormSubmit}
        className="py-[45px] px-[30px] w-[512px] p-5 bg-white m-auto"
      >
        <p className="text-center font-[500] text-[16px] leading-[17px] text-[#787878]">
          It is our great pleasure to have <br /> you on board!{" "}
        </p>
        <label className="flex flex-col mt-[50px] ">
          <input
            
            className="transition-all placeholder-style outline-none flex mx-auto w-[248px] focus:border-[#99cbdc] rounded-[4px] border-[1px] border-[#E5E5E5] p-[10px] "
            type="email"
            required
            
            placeholder="Enter your Email"
          />
        </label>
        <label className="flex flex-col mt-[14px] ">
          <input
            name="newLogin"
            className="transition-all placeholder-style outline-none flex mx-auto w-[248px] focus:border-[#99cbdc] rounded-[4px] border-[1px] border-[#E5E5E5] p-[10px] "
            type="text"
            required
            autoComplete="off"
            placeholder="Enter your login"
          />
        </label>
        <label className="flex flex-col mt-[14px]">
          <input
            name="newPassword"
            className="transition-all placeholder-style outline-none flex mx-auto w-[248px] focus:border-[#99cbdc] rounded-[4px] border-[1px] border-[#E5E5E5] p-[10px] "
            type="password"
            required
            autoComplete="off"
            placeholder="Create your Password"
          />
        </label>
        <button className='flex items-center justify-center mx-auto hover:opacity-80 transition-all bg-[#2D88D4] w-[248px] p-[13px] rounded-[4px] text-white text-center text-[14px] font-[500] mt-[34px] mb-[40px]'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;

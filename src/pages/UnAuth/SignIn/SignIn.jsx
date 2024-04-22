import React from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

function SignIn({setToken}) {
    const newData = JSON.parse(window.localStorage.getItem("newToken")) || {newLogin:"Sardor"}
    const SignInSubmit = (evt) => {
        evt.preventDefault()
        const data = {
            login:evt.target.login.value,
            password:evt.target.password.value
        }
        if(data.login == newData.newLogin){
            toast.success("Muvaffaqiyatli kirdingiz!")
        }
        else{
            toast.error("Kirishda xatolik! \n Iltimos ro'yhatdan o'ting!")
        }
        setTimeout(()=>{
            setToken(data)
        },1000)
        window.localStorage.setItem("token", JSON.stringify(data))
    }
  return (
    <div className="w-full h-[100vh] overflow-auto gradient-custom pt-[100px]">
            <h2 className='text-center font-[600] text-[36px] leading-[39px] mb-[53px] opacity-70'>Welcome, Log into you account</h2>
        <form  onSubmit={SignInSubmit} className='pt-[72px] pb-[39px] px-[30px] w-[512px] p-5 bg-white m-auto'>
            <Toaster position='top-center' reverseOrder={false}/>
            <p className='text-center font-[500] text-[16px] leading-[17px] text-[#787878]'>It is our great pleasure to have <br /> you on board! </p>
            <label className='flex flex-col mt-[30px] mx-auto w-[248px] h-[42px]'>
                <input name='login' className='transition-all placeholder-style outline-none focus:border-[#99cbdc] rounded-[4px] border-[1px] border-[#E5E5E5] p-[10px] ' type="text" required autoComplete='off' placeholder='Enter your login'/>
            </label>
            <label className='flex flex-col mt-[14px] w-[248px] mx-auto'>
                <input name='password' className='transition-all placeholder-style outline-none focus:border-[#99cbdc] rounded-[4px] border-[1px] border-[#E5E5E5] p-[10px] ' type="password" required autoComplete='off' placeholder='Enter password'/>
            </label>
            <button className='flex items-center justify-center mx-auto hover:opacity-80 transition-all bg-[#2D88D4] w-[248px] p-[13px] rounded-[4px] text-white text-center text-[14px] font-[500] my-[14px]'>Login</button>
            <Link className='flex items-center justify-center mx-auto text-center font-[700] w-[248px] p-[12px] text-[#2D88D4] text-[14px] leading-[17px]' to={'sign-up'}>Sign up</Link>
        </form>
    </div>
  )
}

export default SignIn
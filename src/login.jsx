import React from "react";
import loc from "./assets/loc.jpeg";
import logo from "./assets/logo.png";
function Login() {

    return (
        <div className="w-[100vw] h-[100vh] bg-gray-500 flex items-center justify-center relative">
            <img src={loc} alt="background" className="w-full h-full absolute top-0 left-0 object-cover" />

            <div className="w-[90vw] md:w-[30vw] p-10 flex justify-center items-center rounded-[16px] flex-col relative  bg-white" >
                <img src={logo} alt="" className="w-40 h-20" />

                <div className="mt-5 flex flex-col justify-center items-center w-full">
                    <p className="text-neutral-600 ">Log in to your account</p>

                    {/* form */}
                    <form className="mt-5 w-full">
                        <label htmlFor="email" className=" relative  ">
                            <p className="text-md font-semibold">Email</p>
                            <input type="text" id="email" placeholder="Email" className="border rounded border-neutral-200 focus:outline-none w-full mt-3 caret-yellow-500 p-2" />
                        </label>
                        <label htmlFor="pass" className=" relative   ">
                            <p className="text-md mt-2 font-semibold">Password</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 absolute right-4 bottom-0 text-neutral-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <input type="password" id="pass" placeholder="Password" className="border rounded border-neutral-200 focus:outline-none w-full mt-3 caret-yellow-500 p-2" />
                        </label>
                        <p className="text-end text-md text-[#ffbb00] my-1 cursor-pointer hover:underline">Forgot Password?</p>
                        <button className="w-full px-4 py-2 mt-2 bg-[#ffbb00] focus:outline-none " style={{ backgroundColor: "#ffbb00" }} >Sign In</button>
                    </form>
                    <div className="w-full py-3 ">
                        <p className="text-xs flex text-neutral-600">By logging in, I hereby agree to  the <p className="text-[#ffbb00] ms-1 cursor-pointer hover:underline font-semibold"> Terms of Service</p></p>
                    </div>
                </div>
            </div>



        </div>
    )

}

export default Login;
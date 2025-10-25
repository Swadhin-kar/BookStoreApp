import React from "react";
import Navbar from "./Navbar";
import Login from "./login";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import axios from "axios";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log('Signup data:', data);
        const userInfo = {
            fullname:data.fullname,
            email:data.email,
            password: data.password
        }

        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) =>{
                console.log(res.data)
                if(res.data){
                    toast.success('signup successful')
                }

                setTimeout(() => {
                    window.location.href = "/"
                }, 1500);

                localStorage.setItem("Users", JSON.stringify(res.data.user))
            }).catch((err) =>{
                if (err.response) {
                    console.log("Error is :", err);
                    toast.error("Error :" + err.response.data.message)
                }
            })
            
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center transition-colors duration-300">
                <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl p-8 w-[90%] max-w-md relative">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => {
                            window.location.href = "/"
                            // document.getElementById('my_modal_2').showModal()
                        }}
                    > 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h3 className="font-bold text-2xl text-center text-gray-800">
                        Signup
                    </h3>

                    <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        {/* name  */}
                        <div>
                            <label className="block text-gray-600  mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-2 border border-gray-300  rounded-md outline-none bg-gray-50  text-gray-900  focus:ring-2 focus:ring-pink-500"
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span className='text-red-500'>This field is required</span>}
                        </div>
                        {/* Email */}
                        <div>
                            <label className="block text-gray-600  mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-300  rounded-md outline-none bg-gray-50  text-gray-900  focus:ring-2 focus:ring-pink-500"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-gray-600  mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-gray-300  rounded-md outline-none bg-gray-50  text-gray-900  focus:ring-2 focus:ring-pink-500"
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                        </div>

                        {/* Button */}
                        <div className="flex justify-between items-center mt-6">
                            <button
                                type="submit"
                                className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-md transition-all duration-200"
                            >
                                Signup
                            </button>

                            <div className="text-sm text-gray-600 ">
                                Have an account?{" "}
                                <button
                                    type="button"
                                    className="text-pink-500 hover:underline font-medium"
                                    onClick={() => {
                                        document.getElementById("my_modal_2").showModal();
                                    }}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                    <Login />
                </div>
            </div>
        </>
    );
};

export default Signup;

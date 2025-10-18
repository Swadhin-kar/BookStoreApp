import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    return (
        <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box relative">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg mb-4">Login</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <div className='space-y-2'>
                            <label className="block text-sm font-medium">Email</label>
                            <input
                                type="email"
                                placeholder='Enter your email'
                                className='w-full px-3 border rounded-md outline-none py-2 bg-base-100'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>

                        <div className='space-y-2'>
                            <label className="block text-sm font-medium">Password</label>
                            <input
                                type="password"
                                placeholder='Enter your password'
                                className='w-full px-3 border rounded-md outline-none py-2 bg-base-100'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                        </div>

                        <div className='flex justify-between items-center pt-2'>
                            <button
                                type="submit"
                                className='bg-pink-500 text-white px-4 py-2 hover:bg-pink-700 rounded-md transition-colors'
                            >
                                Login
                            </button>
                            <p className="text-sm">
                                Not Registered? <Link to="/signup" className='text-pink-500 hover:underline'>Sign up</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default Login

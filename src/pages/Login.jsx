import { useState } from "react"

const Login = () => {
    const [login, setLogin] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form className=" h-screen flex items-center" onSubmit={handleSubmit}>

                <div className="flex m-auto gap-5 p-6 flex-col w-96 shadow-lg text-gray-500">

                    {/* form header */}
                    <h1 className="text-xl font-semibold">{login ? 'Login' : 'Create Account'}</h1>

                    <p>{login ? 'Please log in to book appointment' : 'Please sign up to book appointment'}</p>

                    {/* form inputs */}
                    {
                        login ? (
                            <>
                                <div>
                                    <p>Email</p>
                                    <input type="email" className="border w-full p-2 mt-1 focus:border-black" />
                                </div>

                                <div>
                                    <p>Password</p>
                                    <input type="password" className="border w-full p-2 mt-1 focus:border-black" />
                                </div>

                                <button type="submit" className="text-white bg-blue-500 p-3 rounded-lg">Login</button>
                                <p className="text-sm"> Create an new account?
                                    <span className="ml-1 cursor-pointer text-blue-400 underline" onClick={() => setLogin(false)}>Click here</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <div>
                                    <p>Full Name</p>
                                    <input type="text" className="border w-full p-2 mt-1 focus:border-black" />
                                </div>

                                <div>
                                    <p>Email</p>
                                    <input type="email" className="border w-full p-2 mt-1 focus:border-black" />
                                </div>

                                <div>
                                    <p>Password</p>
                                    <input type="password" className="border w-full p-2 mt-1 focus:border-black" />
                                </div>

                                <button type="submit" className="text-white bg-blue-500 p-3 rounded-lg">Create account</button>

                                <p className="text-sm"> Already have an account?
                                    <span className="ml-1 cursor-pointer text-blue-400 underline" onClick={() => setLogin(true)}>Login here</span>
                                </p>
                            </>
                        )
                    }
                </div>
            </form>
        </>
    )
}

export default Login

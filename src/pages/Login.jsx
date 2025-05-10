import { useState } from "react"
import './pageStyle/login.css'
const Login = () => {
    const [login, setLogin] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form className=" h-screen flex items-center" onSubmit={handleSubmit}>

                <div className="form-container">

                    {/* form header */}
                    <h1 className="form-title">{login ? 'Login' : 'Create Account'}</h1>

                    <p>{login ? 'Please log in to book appointment' : 'Please sign up to book appointment'}</p>

                    {/* form inputs */}
                    {
                        login ? (
                            <>
                                <div>
                                    <p>Email</p>
                                    <input type="email" className="form-input" />
                                </div>

                                <div>
                                    <p>Password</p>
                                    <input type="password" className="form-input" />
                                </div>

                                <button type="submit" className="btn-primary">Login</button>
                                <p className="form-text"> Create an new account?
                                    <span className="toggle-link" onClick={() => setLogin(false)}>Click here</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <div>
                                    <p>Full Name</p>
                                    <input type="text" className="form-input" />
                                </div>

                                <div>
                                    <p>Email</p>
                                    <input type="email" className="form-input" />
                                </div>

                                <div>
                                    <p>Password</p>
                                    <input type="password" className="form-input" />
                                </div>

                                <button type="submit" className="btn-primary">Create account</button>

                                <p className="form-text"> Already have an account?
                                    <span className="toggle-link" onClick={() => setLogin(true)}>Login here</span>
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

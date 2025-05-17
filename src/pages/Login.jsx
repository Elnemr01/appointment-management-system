import { useContext, useState } from "react";
import './pageStyle/login.css';
import Joi from "joi";
import { useNavigate } from "react-router";
import { OurContext } from "../contextAPI/FilterName";

const Login = () => {
    const [loginAction, setLoginAction] = useState(false);
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        full_name: '',
        email: '',
        password: ''
    });
    const { setLogin } = useContext(OurContext);

    const navigate = useNavigate()
    const handelChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    // Validation for register
    const validateRegister = () => {
        const schema = Joi.object({
            full_name: Joi.string().min(8).max(30).required().messages({
                'string.empty': 'Full name is required',
                'string.min': 'Full name must be at least 8 characters',
                'string.max': 'Full name must be less than or equal to 30 characters',
            }),
            email: Joi.string().email({ tlds: { allow: false } }).required().messages({
                'string.empty': 'Email is required',
                'string.email': 'Email must be a valid email address',
            }),
            password: Joi.string()
                .pattern(/^[A-Za-z0-9]{6,20}$/)
                .required()
                .messages({
                    'string.empty': 'Password is required',
                    'string.pattern.base': 'Password must be 6-20 characters and contain only letters and numbers',
                }),
        });
        return schema.validate(user, { abortEarly: false });
    };

    // Validation for login
    const validateLogin = () => {
        const schema = Joi.object({
            email: Joi.string().email({ tlds: { allow: false } }).required().messages({
                'string.empty': 'Email is required',
                'string.email': 'Email must be valid',
            }),
            password: Joi.string().required().messages({
                'string.empty': 'Password is required',
            }),
        });
        return schema.validate(user, { abortEarly: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { error } = loginAction ? validateLogin() : validateRegister();

        if (error) {
            const errorObj = {};
            error.details.forEach((err) => {
                errorObj[err.path[0]] = err.message;
            });
            setErrors(errorObj);
        } else {
            setErrors({});
            console.log("Form submitted:", user);
            setLogin(true)
            navigate('/')
        }
    };

    return (
        <>
            <form className="flex items-start" onSubmit={handleSubmit}>
                <div className="form-container">
                    <h1 className="form-title">{loginAction ? 'Login' : 'Create Account'}</h1>
                    <p>{loginAction ? 'Please log in to book appointment' : 'Please sign up to book appointment'}</p>

                    {loginAction ? (
                        <>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    name="email"
                                    id="email"
                                    onChange={handelChange}
                                />
                                {errors.email && <p className="error_massage">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-input"
                                    name="password"
                                    id="password"
                                    onChange={handelChange}
                                />
                                {errors.password && <p className="error_massage">{errors.password}</p>}
                            </div>

                            <button type="submit" className="btn-primary">Login</button>
                            <p className="form-text">
                                Create a new account?{' '}
                                <span className="toggle-link" onClick={() => setLoginAction(false)}>Click here</span>
                            </p>
                        </>
                    ) : (
                        <>
                            <div>
                                <label htmlFor="full_name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    name="full_name"
                                    id="full_name"
                                    onChange={handelChange}
                                />
                                {errors.full_name && <p className="error_massage">{errors.full_name}</p>}
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    name="email"
                                    id="email"
                                    onChange={handelChange}
                                />
                                {errors.email && <p className="error_massage">{errors.email}</p>}
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    className="form-input"
                                    name="password"
                                    id="password"
                                    onChange={handelChange}
                                />
                                {errors.password && <p className="error_massage">{errors.password}</p>}
                            </div>

                            <button type="submit" className="btn-primary">Create account</button>

                            <p className="form-text">
                                Already have an account?{' '}
                                <span className="toggle-link" onClick={() => setLoginAction(true)}>Login here</span>
                            </p>
                        </>
                    )}
                </div>
            </form>
        </>
    );
};

export default Login;

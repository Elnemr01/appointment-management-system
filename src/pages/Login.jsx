import { useContext, useState } from "react";
import './pageStyle/login.css';
import Joi from "joi";
import { useNavigate } from "react-router";
import { OurContext } from "../contextAPI/FilterName";
<<<<<<< HEAD
import { toast, ToastContainer } from "react-toastify";
=======
import { toast } from "react-toastify";
>>>>>>> 128b950180132a27c1fc54821ea3f5ba763dffc5

const Login = () => {
    const [loginAction, setLoginAction] = useState(false);
    const [errors, setErrors] = useState({});
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ full_name: '', email: '', password: '' });

    const { setLogin } = useContext(OurContext);
    const navigate = useNavigate();

    const handelChange = (e) => {
        const { name, value } = e.target;

        if (loginAction) {
            setLoginData({ ...loginData, [name]: value });
            setErrors({ ...errors, [name]: '' });
        } else {
            setRegisterData({ ...registerData, [name]: value });
            setErrors({ ...errors, [name]: '' });
        }
    };

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
        return schema.validate(loginData, { abortEarly: false });
    };

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
        return schema.validate(registerData, { abortEarly: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // get valdation
        const { error } = loginAction ? validateLogin() : validateRegister();
        if (error) {
            const errorObj = {};
            error.details.forEach((err) => {
                errorObj[err.path[0]] = err.message;
            });
            setErrors(errorObj);
            return;
        };

        if (loginAction) {
            // حالة تسجيل الدخول
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const chackUser = users.find(u => u.email === loginData.email && u.password === loginData.password);
            // اذا كان المستخدم موجود
            if (chackUser) {
                toast.success('successfully logged in');
                setErrors({});
                setLogin(true);
                localStorage.setItem("currentUser", JSON.stringify(chackUser));
                setTimeout(() => {
                    navigate('/');
                }, 1500);
            }
            // المستخدم غير موجود
            else {
                toast.error('the email or password incorrect');
            }
        }
        // انشاء حساب جديد
        else {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const emailExists = users.some((u) => u.email === registerData.email);
            // لو كان مسجل سابقا
            if (emailExists) {
                toast.error("This email is already in use");
                return;
            }
            // لو غير مسجل
            users.push(registerData);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("currentUser", JSON.stringify(registerData));
            toast.success("Account created successfully");
            setLogin(true);
            setErrors({});
<<<<<<< HEAD
            setTimeout(() => navigate('/'), 1500);
=======
            // console.log("Form submitted:", user);
            setLogin(true);
            navigate('/')
>>>>>>> 128b950180132a27c1fc54821ea3f5ba763dffc5
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
                                    value={loginData.email}
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
                                    value={loginData.password}
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
                                    value={registerData.full_name}
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
                                    value={registerData.email}
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
                                    value={registerData.password}
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
            <ToastContainer autoClose={1500} />
        </>
    );
};

export default Login;

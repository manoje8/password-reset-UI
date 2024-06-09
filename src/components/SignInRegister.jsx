import { useContext, useState } from "react";
import Container from "./Container";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const SignInRegister = () => {
    const navigate = useNavigate()
    const {setToken} = useContext(AuthContext)
    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const handleChange = ({target: {name, value}}) => {
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try 
        {
            const response = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}/login`,
                data: {
                  email: values.email,
                  password: values.password
                }
            })

            const {message, accessToken} = response.data;

            setToken(accessToken);
            localStorage.setItem("token", accessToken)

            if(message)
            {
                toast.success(message, {
                    position: "top-center"
                })
            }
            navigate("/")
        } catch (error) 
        {
            console.error("Authentication failed:", error);
            setToken(null);
            localStorage.removeItem("token");
            
            const {data, status}  = error.response
            if(status === 400)
            {
                toast.error(data.message, {
                    position: "bottom-center",
                    hideProgressBar: true
                })
            }
        }
    }


    return (
    <Container>
        <section>
            <h1 className="title">Sign In</h1>
            <span className="sub-title">Sign in to access your account</span>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" onChange={handleChange} required/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                <p className="forgot-password">
                    <u><a href="/forgot-password">Forgotten your password?</a></u>
                </p>
            </form>
        </section>
        <section>
            <h1 className="title">New User?</h1>
            <span className="sub-title">Creating an account is easy. By registering, you will be able to:</span>

            <ul>
                <li>Check out faster with your saved details</li>
                <li>Discover our new collections, receive news from the maison.</li>
                <li>Manage your profile and preferences</li>
            </ul>

            <a href="/create" className="btn btn-outline-dark btn-block">Create an account</a>
        </section>
    </Container>
)}

export default SignInRegister
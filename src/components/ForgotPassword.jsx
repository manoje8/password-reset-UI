import { useState } from "react"
import Container from "./Container"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');

    const handleChange = ({target: {value}}) => {
        setEmail(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try 
        {
            const response = await axios({
                method: 'post',
                url: `${process.env.REACT_APP_API_URL}/forgot-password`,
                data: {
                  email: email
                }
            })

            const {message} = response.data;

            if(message)
            {
                toast.success(message, {
                    position: "top-center"
                })
            }
            navigate("/login")
        } catch (error) 
        {
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
            <img className="left-panel" src="https://images.pexels.com/photos/1723637/pexels-photo-1723637.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </section>
            <section>
                <form onSubmit={handleSubmit}>
                    <h3 className="title">Reset Password</h3>
                    <span className="sub-title">Enter your email and we will send details on how to reset your password.</span>
                    <input type="email" className="form-control email" placeholder="Registered email address" onChange={handleChange} required/>
                    <button type="submit" className="btn btn-info btn-block">Send password reset link</button>
                    <a className="btn btn-link" href="/login">Back to Login</a>
                </form>
            </section>
        </Container>
)}

export default ForgotPassword
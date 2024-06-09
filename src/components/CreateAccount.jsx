import { useState } from "react"
import Container from "./Container"
import axios from "axios"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


const CreateAccount = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
        userName:"",
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
                url: `${process.env.REACT_APP_API_URL}/register`,
                data: {
                  userName: values.userName,
                  email: values.email,
                  password: values.password
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
            <h1 className="title">Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>User name</label>
                    <input name="userName" className="form-control" onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email" className="form-control" onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" type="password" className="form-control" onChange={handleChange} required/>
                </div>
                <button type="submit" className="btn btn-primary btn-block" >Create an account</button>
                <a className="btn btn-link" href="/login">Back to Login</a>
            </form>
        </section>
        <section>
           <img className="left-panel" src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600" alt="404" />
        </section>
    </Container>
)}

export default CreateAccount
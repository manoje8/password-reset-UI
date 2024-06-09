import { useContext } from "react"
import { Navigate } from "react-router-dom"; 
import { AuthContext } from "./AuthContext";
import "../App.css"

const Home = () => {
    const {token, setToken, loading} = useContext(AuthContext)

    if(loading)
    {
        return null;
    }

    if (!token) 
    {
        return <Navigate to="/login" replace />; 
    }

    const logout = () => {
            setToken(null);
            localStorage.removeItem("token");
    }

    return(
    <div className="home">
        <h1>Welcome</h1>
        <button className="btn btn-info" onClick={logout}>Logout</button>
    </div>
)}

export default Home
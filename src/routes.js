import App from "./App";
import { Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";
import SignInRegister from "./components/SignInRegister";
import CreateAccount from "./components/CreateAccount";
import ResetPassword from "./components/ResetPassword";


const AppRoutes = () => (
    <App>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignInRegister />} />
            <Route path="/create" element={<CreateAccount />}/>
            <Route path="/forgot-password" element={<ForgotPassword />}/>
            <Route path="/reset-password" element= {<ResetPassword />}/>
            <Route path="*" element={<Error404 />}/>
        </Routes>
    </App>
)

export default AppRoutes
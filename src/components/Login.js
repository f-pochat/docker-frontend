import {useState} from "react";
import {useLogin} from "../hooks/useLogin";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "sonner";

const Login = () => {

    const navigate = useNavigate();

    const {login} = useLogin(
        {onSuccess: res => {
            localStorage.setItem('token', res.data['access_token']);
            navigate('/home');
            },
        onError: e => toast.error(e.message)
        })
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginUser = () => {
        login(username, password)
    }

    return(
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}}>
            <div className="form-group w-25">
                <label htmlFor="exampleInputUser1" className="form-label mt-4">Username</label>
                <input type="text" className="form-control" id="exampleInputUser1"
                       aria-describedby="userHelp" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username"/>
            </div>
            <div className="form-group w-25">
                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                       value={password}
                       onChange={e => setPassword(e.target.value)} placeholder="Password"/>
            </div>
            <button className="btn btn-primary w-25 mt-4" onClick={loginUser}>Login</button>
            <Link to="/sign-up" className="btn btn-secondary mt-4 w-25">Sign Up</Link>
        </div>
    )
}
export default Login;

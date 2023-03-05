import {Link} from "react-router-dom";
import {useState} from "react";
import {useSignUp} from "../hooks/useLogin";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";

const SignUp = () => {

    const navigate = useNavigate();

    const {signup} = useSignUp(
        {onSuccess: () => navigate("/login"),
        onError: e => e.message.isArray ? e.message.forEach(err => toast.error(err)) : toast.error(e.message)})

    const signUpUser = () => {
        signup(username, email, password)
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    return(
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height: "100vh"}}>
            <div className="form-group w-25">
                <label htmlFor="exampleInputUser1" className="form-label mt-4">Username</label>
                <input type="text" className="form-control" id="exampleInputUser1"
                       aria-describedby="userHelp" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username"/>
            </div>
            <div className="form-group w-25">
                <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                       aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email"/>
            </div>
            <div className="form-group w-25">
                <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                       value={password}
                       onChange={e => setPassword(e.target.value)} placeholder="Password"/>
            </div>
            <button className="btn btn-primary w-25 mt-4" onClick={signUpUser}>Sign Up</button>
            <Link to="/login" className="btn btn-secondary mt-4 w-25">Login</Link>
        </div>
    )
}
export default SignUp;

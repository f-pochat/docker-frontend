import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const AuthRouter = ({children}) => {

    const navigate = useNavigate();
    useEffect(() => {
        !localStorage.getItem('token') && navigate('/login')
        }
    ,[])

    return(children)
}

export default AuthRouter;

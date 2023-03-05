import axios from 'axios';
import {BASE_URL} from "../common/constants";

export const useLogin = ({onSuccess, onError}) => {
    const login = (username, password) => {
        axios.post(`${BASE_URL}/user/login`,{
            username: username,
            password: password
        }).then(res => onSuccess && onSuccess(res))
            .catch(e => onError && onError(e.response.data));
    }

    return {login}
}

export const useSignUp = ({onSuccess, onError}) => {
    const signup = (username,email, password) => {
        axios.post(`${BASE_URL}/user/register`,{
            username: username,
            email:email,
            role: "USER",
            password: password
        }).then(res => onSuccess && onSuccess(res))
            .catch(e => onError && onError(e.response.data));
    }

    return {signup}
}

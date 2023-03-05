import {useEffect} from "react";
import {BASE_URL} from "../common/constants";
import axios from "axios";

export const useGetSubscribers = ({onError, onSuccess}) => {
    useEffect(() => getSubs())

    const getSubs = () => {
        axios.get(`${BASE_URL}/user/subscriber`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => onSuccess && onSuccess(res))
            .catch(e => onError && onError(e.response.data))
    }
    return {refetch: getSubs}
}

import {BASE_URL} from "../common/constants";
import axios from "axios";

export const useAddSubscriber = ({onSuccess, onError}) => {
    const addSubs = (name, email) => {
        axios.post(`${BASE_URL}/subscriber/add`, {
            name: name,
            email: email
        }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => onSuccess && onSuccess(res.data)).catch(e => onError && onError(e.response.data))
    }

    return {add: addSubs}
}

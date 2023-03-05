import Modal from "react-modal";
import {Link} from "react-router-dom";
import {useSignUp} from "../hooks/useLogin";
import {useState} from "react";
import {useAddSubscriber} from "../hooks/useAddSubscriber";
import {toast} from "sonner";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#073642',
        borderRadius: 5,
    },
};


const AddModal = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const {add} = useAddSubscriber({onSuccess: () => props.onSave(),
        onError: e => toast.error(e.message)})

    const addSubscriber = () => {
        add(name, email)
    }

    return(
        <Modal
            style={customStyles}
            isOpen={props.isOpen}
        >
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="form-group">
                    <label htmlFor="exampleInputUser1" className="form-label mt-4">Name</label>
                    <input type="text" className="form-control" id="exampleInputUser1"
                           aria-describedby="userHelp" value={name} onChange={e => setName(e.target.value)} placeholder="Enter name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="form-label mt-4">email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1"
                           value={email}
                           onChange={e => setEmail(e.target.value)} placeholder="Enter email"/>
                </div>
                <button className="btn btn-primary w-50 mt-4" onClick={addSubscriber}>Add</button>
                <button className="btn btn-warning mt-4 w-50" onClick={props.closeModal}>Close</button>
            </div>
        </Modal>
    )
}

export default AddModal;

import {useState} from "react";
import {useGetSubscribers} from "../hooks/useGetSubscribers";
import {toast} from "sonner";
import AddModal from "../common/AddModal";

const Home = () => {

    const [subscribers, setSubscribers] = useState([]);
    const [modal, setModal] = useState(false);

    const {refetch} = useGetSubscribers({
        onSuccess: res => setSubscribers(res.data),
        onError: e => toast.error(e.message)
    })

    const onSaveAddModal = () => {
        setModal(false);
        refetch();
    }
    return (
        <div className="flex-column d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <AddModal isOpen={modal} onClose={() => setModal(false)} onSave={onSaveAddModal}/>
            <div className="d-flex flex-row justify-content-end w-75">
                <button className="btn btn-primary mb-3" onClick={() => setModal(true)}>Add</button>
            </div>
            <table className="table table-hover w-75">
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">email</th>
                </tr>
                </thead>
                <tbody>
                {
                    subscribers.length ?
                    subscribers.map(sub =>
                        (
                            <tr className="table-active">
                                <td>{sub.id}</td>
                                <td>{sub.name}</td>
                                <td>{sub.email}</td>
                            </tr>
                        ))
                        :
                        <h5 className="mt-2">No subscribers yet! Add new</h5>
                }
                </tbody>
            </table>
        </div>
    )
}
export default Home;

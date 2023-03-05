import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="flex-column d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <h1>Home</h1>
            <Link to="/" className="btn btn-primary">Go to Main</Link>
        </div>
    )
}
export default Home;

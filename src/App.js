import './App.css';
import {Link} from "react-router-dom";

const App = () => {



  return (
      <div className="flex-column d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
        <h1>Main</h1>
        <Link to="home" className="btn btn-primary">Go to Home</Link>
      </div>
  );
}

export default App;

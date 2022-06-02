import 'antd/dist/antd.min.css';
import Login from "./pages/auth/login/Login";
import {Route, Routes,} from 'react-router-dom'
import Register from "./pages/auth/register/Register";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    );
}

export default App;

import './App.css';
import Main from "../Main/Main";
import {Route, Routes} from "react-router-dom";
import {Register} from "../Register/Register";
import {Login} from "../Login/Login";

function App() {
    return (
        <div className="page">
            <Routes>
                <Route path='/signup' element={<Register/>}/>
                <Route path='/signin' element={<Login/>}/>
                <Route path='/' element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default App;

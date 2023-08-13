import './App.css';
import Main from "../Main/Main";
import {Route, Routes} from "react-router-dom";
import {Register} from "../Register/Register";
import {Login} from "../Login/Login";
import Movies from "../Movies/Movies";
import {AppContext} from "../context/AppContext";
import React from 'react'
import {Navigation} from "../Navigation/Navigation";
import {Profile} from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import {NotFound} from "../NotFound/NotFound";


function App() {

    const [navIsVisible, setNavIsVisible] = React.useState(false)


    return (
        <div className="page">
            <AppContext.Provider value={{navIsVisible, setNavIsVisible}}>
                <Routes>
                    <Route path='/signup' element={<Register/>}/>
                    <Route path='/signin' element={<Login/>}/>
                    <Route path='/movies' element={<Movies/>}/>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/saved-movies' element={<SavedMovies/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
                <Navigation visible={navIsVisible}/>
            </AppContext.Provider>
        </div>
    );
}

export default App;

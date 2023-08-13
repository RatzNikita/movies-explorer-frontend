import './App.css';
import Main from "../Main/Main";
import {Route, Routes, useNavigate, useNavigation} from "react-router-dom";
import {Register} from "../Register/Register";
import {Login} from "../Login/Login";
import Movies from "../Movies/Movies";
import {AppContext} from "../context/AppContext";
import React from 'react'
import {Navigation} from "../Navigation/Navigation";
import {Profile} from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import {NotFound} from "../NotFound/NotFound";
import {CurrentUserContext} from "../context/CurrentUserContext";
import main from "../Main/Main";
import {api} from "../../api/MainApi";

function App() {


    const [navIsVisible, setNavIsVisible] = React.useState(false)
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState()

    const [currentUser, setCurrentUser] = React.useState({})
    const navigate = useNavigate();

    const handleUpdateUser = ({name, email}) => {
        isLoading(true)
        api.setUserInfo(name, email)
            .then(user => {
                setCurrentUser(user)
            })
            .catch(err => console.log(err))
            .finally(() => isLoading(false))
    }

    const handleLogin = () => {
        setLoggedIn(true)
    }

    const handleTokenCheck = () => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            api.checkToken(token).then((data) => {
                if (data) {
                    setLoggedIn(true);
                    navigate('/movies')
                }
            }).catch(err => {
                console.log(err)
            })
        }
    }

    React.useEffect(() => {
        handleTokenCheck();
    }, [])

    React.useEffect(() => {
        if (loggedIn) {
            api.setToken(localStorage.getItem('token'))
            api.getUserInfo()
                .then((user) => {
                    setCurrentUser(user)
                })
                .catch(err => console.log(err))
        }
    }, [loggedIn])


    return (
        <div className="page">
            <AppContext.Provider value={{navIsVisible, setNavIsVisible}}>
                <CurrentUserContext.Provider value={currentUser}>
                    <Routes>
                        <Route path='/signup' element={<Register/>}/>
                        <Route path='/signin' element={<Login handleLogin={handleLogin}/>}/>
                        <Route path='/movies' element={<Movies/>}/>
                        <Route path='/' element={<Main/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/saved-movies' element={<SavedMovies/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                    <Navigation visible={navIsVisible}/>
                </CurrentUserContext.Provider>
            </AppContext.Provider>
        </div>
    );
}

export default App;

import './Main.css'
import {NavTab} from "./NavTab/NavTab";
import {Promo} from "./Promo/Promo";
import {AboutProject} from "./AboutProject/AboutProject";
import {Techs} from "./Techs/Techs";
import {AboutMe} from "./AboutMe/AboutMe";
import {Portfolio} from "./Portfolio/Portfolio";
import {Header} from "../Header/Header";
import {Footer} from "../Footer/Footer";


export const Main = () => {

    return (
        <main className='landing'>
            <Header/>
            <Promo/>
            <NavTab/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
            <Footer/>
        </main>
    )
}

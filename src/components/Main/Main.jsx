import './Main.css'
import {NavTab} from "./NavTab/NavTab";
import {Promo} from "./Promo/Promo";
import {AboutProject} from "./AboutProject/AboutProject";
import {Techs} from "./Techs/Techs";
import {AboutMe} from "./AboutMe/AboutMe";
import {Portfolio} from "./Portfolio/Portfolio";


export const Main = () => {

    return (
        <main className='landing'>
            <Promo/>
            <NavTab/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </main>
    )
}

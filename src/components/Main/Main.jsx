import './Main.css'
import {NavTab} from "./NavTab/NavTab";
import {Promo} from "./Promo/Promo";
import {AboutProject} from "./AboutProject/AboutProject";


export const Main = () => {

    return (
        <main className='landing'>
            <Promo/>
            <NavTab/>
            <AboutProject/>
        </main>
    )
}

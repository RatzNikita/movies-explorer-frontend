import './Promo.css'
import logo from "../../../images/landing-logo.png";

export const Promo = () => {

    return (
        <section className='promo'>
            <img className='promo__logo'
                 src={logo}
                 alt='Practicum logo'></img>
            <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    )
}

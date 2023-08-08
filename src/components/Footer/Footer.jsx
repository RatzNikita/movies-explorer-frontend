import './Footer.css'
import divider from '../../images/divider-grey.svg'

export const Footer = () => {


    return (
        <footer className='footer'>
            <h3 className='footer__heading'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <img className='footer__divider' alt='Grey line' src={divider}/>
            <a href='https://practicum.yandex.ru' className='footer__link' target='_blank'  rel="noreferrer" >Яндекс.Практикум</a>
            <a href='https://github.com/RatzNikita' className='footer__link' target='_blank'  rel="noreferrer" >Github</a>
            <p className='footer__copyright'>©2020</p>
        </footer>
    )
}

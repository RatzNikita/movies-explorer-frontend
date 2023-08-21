import './Footer.css'

export const Footer = () => {

    return (
        <footer className='footer'>
            <h3 className='footer__heading'>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <div className='divider divider_color_grey footer__divider'/>
            <div className='footer__content'>
                <div className='footer__links'>
                    <a href='https://practicum.yandex.ru' className='footer__link' target='_blank'  rel="noreferrer" >Яндекс.Практикум</a>
                    <a href='https://github.com/RatzNikita' className='footer__link' target='_blank'  rel="noreferrer" >Github</a>
                </div>
                <p className='footer__copyright'>©2020</p>
            </div>
        </footer>
    )
}
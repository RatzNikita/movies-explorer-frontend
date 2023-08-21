import './Portfolio.css'
import link from '../../../images/link.svg'

export const Portfolio = () => {

    return (
        <section className='portfolio'>
            <p className='portfolio__heading'>Портфолио</p>
            <a className='portfolio__project' href='https://github.com/RatzNikita/how-to-learn' target='_blank'  rel="noreferrer" >
                <h4 className='portfolio__project-name'>Статичный сайт</h4>
                <img src={link} alt='Arrow icon' className='portfolio__arrow' />
            </a>
            <div className='divider divider_color_grey'/>
            <a className='portfolio__project' href='https://github.com/RatzNikita/russian-travel' target='_blank'  rel="noreferrer" >
                <h4 className='portfolio__project-name'>Адаптивный сайт</h4>
                <img src={link} alt='Arrow icon' className='portfolio__arrow' />
            </a>
            <div className='divider divider_color_grey'/>
            <a className='portfolio__project' href='https://github.com/RatzNikita/react-mesto-api-full-gha' target='_blank'  rel="noreferrer" >
                <h4 className='portfolio__project-name'>Одностраничное приложение</h4>
                <img src={link} alt='Arrow icon' className='portfolio__arrow' />
            </a>
        </section>
    )
}

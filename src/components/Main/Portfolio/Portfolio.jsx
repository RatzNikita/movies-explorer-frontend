import './Portfolio.css'
import divider from '../../../images/divider-grey.svg'
import link from '../../../images/link.svg'

export const Portfolio = () => {

    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Github</h2>
            <p className='portfolio__subtitle'>Портфолио</p>
            <a className='portfolio__project' href='https://github.com/RatzNikita/how-to-learn' target='_blank'  rel="noreferrer" >
                <h4 className='portfolio__project-name'>Статичный сайт</h4>
                <img src={link} alt='Arrow icon' className='portfolio__link' />
            </a>
            <img src={divider} alt='Grey line' className='landing__divider'/>
            <a className='portfolio__project' href='https://github.com/RatzNikita/russian-travel' target='_blank'  rel="noreferrer" >
                <h4 className='portfolio__project-name'>Адаптивный сайт</h4>
                <img src={link} alt='Arrow icon' className='portfolio__link' />
            </a>
            <img src={divider} alt='Grey line' className='landing__divider'/>
            <a className='portfolio__project' href='https://github.com/RatzNikita/react-mesto-api-full-gha' target='_blank'  rel="noreferrer" >
                <h4 className='portfolio__project-name'>Одностраничное приложение</h4>
                <img src={link} alt='Arrow icon' className='portfolio__link' />
            </a>
        </section>
    )
}

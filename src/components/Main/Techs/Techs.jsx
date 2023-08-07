import divider from "../../../images/divider.svg";
import './Techs.css'

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']

export const Techs = () => {

    return (
        <section id='techs' className='techs'>
            <h2 className='landing__title'>Технологии</h2>
            <img src={divider} alt='Divider line' className='landing__divider'></img>
            <h2 className='techs__title'>7 технологий</h2>
            <p align='center' className='landing__subtitle'>На курсе веб-разработки мы освоили технологии, которые
                применили в дипломном проекте.</p>
            <ul className='techs__list'>
                {techs.map(tech => {
                    return (
                        <li key={tech} className='techs__item'>
                            {tech}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

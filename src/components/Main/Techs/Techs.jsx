import './Techs.css'

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB']

export const Techs = () => {

    return (
        <section id='techs' className='techs'>
            <h2 className='landing__subtitle techs__heading'>Технологии</h2>
            <div className='divider'/>
            <h2 className='techs__title'>7 технологий</h2>
            <p align='center' className='landing__text techs__text'>На курсе веб-разработки мы освоили технологии, которые
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

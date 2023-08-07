import './AboutProject.css'
import divider from '../../../images/divider.svg'

export const AboutProject = () => {

    return (
        <section id='about-project' className='about-project'>
            <h2 className='about-project__title'>О проекте</h2>
            <img src={divider} alt='Divider line' className='about-project__divider'></img>
            <h2 className='about-project__title'>Дипломный проект включал 5 этапов</h2>
            <p className='about-project__subtitle'>Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.</p>
            <h2 className='about-project__title'>На выполнение диплома ушло 5 недель</h2>
            <p className='about-project__subtitle'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.</p>
            <div className='about-project__block'>
                <figure className='about-project__figure_color_black'>1 неделя</figure>
                <figcaption className='about-project__figure-caption'>Back-end</figcaption>
            </div>
            <div className='about-project__block'>
                <figure className='about-project__figure_color_white'>4 недели</figure>
                <figcaption className='about-project__figure-caption'>Front-end</figcaption>
            </div>

        </section>
    )
}

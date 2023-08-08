import './AboutProject.css'

export const AboutProject = () => {

    return (
        <section id='about-project' className='about-project'>
            <h2 className='landing__subtitle'>О проекте</h2>
            <div className='divider'/>
            <div className='about-project__info-container'>
                <article className='about-project__info-item'>
                    <h2 className='landing__subtitle about-project__info-heading'>Дипломный проект включал 5 этапов</h2>
                    <p className='landing__text'>Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>
                </article>
                <article className='about-project__info-item'>
                    <h2 className='landing__subtitle about-project__info-heading'>На выполнение диплома ушло 5 недель</h2>
                    <p className='landing__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.</p>
                </article>
            </div>
            <div className='about-project__block'>
                <figure className='about-project__figure about-project__figure_color_black'>1 неделя</figure>
                <figcaption className='about-project__figure-caption'>Back-end</figcaption>
            </div>
            <div className='about-project__block'>
                <figure className='about-project__figure about-project__figure_color_white'>4 недели</figure>
                <figcaption className='about-project__figure-caption'>Front-end</figcaption>
            </div>

        </section>
    )
}

import tempAvatar from "../../../images/temp-avatar.jpg"
import './AboutMe.css'

export const AboutMe = () => {

    return (
        <section id='about-me' className='about-me'>
            <h2 className='landing__subtitle about-me__heading'>Студент</h2>
            <div className='divider'/>
            <div className='about-me__container'>
                <img src={tempAvatar} alt='Ratz Nikita' className='about-me__photo'/>
                <p className='about-me__name'>Никита</p>
                <p className='about-me__job'>Веб-разработчик, 24 года</p>
                <p className='landing__text about-me__about'>Я живу в Тольятти. Окончил Тольяттинский Машиностроительный Колледж.
                    Пару лет назад решил попробовать себя в программировании, меня это так увлекло, что я
                    решил связать с этим жизнь.
                    Хочу развиваться в разработке
                    веб-приложений и приносить пользу команде. Умею хорошо воплощать замыслы
                    дизайнеров с помощью новейших технологий.
                    В свободное время занимаюсь физической культурой: тяжелая атлетика и велоспорт.</p>
                <p className='portfolio__github'>Github</p>
            </div>
        </section>
    )
}

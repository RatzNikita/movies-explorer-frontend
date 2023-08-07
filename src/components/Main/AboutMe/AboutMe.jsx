import divider from "../../../images/divider.svg";
import tempAvatar from "../../../images/temp.jpg"
import './AboutMe.css'

export const AboutMe = () => {

    return (
        <section id='about-me' className='about-me'>
            <h2 className='landing__title'>Студент</h2>
            <img src={divider} alt='Divider line' className='landing__divider'></img>
            <img src={tempAvatar} alt='Ratz Nikita' className='about-me__avatar'/>
            <p className='about-me__name'>Никита</p>
            <p className='about-me__job-title'>Веб-разработчик, 24 года</p>
            <p className='landing__subtitle'>Я живу в Тольятти. Окончил Тольяттинский Машиностроительный Колледж.
                Пару лет назад решил попробовать себя в программировании, меня это так увлекло, что я
                твёрдо решил связать с этим жизнь.
                Хочу развиваться в разработке
                веб-приложений и приносить пользу команде. Умею хорошо воплощать замыслы
                дизайнеров с помощью новейших технологий.
                В свободное время занимаюсь физической культурой: тяжелая атлетика и велоспорт.</p>
        </section>
    )
}

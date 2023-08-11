import './NotFound.css'
import {useNavigate} from "react-router-dom";

export const NotFound = () => {
    const navigation = useNavigate();

    const toMain = () => {
        navigation('/',{replace: true})
    }

    return (
        <div className='not-found'>
            <h2 className='not-found__code'>404</h2>
            <p className='not-found__message'>Страница не найдена</p>
            <button className='not-found__button' onClick={() => toMain()}>Назад</button>
        </div>
    )
}

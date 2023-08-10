import './Movies.css'
import withLayout from "../../utils/withLayout/withLayout";
import {SearchForm} from "./SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import {Preloader} from "./Preloader/Preloader";

const Movies = () => {


    return (
        <main className='movies'>
            <SearchForm/>
            <MoviesCardList/>
            <Preloader/>
        </main>
    )
}

export default withLayout(Movies)

import {SearchForm} from "../Movies/SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import withLayout from "../../utils/withLayout/withLayout";


 const SavedMovies = () => {

    return (
        <main className='saved-movies'>
            <SearchForm/>
            <MoviesCardList />
        </main>
    )
}

export default withLayout(SavedMovies)

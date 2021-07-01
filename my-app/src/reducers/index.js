import { combineReducers } from "redux"

const moviesReducers = () => {
    return [
        {title:'Spider-Men: Homecoming', releaseDate: '05-07-2017', rating: 7.4},
        {title:'Spider-Men: Homecoming', releaseDate: '05-07-2017', rating: 7.4},
        {title:'Spider-Men: Homecoming', releaseDate: '05-07-2017', rating: 7.4},
        {title:'Spider-Men: Homecoming', releaseDate: '05-07-2017', rating: 7.4},
        {title:'Spider-Men: Homecoming', releaseDate: '05-07-2017', rating: 7.4},
    ]
}


const selectedMovieReducer = (state = null, action) => {
   switch(action.type) {
       case 'MOVIE_SELECTED':
           return action.payload
       default:
           return state
   }
}

export default combineReducers({
    movies: moviesReducers,
    selectedMovie: selectedMovieReducer
})
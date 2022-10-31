import { fetchWrapper } from './http_service'

export const movieService = {
    getMovie,getMovieByCinema
}

function getMovie (params) {
    return fetchWrapper.get('movie' , {
        status : params
    });
}

function getMovieByCinema () {
    return fetchWrapper.get('movie-by-cinema');
}
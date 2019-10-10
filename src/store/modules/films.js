import axios from 'axios';

export default {
    actions: {
        fetchAllFilms(ctx, page) {
            axios
                .get('https://api.themoviedb.org/3/movie/popular?api_key=7df12775c33c177f17a5122c046c295b&language=en-US&page=' + page)
                .then(response => {
                    const films = response.data.results;
                    ctx.commit('updateAllFilms', films)
                })
                .catch(err => console.log(err));
        },
        fetchCurrentFilm(ctx, filmId) {
            if (filmId === 0) {
                ctx.commit('updateCurrentFilm', null);
            } else {
                axios
                    .get('https://api.themoviedb.org/3/movie/'+filmId+'?api_key=7df12775c33c177f17a5122c046c295b&language=en-US')
                    .then(response => {
                        const film = response.data;
                        ctx.commit('updateCurrentFilm', film)
                    })
                    .catch(err => console.log(err));
            }

        },
        fetchRecommendFilm(ctx, filmId) {
            if (filmId === 0) {
                ctx.commit('updateRecommendFilms', null);
            } else {
                axios
                    .get('https://api.themoviedb.org/3/collection/' + filmId + '?api_key=7df12775c33c177f17a5122c046c295b&language=en-US')
                    .then(response => {
                        const films = response.data;
                        ctx.commit('updateRecommendFilms', films)
                    })
                    .catch(err => console.log(err));
            }

        },
        fetchSearchedFilm(ctx, value) {
            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=7df12775c33c177f17a5122c046c295b&language=en-US&query=' + value + '&page=1')
                .then(response => {
                    const films = response.data.results;
                    ctx.commit('updateSearchedFilms', films)
                })
                .catch(err => console.log(err));
        },
        sortByRate(ctx, boolean) {
            ctx.commit('updateAllFilmsByRate', boolean)
        },
        sortByDate(ctx, boolean) {
            ctx.commit('updateAllFilmsByDate', boolean)
        }
    },
    mutations: {
        updateAllFilms(state, films) {
            state.films = films
        },
        updateCurrentFilm(state, film) {
            state.currentFilm = film
        },
        updateRecommendFilms(state, films) {
            state.recommendFilms = films
        },
        updateSearchedFilms(state, films) {
            state.searchedFilms = films
        },
        updateAllFilmsByDate(state, boolean) {
            state.films.sort((a, b) => {
                const date1 = a.release_date;
                const date2 = b.release_date;

                const parts1 = date1.split('-');
                const parts2 = date2.split('-');

                let newDate1 = new Date(parts1[0], parts1[1] - 1, parts1[2]);
                let newDate2 = new Date(parts2[0], parts2[1] - 1, parts2[2]);

                let isOldToNew;
                if (boolean === 'increase')
                    isOldToNew = newDate1 > newDate2;
                else if (boolean === 'decrease')
                    isOldToNew = newDate1 < newDate2;

                if (isOldToNew) return 1;
                else return -1
            })
        },

        updateAllFilmsByRate(state, boolean) {
            if (boolean === 'increase')
                state.films.sort((a, b) => a.vote_average < b.vote_average ? 1 : -1);
            else if (boolean === 'decrease')
                state.films.sort((a, b) => a.vote_average > b.vote_average ? 1 : -1)
        }
    },
    state: {
        films: [],
        currentFilm: null,
        recommendFilms: null,
        searchedFilms: null
    },
    getters: {
        allFilms(state) {
            return state.films
        },
        getCurrentFilm(state) {
            return state.currentFilm
        },
        getRecommendFilms(state) {
            return state.recommendFilms
        },
        getSearchedFilms(state) {
            return state.searchedFilms
        }
    }
}

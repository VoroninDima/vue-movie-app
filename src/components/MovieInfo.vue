<template>
    <div>
        <div v-if="getCurrentFilm" class="wrapper">
            <div class="img">
                <img :src="'http://image.tmdb.org/t/p/w500' + getCurrentFilm.poster_path" alt="">
            </div>
            <div class="content">
                <p class="film-title">{{getCurrentFilm.title}}</p>
                <p class="film-subtitle">
                    {{getCurrentFilm.release_date.split('-')[0]}} |
                    {{getCurrentFilm.runtime}} minutes
                </p>
                <div v-if="getCurrentFilm.vote_average" class="rate">
                    <span>{{getCurrentFilm.vote_average}}</span>
                    <img src="../assets/star.svg" alt="">
                </div>
                <div class="film-overview">
                    <p>{{getCurrentFilm.overview}}</p>
                </div>
                <div class="film-info">
                    <div class="film-row">
                        <span class="category">Genres:</span>
                        <div>
                        <span class="category-info" v-for="(genre, i) in getCurrentFilm.genres">
                            {{genre.name}}<span v-if="i+1 !== getCurrentFilm.genres.length">,</span>
                        </span>
                        </div>
                    </div>
                    <div class="film-row">
                        <span class="category">Country:</span>
                        <div>
                        <span class="category-info" v-for="(country, i) in getCurrentFilm.production_countries">
                            {{country.name}}<span v-if="i+1 !== getCurrentFilm.production_countries.length">,</span>
                        </span>
                        </div>
                    </div>
                    <div class="film-row">
                        <span class="category">Company:</span>
                        <div>
                        <span class="category-info" v-for="(company, i) in getCurrentFilm.production_companies" v-if="i < 3">
                            {{company.name}}<span v-if="i+1 !== getCurrentFilm.production_companies.length">,</span>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Recommendations v-if="getCurrentFilm"/>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import Recommendations from "./Recommendations";

    export default {
        name: "MovieInfo",
        components: {Recommendations},
        computed: mapGetters(['getCurrentFilm']),
        methods: mapActions(['fetchCurrentFilm', 'fetchRecommendFilm']),
        mounted() {
            this.fetchCurrentFilm(this.$route.params.id);
        },
        updated() {
            window.scrollTo(0,0);
        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        margin-top: 65px;
        display: flex;
    }

    .img {
        width: 35%;

        img {
            width: 100%;
        }
    }

    .content {
        width: 65%;
        padding: 40px;
        position: relative;
    }

    .film-title {
        font-size: 32px;
        font-weight: normal;
    }

    .film-subtitle {
        color: #848484;
        font-size: 18px;
    }

    .rate {
        position: absolute;
        top: 93px;
        right: 0;
        display: flex;
        align-items: center;
        span {
            font-size: 26px;
            margin-right: 20px;
            padding-top: 4px;
        }
        img {
            width: 30px;
        }
    }

    .film-overview {
        margin-top: 60px;
    }

    .film-info {
        margin-top: 70px;
        .film-row {
            display: flex;
            justify-content: space-between;
        }
        
        .category {
            color: #848484;
        }
    }
</style>

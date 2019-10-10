<template>
    <router-link :to="{name:'movie', params: {id:film.id}}" class="nav-link">
        <v-card class="mx-auto card" hover @click="handleClick">
            <v-img class="white--text" height="300px" :src="'http://image.tmdb.org/t/p/w400' + film.poster_path">
                <v-card-title class="align-end fill-height film-title"><span>{{film.title}}</span></v-card-title>
            </v-img>
            <div :class="{isRecommendations}">
                <v-card-text>
                    <span>Vote: {{film.vote_average}} ({{film.vote_count}} voted)</span><br>
                    <span class="text--primary">
                    <span>Date: {{film.release_date}}</span><br>
                </span>
                </v-card-text>
                <v-card-actions>
                    <v-btn text
                           color="orange">
                        Explore
                    </v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </router-link>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Card",
        props: {
            film: {
                type: Object,
                required: true
            },
            isRecommendations: {
                type: Boolean,
                required: false
            }
        },
        computed: mapGetters(['getRecommendFilms', 'getCurrentFilm']),
        methods: {
            ...mapActions(['fetchCurrentFilm', 'fetchRecommendFilm']),
            handleClick() {
                if (this.isRecommendations)
                    this.fetchCurrentFilm(this.film.id)
            }
        }
    }
</script>

<style scoped lang="scss">
    .card {
        width: 93%;
        margin-bottom: 20px;
    }

    .film-title {
        background: linear-gradient(to bottom, rgba(255, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
    }

    .nav-link {
        text-decoration: none;
        width: 25%;
    }

    .isRecommendations {
        display: none;
    }
</style>

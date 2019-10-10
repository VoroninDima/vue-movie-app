<template>
    <div class="search">
        <v-text-field label="Search" v-model="value" @input="handleInput"/>
        <div class="searched" v-if="getSearchedFilms" :class="{hideSearched}">
            <div v-for="film in getSearchedFilms">
                <router-link :to="{name:'movie', params: {id:film.id}}" class="nav-link">
                    {{film.title}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Search",
        data() {
            return {
                value: '',
                hideSearched: true
            }
        },
        computed: mapGetters(['getSearchedFilms', 'getCurrentFilm']),
        methods: {
            ...mapActions(['fetchSearchedFilm', 'fetchCurrentFilm']),
            handleInput(value) {
                if (value) {
                    this.fetchSearchedFilm(value);

                    this.hideSearched = false
                } else {
                    this.hideSearched = true

                }
            }
        },
        mounted() {
            window.onclick = (e) => {
                if (e.target.tagName !== 'LI' || e.target.tagName !== 'A') {
                    this.value = '';
                    this.hideSearched = true
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .search {
        margin-left: 50px;
        padding-top: 20px;
        position: relative;
    }

    .searched {
        position: absolute;
        width: 300px;
        height: 400px;
        overflow-y: scroll;

        & > div {
            margin: 0;
            font-size: 16px;
            cursor: pointer;
            background-color: #505050;
            transition: .3s;

            &:hover {
                background-color: #3a3a3a;
            }
        }
    }

    .nav-link {
        text-decoration: none;
        display: block;
        width: 100%;
        color: #fff;
        padding: 5px 10px;
    }

    .hideSearched {
        display: none;
    }
</style>

<template>
    <div class="wrapper">
        <Sorting/>
        <div class="content">
            <div class="film-card" v-for="film in allFilms" :key="film.id">
                <Card :film="film"/>
            </div>
            <Paginator/>
        </div>
    </div>
</template>

<script>
    import Card from "./Card";
    import Paginator from "./Paginator";

    import {mapGetters, mapActions} from 'vuex';
    import Sorting from "./Sorting";

    export default {
        name: "Main",
        components: {Sorting, Paginator, Card},
        computed: mapGetters(['allFilms']),
        methods: mapActions(['fetchAllFilms']),
        mounted() {
            this.fetchAllFilms(1)
        }
    }
</script>

<style scoped lang="scss">
    .wrapper {
        margin-top: 95px;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
    }

    .film-card {
        width: 25%;
    }
</style>

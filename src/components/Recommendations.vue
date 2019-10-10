<template>
    <div class="recommendations">
        <p class="rec-title">Related films</p>
        <div v-if="getRecommendFilms && getCurrentFilm.belongs_to_collection" class="content">
            <Card v-for="film in getRecommendFilms.parts" :film="film" :isRecommendations="true"/>
        </div>
        <div v-if="noRecommend" class="no-rec">Sorry, there are no recommendations for this film :(</div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import Card from "./Card.vue";

    export default {
        name: "Recommendations",
        components: {Card},
        data() {
            return {
                noRecommend: false
            }
        },
        computed: mapGetters(['getRecommendFilms', 'getCurrentFilm']),
        methods: mapActions(['fetchRecommendFilm', 'fetchCurrentFilm']),
        watch: {
            $route (to, from){
                this.fetchCurrentFilm(to.params.id)
            },
            getCurrentFilm() {
                if (this.getCurrentFilm.belongs_to_collection)
                    this.fetchRecommendFilm(this.getCurrentFilm.belongs_to_collection.id)
            }
        },
        mounted() {
            if (this.getCurrentFilm.belongs_to_collection) {
                this.fetchRecommendFilm(this.getCurrentFilm.belongs_to_collection.id);
                this.noRecommend = false
            } else {
                this.noRecommend = true
            }
        },
        updated() {
            if (this.getCurrentFilm.belongs_to_collection) {
                this.noRecommend = false
            } else {
                this.noRecommend = true
            }
        },
        beforeDestroy() {
            this.fetchCurrentFilm(0);
            this.fetchRecommendFilm(0)
        }
    }
</script>

<style scoped lang="scss">
    .recommendations {
        max-width: 1200px;
        margin: 30px auto;
    }

    .rec-title {
        font-size: 26px;
        margin: 30px 0;
        padding-left: 30px;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
    }

    .no-rec {
        font-size: 22px;
    }
</style>

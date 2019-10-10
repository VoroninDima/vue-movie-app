<template>
    <div class="paginator">
        <v-pagination
                v-model="page"
                @input="handleInput"
                :length="20"
                :total-visible="10"
        ></v-pagination>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Paginator",
        data() {
            return {
                page: 1
            }
        },
        methods: {
            ...mapActions(['fetchAllFilms']),
            handleInput(e) {
                this.fetchAllFilms(e)
            }
        }
    }
</script>

<style scoped lang="scss">
    .paginator {
        width: 100%;
        margin: 20px 0;
    }
</style>

<template>
    <div>
        <Main/>
        <Loader v-if="allFilms.length === 0"/>
    </div>
</template>

<script>
    import Main from "./Main";
    import Loader from "./Loader";

    import {mapGetters} from 'vuex';

    export default {
        name: "Content",
        components: {
            Loader,
            Main
        },
        computed: mapGetters(['allFilms'])
    }

</script>

<style scoped>

</style>

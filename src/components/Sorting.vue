<template>
    <div @click="sortByRate" class="sort-wrapper">
        <div class="sort-rows">
            <span>Rating sort:</span>
            <v-btn small @click="sortByRate('increase')">From good to bed</v-btn>
            <v-btn small @click="sortByRate('decrease')">From bed to good</v-btn>
        </div>
        <div class="sort-rows">
            <span>Date sort:</span>
            <v-btn small @click="sortByDate('increase')">From old to new</v-btn>
            <v-btn small @click="sortByDate('decrease')">From new to old</v-btn>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Sorting",
        methods: mapActions(['sortByRate', 'sortByDate']),
    }
</script>

<style scoped lang="scss">
    .sort-rows {
        display: flex;

        & > button {
            margin-left: 10px;
        }
    }

    .sort-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
</style>

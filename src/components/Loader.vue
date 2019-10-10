<template>
    <div class="wrapper">
        <v-progress-circular
                :size="70"
                :width="7"
                color="#a4acbb"
                indeterminate
        ></v-progress-circular>

    </div>
</template>

<script>
    export default {
        name: "Loader"
    }
</script>

<style scoped lang="scss">
    .wrapper {
        margin-top: 200px;
        display: flex;
        justify-content: center;
    }
</style>

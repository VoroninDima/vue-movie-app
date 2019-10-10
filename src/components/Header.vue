<template>
    <v-app-bar
            app
            clipped-left>
        <router-link to="/" class="nav-link">
            <v-toolbar-title>Application</v-toolbar-title>
        </router-link>
        <Search/>
    </v-app-bar>
</template>

<script>
    import Search from "./Search";
    export default {
        name: "Header",
        components: {Search}
    }
</script>

<style scoped lang="scss">
    .nav-link {
        text-decoration: none;
        color: #fff;
    }
</style>

import Vue from 'vue';
import VueRouter from  'vue-router';

import Content from "./components/Content";
import MovieInfo from "./components/MovieInfo";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/', component: Content},
        {path: '/movie/:id', name:'movie', component: MovieInfo}

    ]

})

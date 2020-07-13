import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import ExampleComponent from './components/ExampleComponent';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {path: '/', component: Home}, 
        {path: '/example', component: ExampleComponent}
    ], 
    mode: 'history'
});
import { createRouter, createWebHistory } from "vue-router";
import HomePage from './components/HomePage.vue';
import DetalleSerie from './components/DetalleSerie.vue';
import UpdateComp from './components/UpdateComp.vue';
import CreateComp from './components/CreateComp.vue';
import CarteleraComp from './components/CarteleraComp.vue';

const routes = [
    {
        path:'/', component: HomePage
    },
    {
        path:'/detalleSerie/:id', component: DetalleSerie
    },
    {
        path:'/update', component: UpdateComp
    },
    {
        path:'/create', component: CreateComp
    },
    {
        path:'/cartelera/:id', component: CarteleraComp
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
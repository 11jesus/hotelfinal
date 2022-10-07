import { createApp } from 'vue'
import App from './App.vue'

//Se importo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

//Se importo bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css'

import {createRouter, createWebHistory} from 'vue-router'

import InicioPage from '@/pages/InicioPage.vue'
import HotelesPage from '@/pages/HotelesPage.vue'
import HotelCreate from '@/pages/Hoteles/HotelCreate.vue'
import HotelDetalle from '@/pages/Hoteles/HotelDetalle.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',       
            name:'InicioPage', 
            component: InicioPage
        },
        {
            path: '/hoteles', 
            name:'HotelesPage', 
            component: HotelesPage
        },
        {
            path: '/hotelcreate', 
            name:'HotelCreate', 
            component: HotelCreate
        },
        {
            path: '/hoteldetalle/:id', 
            name:'HotelDetalle', 
            component: HotelDetalle
        },
    ]
})

createApp(App).use(router).mount('#app')

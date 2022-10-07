<template>
    <div class="mt-5 container-fluid">
        <div class="shadow p-4">
            <div class="row">
                <div class="col-md-4">
                    <h2><img class="mb-3" src="@/assets/hotel.png" alt="" width="34px"> Hoteles</h2>
                </div>
                <div class="col-md-8">
                    <div class="d-flex justify-content-end">
                        <button @click="nuevohotel" class="btn btn-success">
                            <i class="bi bi-plus-circle-fill"></i>
                            <span class="ms-2 fw-bold">Nuevo Hotel</span>
                        </button>
                    </div>
                </div>
            </div>
            <table class="table table-hover table-bordered shadow">
                <thead class="table-dark">
                    <tr>
                        <th scope="col" class="text-uppercase">ID</th>
                        <th scope="col" class="text-uppercase">Nit</th>
                        <th scope="col" class="text-uppercase">Nombres</th>
                        <th scope="col" class="text-uppercase">Apellidos</th>
                        <th scope="col" class="text-uppercase">Ciudad</th>
                        <th scope="col" class="text-uppercase">Capacidad hab</th>
                        <th scope="col" class="text-uppercase">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="hotel in hotels" :key="hotel.id">
                        <td> {{hotel.id}} </td>
                        <td> {{hotel.nit}} </td>
                        <td> {{hotel.name}} </td>
                        <td> {{hotel.address}} </td>
                        <td> {{hotel.city.name}} </td>
                        <td> {{hotel.num_rooms}} </td>
                        <td class="d-flex gap-2">
                            <button class="btn btn-warning" @click.prevent="viewHotel(hotel.id)">
                                <i class="bi bi-info-circle-fill"></i>
                            </button>
                            <a class="btn btn-primary fw-bold" href="habitaciones.html">
                                <i class="bi bi-door-open-fill"></i> Habitaciones
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    beforeMount() {
    axios
        .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels')
        .then( response => (this.hotels = response.data.data) )
    },
    data() {
        return {
            hotels: []
        }
    },
    methods: {
        nuevohotel() {
            this.$router.push({ name: 'HotelCreate'})
        },
        viewHotel(id){
            this.$router.push({ path: 'HotelDetalle/'+id })
        }
        // viewHotel(id){
        //     alert(id)
        // }
    }
}
</script>
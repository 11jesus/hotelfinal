<template>
    <div class="mt-5 container">
        <div class="shadow p-4">
            <h2><img class="mb-3" src="@/assets/hotel.png" alt="" width="34px"> Crear nuevo Hotel</h2>
            <form action="#" @submit.prevent="editar">
                <div class="row  mt-3">
                    <div class="col">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input  type="text" v-model="hotels.name"  class="form-control" id="nombre">                    
                    </div>             
                    <div class="col">
                        <label for="nit" class="form-label">NIT</label>
                        <input v-model="hotels.nit" type="text" class="form-control" id="nit">                
                    </div>
                </div>
                <div class="row  mt-3">
                    <div class="col">
                        <label for="direccion" class="form-label">Dirección</label>
                        <input v-model="hotels.address" type="text" class="form-control" id="direccion">
                    </div> 
                    <div class="col">
                        <label for="nro_habitaciones" class="form-label">Nro de habitaciones</label>
                        <input v-model="hotels.num_rooms" type="text" class="form-control" id="nro_habitaciones">
                    </div>
                </div>
                <div class="row mt-3" >
                    <div class="col">
                        <label for="ciudad" class="form-label">Ciudad</label>
                        <select class="form-select" id="ciudad" v-model="hotels.city_id" >
                            <option v-for="ciudad in cities" :value="ciudad.id" :key="ciudad.id">{{ ciudad.name }}</option>
                        </select>
                    </div> 
                    <div class="col">
                        
                    </div>
                </div>
                <div class="col-md-12 gap-2 d-flex justify-content-end">
                    <button @click="eliminarHotel(hotels.id)" type="submit" class="btn btn-danger fw-bold"><i class="bi bi-archive-fill"></i> Eliminar Hotel</button>
                    <button type="submit" class="btn btn-primary fw-bold"><i class="bi bi-pen"></i> Actualizar Hotel</button>
                </div> 
            </form>      
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    beforeMount() {
    axios
        .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id)
        .then( response => (this.hotels = response.data.data))
    },
    data() {
        return {
            hotels: {}
        }
    },
    methods: {
        eliminarHotel(id) {
            if(window.confirm("Realmente desea eliminar este cliente?")) {
                fetch("http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/" + id, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json; charset=utf-8",
                    },
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);        
                    this.$router.push("/hoteles");
                }); 
            }                       
        },
        editar() {
            fetch('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.hotels.id, {
                method: "PUT",
                headers: {
                "content-type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(this.hotels),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                alert("Hotel actualizado satisfactoriamente!")
                this.$router.push("/hoteles");
            });
        },
    },
}
</script>
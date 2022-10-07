<template>
    <nav class="navbar navbar-expand-lg bg-body shadow-sm">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                <img style="width:120px" src="@/assets/logo.png" alt="logo">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active me-2 fw-bold">
                            Inicio
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/hoteles" class="nav-link active me-2 fw-bold">
                            Hoteles
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-2 fw-bold" aria-current="page" href="tipohabitaciones.html">
                            Tipo de habitaciones
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link me-2 fw-bold" aria-current="page" href="acomodaciones.html">
                            Acomodaciones
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
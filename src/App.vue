<template>
  <HeaderComponent />

  <NavbarComponent />

  <main>
    <router-view></router-view>
  </main>

  <FooterComponent />

</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: 'App',
    components: {
      HeaderComponent,
      NavbarComponent,
      FooterComponent
  }
}
</script>
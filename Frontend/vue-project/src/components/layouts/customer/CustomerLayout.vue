<script setup>
import axiosInstance from "@/lib/axios";
import { ref } from "vue";
import CustomerCard from "./CustomerCard.vue";
import { useAuthStore } from "@/stores/auth";
</script>

<template>
  <nav class="flex justify-between items-center pl-6 pr-6 h-16">
    <div>
      <RouterLink
        class="py-2 px-4 leading-normal customer-nav-link"
        to="/customer"
        >Logotipo</RouterLink
      >
    </div>
    <div>
      <RouterLink
        class="py-2 px-4 leading-normal customer-nav-link"
        to="/customer/offers"
        >Ofertas</RouterLink
      >

      <RouterLink
        class="py-2 px-4 leading-normal customer-nav-link"
        to="/customer/profile"
        >Perfil</RouterLink
      >
      <RouterLink to="/customer/carrito"> Carrito </RouterLink>
    </div>
  </nav>
  <main class="customer-cards-box">
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
.customer-cards-box {
  display: flex;
  flex-wrap: wrap;
  background-color: var(--color-bg);
  justify-content: center;
  align-items: center;
  row-gap: 0rem;
  column-gap: 0rem;
  padding: 16px;
  height: 100%;
}

nav {
  background-color: var(--color-darkest);
  border-bottom: 1px solid var(--color-border);
}

.customer-nav-link {
  color: var(--color-text);
  text-decoration: none;
}

.customer-nav-link:hover {
  color: var(--color-primary);
}
</style>

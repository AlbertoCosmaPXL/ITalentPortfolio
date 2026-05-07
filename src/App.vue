<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import { projects } from './data.js'

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <RouterLink to="/" class="logo">Alberto Cosma</RouterLink>
      <nav class="nav-links">
        <RouterLink to="/voorstelling">Voorstelling</RouterLink>
        <RouterLink
          v-for="p in projects"
          :key="p.id"
          :to="`/projecten/${p.id}`"
        >{{ p.title }}</RouterLink>
        <RouterLink to="/seminaries">Seminaries</RouterLink>
        <RouterLink to="/reflectie">Eindreflectie</RouterLink>
      </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <div class="container footer-inner footer-center">
      <div>© {{ new Date().getFullYear() }} Alberto Cosma I-Talent Portfolio</div>
    </div>
  </footer>
</template>
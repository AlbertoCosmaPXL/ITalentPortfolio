<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { projects } from '../data.js'

const route = useRoute()
const project = computed(() => projects.find(p => p.id === route.params.id))
const otherProjects = computed(() => projects.filter(p => p.id !== route.params.id))
</script>

<template>
  <div v-if="project">
    <section class="detail-hero">
      <div class="container">
        <RouterLink to="/" class="back-link">← Terug naar home</RouterLink>
        <div class="section-tag">{{ project.role }}</div>
        <h1>{{ project.title }}</h1>
        <p class="subtitle">{{ project.subtitle }}</p>
        <div class="tags">
          <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
        </div>
      </div>
    </section>

    <section class="detail-body">
      <div class="container detail-grid">
        <article class="detail-content">
          <p class="lead">{{ project.summary }}</p>
          <div v-for="s in project.sections" :key="s.h" class="detail-section">
            <h2>{{ s.h }}</h2>
            <p>{{ s.p }}</p>
          </div>
        </article>
        <aside class="detail-aside">
          <img :src="project.image" :alt="project.imageAlt" />
        </aside>
      </div>
    </section>

    <section class="other-projects">
      <div class="container">
        <div class="section-head"><div class="section-tag">Ook bekijken</div><h2>Andere activiteiten</h2></div>
        <div class="project-cards">
          <RouterLink
            v-for="p in otherProjects"
            :key="p.id"
            :to="`/projecten/${p.id}`"
            class="project-card"
          >
            <div class="project-card-img"><img :src="p.image" :alt="p.imageAlt" /></div>
            <div class="project-card-body">
              <div class="section-tag">{{ p.role }}</div>
              <h3>{{ p.title }}</h3>
              <div class="card-cta">Lees meer →</div>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="container" style="padding: 80px 0">
    <h1>Project niet gevonden</h1>
    <RouterLink to="/">← Terug naar home</RouterLink>
  </div>
</template>

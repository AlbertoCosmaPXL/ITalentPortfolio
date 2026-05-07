<script setup>
import { RouterLink } from 'vue-router'
import portrait from '../assets/profile.jpg'
import { projects, seminars } from '../data.js'
</script>

<template>
  <!-- Hero -->
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="eyebrow">Portfolio · I-Talent</div>
        <h1>Hallo, ik ben Alberto Cosma. 
          <br/><span class="gradient-text serif">I get the job done.</span></h1>
        <p class="lead">
          Student Toegepaste Informatica, afstudeerrichting applicatieontwikkeling.
          Ik vind het bijzonder om iets te creëren dat eerst niet bestond en het
          daarna tot leven te brengen, van low-code prototypes tot UI5 hackathon demo's.
        </p>
        <div class="cta-row">
          <RouterLink class="btn btn-primary" to="/voorstelling">Lees mijn voorstelling →</RouterLink>
          <RouterLink class="btn btn-ghost" to="/reflectie">Eindreflectie</RouterLink>
        </div>
      </div>
      <div class="portrait">
        <img :src="portrait" alt="Alberto Cosma" />
      </div>
    </div>
  </section>

  <!-- Projects intro -->
  <section>
    <div class="container">
      <div class="section-head center">
        <div class="section-tag">Geselecteerd werk</div>
        <h2>Drie activiteiten, drie lessen.</h2>
        <p>Klik op een project om er dieper in te duiken.</p>
      </div>

      <div class="project-cards">
        <RouterLink
          v-for="p in projects"
          :key="p.id"
          :to="`/projecten/${p.id}`"
          class="project-card"
        >
          <div class="project-card-img">
            <img :src="p.image" :alt="p.imageAlt" />
          </div>
          <div class="project-card-body">
            <div class="section-tag">{{ p.role }}</div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.summary }}</p>
            <div class="card-cta">Lees meer →</div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Quick links -->
  <section class="quick-links">
    <div class="container quick-grid">
      <RouterLink to="/voorstelling" class="quick-card">
        <div class="section-tag">Over mij</div>
        <h3>Voorstelling →</h3>
        <p>Wie ik ben, hoe ik werk en waarom ik voor IT koos.</p>
      </RouterLink>
      <RouterLink to="/seminaries" class="quick-card">
        <div class="section-tag">Continu leren</div>
        <h3>Seminaries →</h3>
        <p>{{ seminars.length }} seminaries en sessies, kort samengevat per stuk.</p>
      </RouterLink>
      <RouterLink to="/reflectie" class="quick-card">
        <div class="section-tag">Reflectie</div>
        <h3>Eindreflectie →</h3>
        <p>Wat ik leerde over mezelf, mijn aanpak en mijn volgende stappen.</p>
      </RouterLink>
    </div>
  </section>
</template>

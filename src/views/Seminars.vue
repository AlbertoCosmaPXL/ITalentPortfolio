<script setup>
import { seminars } from '../data.js'
</script>

<template>
  <section>
    <div class="container">
      <div class="section-head">
        <div class="section-tag">Continu leren</div>
        <h1>Seminaries & sessies</h1>
        <p>Een overzicht van alle seminaries en sessies die ik bijwoonde, met telkens een korte samenvatting van wat aan bod kwam.</p>
      </div>
      <div class="seminars-list">
        <article v-for="s in seminars" :key="s.title" class="seminar-row">
          <div class="seminar-date">{{ s.date }}</div>
          <div class="seminar-body">
            <h3>{{ s.title }}</h3>
            <p>{{ s.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

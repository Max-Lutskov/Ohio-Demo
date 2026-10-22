<script setup lang="ts">
import { site } from '~/site.config'
</script>

<template>
  <div class="stats">
    <div class="wrap grid">
      <div v-for="s in site.stats" :key="s.label" class="stat">
        <strong>{{ s.value }}</strong>
        <span>{{ s.label }}</span>
      </div>
    </div>
  </div>

  <section id="services" class="section">
    <div class="wrap">
      <div class="head">
        <div>
          <p class="eyebrow">What we haul</p>
          <h2>Capacity for every<br>kind of load</h2>
        </div>
        <p class="lead">
          Started in produce, grown into a full-service carrier. Whether it fills five trailers or
          a quarter of one, we match your freight to the right equipment and keep you posted the whole way.
        </p>
      </div>

      <ul class="cards">
        <li v-for="s in site.services" :key="s.title" class="card">
          <span class="icon"><AppIcon :name="s.icon" /></span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ul>

      <div class="freight">
        <span>Common freight:</span>
        <ul><li v-for="f in site.freight" :key="f">{{ f }}</li></ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.stats { background: var(--ink-2); color: #fff; }
.grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.stat { padding: 28px 20px; border-left: 1px solid var(--ink-3); display: grid; gap: 4px; }
.stat:first-child { border-left: 0; padding-left: 0; }
.stat strong { font: 700 2.6rem/1 var(--display); color: var(--brand); }
.stat span { font-size: .9rem; color: var(--muted-on-dark); }

.head { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: end; margin-bottom: 48px; }
.head .lead { margin: 0; }
.cards { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.card { padding: 28px; border: 1px solid var(--line); border-radius: var(--radius); background: #fff; transition: border-color .15s, box-shadow .15s, transform .15s; }
.card:hover { border-color: var(--brand); box-shadow: var(--shadow); transform: translateY(-2px); }
.icon { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 12px; background: var(--brand-soft); color: var(--brand-ink); margin-bottom: 20px; }
.icon svg { width: 26px; height: 26px; }
.card h3 { margin-bottom: 8px; }
.card p { color: var(--muted); font-size: .97rem; }

.freight { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 32px; }
.freight > span { font-weight: 600; }
.freight ul { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px; }
.freight li { padding: 6px 14px; border-radius: 999px; background: var(--paper-2); font-size: .9rem; }

@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  .stat:nth-child(3) { border-left: 0; padding-left: 0; }
  .stat:nth-child(n+3) { border-top: 1px solid var(--ink-3); }
  .head { grid-template-columns: 1fr; gap: 0; }
  .head .lead { margin-top: 16px; }
  .cards { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .cards { grid-template-columns: 1fr; }
  .stat strong { font-size: 2.1rem; }
}
</style>

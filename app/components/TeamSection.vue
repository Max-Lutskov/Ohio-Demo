<script setup lang="ts">
import { site } from '~/site.config'
</script>

<template>
  <section class="clients">
    <div class="wrap row">
      <span class="label">Trusted to haul for</span>
      <ul><li v-for="c in site.clients" :key="c">{{ c }}</li></ul>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="head">
        <p class="eyebrow">Family-owned since {{ site.founded }}</p>
        <h2>Built on old-school values</h2>
        <p class="lead">
          Founded by Mohamed Ali with deep roots in the produce business. Today OTC is employee-owned — the
          people answering your call have a stake in getting your load there right.
        </p>
      </div>

      <div class="grid">
        <ResImg name="team-1" alt="OTC team members working through paperwork at the Columbus office" sizes="(max-width: 900px) 100vw, 40vw" class="photo" />
        <ul class="quotes">
          <li v-for="t in site.team" :key="t.name">
            <blockquote>“{{ t.quote }}”</blockquote>
            <p class="who">
              <strong>{{ t.name }}</strong>
              {{ t.role }}<template v-if="'since' in t">, with OTC since {{ t.since }}</template>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clients { border-bottom: 1px solid var(--line); }
.row { display: flex; align-items: center; gap: 32px; padding-block: 28px; }
.label { flex: none; font-size: .8rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
.row ul { list-style: none; margin: 0; padding: 0; display: flex; flex-wrap: wrap; gap: 10px 32px; }
.row li { font: 700 1.35rem/1 var(--display); text-transform: uppercase; color: #8b909a; letter-spacing: .02em; }

.head { max-width: 760px; margin-bottom: 48px; }
.grid { display: grid; grid-template-columns: 5fr 7fr; gap: clamp(28px, 5vw, 64px); align-items: stretch; }
.photo { width: 100%; height: 100%; max-height: 620px; object-fit: cover; border-radius: var(--radius); }
.quotes { list-style: none; margin: 0; padding: 0; display: grid; gap: 20px; }
.quotes li { padding: 28px; border-radius: var(--radius); background: var(--paper-2); border-left: 4px solid var(--brand); }
blockquote { margin: 0; font-size: 1.08rem; line-height: 1.55; }
.who { margin-top: 14px; font-size: .9rem; color: var(--muted); }
.who strong { display: block; color: var(--text); font-size: 1rem; }

@media (max-width: 900px) {
  .row { flex-direction: column; align-items: flex-start; gap: 14px; }
  .grid { grid-template-columns: 1fr; }
  .photo { aspect-ratio: 16 / 10; }
}
</style>

<script setup lang="ts">
import { site } from '~/site.config'
</script>

<template>
  <section id="safety" class="section safety">
    <div class="wrap grid">
      <div class="media">
        <ResImg name="team-2" alt="OTC operations team reviewing load plans together" sizes="(max-width: 900px) 100vw, 50vw" />
        <div class="badge">
          <AppIcon name="shield" />
          <span><strong>Zero-tolerance</strong> safety protocol</span>
        </div>
      </div>

      <div>
        <p class="eyebrow">Safety first</p>
        <h2>Every driver<br>goes home safe.</h2>
        <p class="lead">
          That’s our number-one rule for company drivers and owner-operators alike. It’s also why your
          freight shows up on time — well-maintained trucks don’t break down on I-70.
        </p>

        <ol class="timeline">
          <li v-for="s in site.safety" :key="s.title">
            <strong>{{ s.title }}</strong>
            <span>{{ s.text }}</span>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<style scoped>
.safety { background: var(--paper-2); }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(32px, 6vw, 80px); align-items: center; }
.media { position: relative; }
.media img { width: 100%; aspect-ratio: 1; max-height: 560px; object-fit: cover; border-radius: var(--radius); }
.badge {
  position: absolute; left: 20px; bottom: 20px; right: 20px; max-width: 320px;
  display: flex; align-items: center; gap: 14px; padding: 16px 18px;
  background: #fff; border-radius: 12px; box-shadow: var(--shadow); font-size: .95rem;
}
.badge svg { width: 36px; height: 36px; flex: none; color: var(--brand); }
.badge strong { display: block; font: 700 1.3rem/1.1 var(--display); text-transform: uppercase; }

.timeline { list-style: none; margin: 36px 0 0; padding: 0; display: grid; gap: 0; }
.timeline li { position: relative; display: grid; grid-template-columns: 150px 1fr; gap: 16px; padding: 18px 0 18px 28px; border-top: 1px solid var(--line); }
.timeline li::before { content: ''; position: absolute; left: 0; top: 26px; width: 10px; height: 10px; border-radius: 50%; background: var(--brand); box-shadow: 0 0 0 4px var(--brand-soft); }
.timeline strong { font: 700 1.25rem/1.2 var(--display); text-transform: uppercase; }
.timeline span { color: var(--muted); }

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
  .media img { aspect-ratio: 4 / 3; }
}
@media (max-width: 520px) {
  .timeline li { grid-template-columns: 1fr; gap: 2px; }
}
</style>

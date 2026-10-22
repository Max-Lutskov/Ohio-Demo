<script setup lang="ts">
import { site } from '~/site.config'
const year = new Date().getFullYear()
</script>

<template>
  <section id="contact" class="section contact">
    <div class="wrap grid">
      <div>
        <p class="eyebrow">Visit or call</p>
        <h2>Columbus office</h2>
        <p class="lead">Stop by for a consultation, or just call — you’ll get a dispatcher, not a phone tree.</p>
      </div>
      <ul class="cards">
        <li>
          <AppIcon name="phone" />
          <span class="k">Phone</span>
          <a :href="site.phoneHref">{{ site.phone }}</a>
        </li>
        <li>
          <AppIcon name="mail" />
          <span class="k">Email</span>
          <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        </li>
        <li>
          <AppIcon name="pin" />
          <span class="k">Office</span>
          <a :href="site.mapsUrl" target="_blank" rel="noopener">{{ site.address.street }}<br>{{ site.address.city }}, {{ site.address.region }} {{ site.address.zip }}</a>
        </li>
        <li>
          <AppIcon name="clock" />
          <span class="k">Hours (ET)</span>
          <dl>
            <template v-for="h in site.hours" :key="h.days"><dt>{{ h.days }}</dt><dd>{{ h.time }}</dd></template>
          </dl>
        </li>
      </ul>
    </div>
  </section>

  <footer class="footer dark">
    <div class="wrap row">
      <BrandLogo light />
      <nav aria-label="Footer">
        <a href="#services">Services</a>
        <a href="#safety">Safety</a>
        <a href="#drivers">Careers</a>
        <a href="#quote">Get a quote</a>
        <a :href="site.social.facebook" target="_blank" rel="noopener">Facebook</a>
        <a :href="site.social.twitter" target="_blank" rel="noopener">X / Twitter</a>
      </nav>
    </div>
    <div class="wrap legal">© {{ year }} {{ site.name }}. All rights reserved.</div>
  </footer>
</template>

<style scoped>
.grid { display: grid; grid-template-columns: 4fr 8fr; gap: clamp(32px, 6vw, 80px); }
.cards { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.cards li { display: grid; align-content: start; gap: 6px; padding: 24px; border: 1px solid var(--line); border-radius: var(--radius); }
.cards svg { width: 26px; height: 26px; color: var(--brand); margin-bottom: 8px; }
.k { font-size: .78rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); }
.cards a { font-weight: 600; text-decoration: none; overflow-wrap: anywhere; }
.cards a:hover { color: var(--brand-ink); }
dl { display: grid; grid-template-columns: auto 1fr; gap: 4px 16px; margin: 0; font-size: .95rem; }
dt { font-weight: 600; }
dd { margin: 0; color: var(--muted); }

.footer { padding: 48px 0 calc(28px + env(safe-area-inset-bottom)); }
.row { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px; padding-bottom: 28px; border-bottom: 1px solid var(--ink-3); }
.row nav { display: flex; flex-wrap: wrap; gap: 8px 24px; }
.row nav a { text-decoration: none; color: var(--muted-on-dark); font-size: .95rem; }
.row nav a:hover { color: #fff; }
.legal { padding-top: 20px; font-size: .85rem; color: var(--muted-on-dark); }

@media (max-width: 900px) {
  .grid { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .cards { grid-template-columns: 1fr; }
  .footer { padding-bottom: 96px; }
}
</style>

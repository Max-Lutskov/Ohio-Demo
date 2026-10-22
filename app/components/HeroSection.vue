<script setup lang="ts">
import { site } from '~/site.config'
</script>

<template>
  <section id="top" class="hero dark">
    <ResImg name="truck" alt="Red OTC tractor, unit 629, parked in front of the trailer yard" eager class="bg" />
    <div class="wrap content">
      <p class="eyebrow">Columbus, Ohio · Since {{ site.founded }}</p>
      <h1>Dry van &amp; reefer freight,<br><span>moved like it’s our own.</span></h1>
      <p class="lead">
        Employee-owned carrier with about 200 trucks and trailers. Produce, frozen and dry
        freight across the country — one point of contact from pickup to delivery.
      </p>
      <div class="cta">
        <a href="#quote" class="btn btn-primary">Get a freight quote <AppIcon name="arrow" /></a>
        <a href="#drivers" class="btn btn-ghost"><AppIcon name="steering" />Drive for OTC</a>
      </div>
      <a :href="site.phoneHref" class="call">
        <AppIcon name="phone" />
        <span>Dispatch &amp; sales <strong>{{ site.phone }}</strong></span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero { position: relative; isolation: isolate; min-height: min(92vh, 860px); display: flex; align-items: flex-end; padding: 140px 0 72px; overflow: hidden; }
.bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 70% 50%; z-index: -2; }
.hero::after {
  content: ''; position: absolute; inset: 0; z-index: -1;
  background: linear-gradient(90deg, rgb(14 15 19 / .92) 0%, rgb(14 15 19 / .75) 45%, rgb(14 15 19 / .15) 100%),
              linear-gradient(0deg, rgb(14 15 19 / .7) 0%, transparent 40%);
}
.content { max-width: var(--wrap); }
h1 { font-size: clamp(2.9rem, 7.4vw, 5.6rem); font-weight: 700; text-transform: uppercase; max-width: 14ch; }
h1 span { color: var(--brand); }
.lead { color: #d5d8de; max-width: 52ch; margin-top: 22px; }
.cta { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
.call { display: inline-flex; align-items: center; gap: 12px; margin-top: 28px; color: #d5d8de; text-decoration: none; }
.call svg { width: 40px; height: 40px; padding: 10px; border-radius: 50%; background: rgb(255 255 255 / .1); color: var(--brand); }
.call strong { color: #fff; font-size: 1.1rem; margin-left: 4px; }

@media (max-width: 640px) {
  .hero { min-height: 0; padding: 120px 0 48px; }
  .hero::after { background: linear-gradient(0deg, rgb(14 15 19 / .95) 15%, rgb(14 15 19 / .55) 100%); }
  .bg { object-position: 80% 50%; }
  .cta .btn { flex: 1 1 100%; }
}
</style>

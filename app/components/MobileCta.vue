<script setup lang="ts">
import { site } from '~/site.config'
</script>

<template>
  <div class="mobile-cta">
    <a :href="site.phoneHref" class="btn btn-dark"><AppIcon name="phone" />Call</a>
    <a href="#quote" class="btn btn-primary">Get a quote</a>
  </div>
</template>

<style scoped>
.mobile-cta { display: none; }
@media (max-width: 560px) {
  .mobile-cta {
    position: fixed; z-index: 40; left: 0; right: 0; bottom: 0;
    display: grid; grid-template-columns: 1fr 2fr; gap: 10px;
    padding: 10px 14px calc(10px + env(safe-area-inset-bottom));
    background: rgb(255 255 255 / .96); backdrop-filter: blur(10px); box-shadow: 0 -1px 0 var(--line);
  }
}
</style>

<script setup lang="ts">
import { site } from '~/site.config'

const open = ref(false)
const scrolled = ref(false)
const links = [
  { href: '#services', label: 'Services' },
  { href: '#safety', label: 'Safety' },
  { href: '#drivers', label: 'Drive for OTC' },
  { href: '#contact', label: 'Contact' },
]

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 40 }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
</script>

<template>
  <header class="header" :class="{ scrolled, open }">
    <div class="wrap bar">
      <a href="#top" class="brand"><BrandLogo :light="!scrolled && !open" /></a>

      <nav class="nav" aria-label="Main">
        <a v-for="l in links" :key="l.href" :href="l.href">{{ l.label }}</a>
      </nav>

      <div class="actions">
        <a :href="site.phoneHref" class="phone"><AppIcon name="phone" />{{ site.phone }}</a>
        <a href="#quote" class="btn btn-primary quote">Get a quote</a>
        <button class="toggle" :aria-expanded="open" aria-controls="mobile-nav" @click="open = !open">
          <AppIcon :name="open ? 'close' : 'menu'" />
          <span class="sr-only">Menu</span>
        </button>
      </div>
    </div>

    <nav v-show="open" id="mobile-nav" class="mobile-nav" aria-label="Mobile">
      <a v-for="l in links" :key="l.href" :href="l.href" @click="open = false">{{ l.label }}</a>
      <a href="#quote" class="btn btn-primary" @click="open = false">Get a freight quote</a>
      <a :href="site.phoneHref" class="btn btn-dark"><AppIcon name="phone" />Call {{ site.phone }}</a>
    </nav>
  </header>
</template>

<style scoped>
.header { position: sticky; top: 0; z-index: 50; margin-bottom: -76px; transition: background .2s, box-shadow .2s; }
.header.scrolled, .header.open { background: rgb(255 255 255 / .96); backdrop-filter: blur(10px); box-shadow: 0 1px 0 var(--line); }
.bar { display: flex; align-items: center; gap: 24px; height: 76px; }
.brand { text-decoration: none; margin-right: auto; }
.nav { display: flex; gap: 28px; }
.nav a, .phone { text-decoration: none; font-weight: 500; font-size: .95rem; color: #fff; transition: color .15s; }
.scrolled .nav a, .scrolled .phone { color: var(--text); }
.nav a:hover { color: var(--brand); }
.actions { display: flex; align-items: center; gap: 18px; }
.phone { display: inline-flex; align-items: center; gap: 8px; font-weight: 600; }
.phone svg { width: 18px; height: 18px; color: var(--brand); }
.quote { min-height: 44px; padding: 0 18px; }
.toggle { display: none; width: 44px; height: 44px; border: 0; background: none; color: #fff; padding: 10px; cursor: pointer; }
.scrolled .toggle, .open .toggle { color: var(--text); }
.mobile-nav { display: grid; gap: 4px; padding: 8px 20px 24px; }
.mobile-nav a:not(.btn) { padding: 14px 0; font-weight: 600; font-size: 1.1rem; text-decoration: none; border-bottom: 1px solid var(--line); }
.mobile-nav .btn { margin-top: 12px; }

@media (max-width: 1020px) {
  .nav, .phone { display: none; }
}
@media (max-width: 640px) {
  .quote { display: none; }
  .toggle { display: block; }
}
</style>

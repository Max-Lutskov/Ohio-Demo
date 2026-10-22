<script setup lang="ts">
defineProps<{ light?: boolean }>()
</script>

<template>
  <span class="logo" :class="{ light }" aria-label="Ohio Transit Company">
    <span class="small" aria-hidden="true">Ohio<br>Transit<br>Company</span>
    <span class="mark" aria-hidden="true"><i />OTC</span>
  </span>
</template>

<style scoped>
.logo { display: inline-flex; align-items: center; gap: 8px; color: var(--ink); text-decoration: none; }
.logo.light { color: #fff; }
.small { font: 700 .5rem/1.05 var(--font); letter-spacing: .12em; text-transform: uppercase; color: var(--brand); }
.mark { position: relative; font: 800 italic 2rem/1 var(--display); letter-spacing: .02em; padding-left: 4px; }
.mark i { position: absolute; left: -2px; top: -2px; width: 14px; height: 9px; background: var(--brand); clip-path: polygon(0 0, 100% 0, 60% 100%); }
</style>

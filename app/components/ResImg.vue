<script setup lang="ts">
const props = withDefaults(defineProps<{ name: string; alt: string; sizes?: string; eager?: boolean; width?: number; height?: number }>(), {
  sizes: '100vw', width: 1920, height: 1280,
})
const srcset = [640, 1280, 1920].map(w => `${asset(`/img/${props.name}-${w}.webp`)} ${w}w`).join(', ')
</script>

<template>
  <img
    :src="asset(`/img/${name}-1280.webp`)" :srcset="srcset" :sizes="sizes" :alt="alt"
    :width="width" :height="height"
    :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : 'auto'" decoding="async"
  >
</template>

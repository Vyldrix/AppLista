<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  icon: Component | string
  title: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <div class="text-center py-12 bg-white rounded-2xl border-2 border-dashed border-border">
    <div class="flex justify-center items-center mb-4 text-text-secondary/80">
      <component
        :is="icon"
        v-if="typeof icon === 'object' || typeof icon === 'function'"
        :size="56"
        class="text-primary/70"
      />
      <div v-else class="text-6xl opacity-80">{{ icon }}</div>
    </div>
    <h3 class="text-2xl font-bold text-text mb-2">{{ title }}</h3>
    <p v-if="description" class="text-base font-medium text-text-secondary max-w-md mx-auto px-6">
      {{ description }}
    </p>
    <div v-if="$slots.action" class="mt-6">
      <slot name="action" />
    </div>
  </div>
</template>

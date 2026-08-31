<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  icon?: Component | string
  title?: string
  variant?: 'default' | 'danger' | 'icon'
  size?: 'sm' | 'md'
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
})

const variantClasses = {
  default: 'text-text-secondary hover:text-text hover:bg-background hover:scale-110',
  danger: 'text-error/80 hover:text-error hover:bg-error/10 hover:scale-110',
  icon: 'bg-white/20 border-0 text-white hover:bg-white/30 hover:scale-105 min-w-10 min-h-10 p-2',
}

const sizeClasses = {
  sm: 'p-1.5 text-sm',
  md: 'p-2 text-base',
}

const iconPixelSizes = {
  sm: 16,
  md: 20,
}
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center cursor-pointer rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2',
      variantClasses[variant],
      sizeClasses[size],
    ]"
    :title="title"
    :aria-label="title"
    type="button"
  >
    <slot>
      <component
        :is="icon"
        v-if="typeof icon === 'object' || typeof icon === 'function'"
        :size="iconPixelSizes[size]"
        class="shrink-0"
      />
      <span v-else-if="icon">{{ icon }}</span>
    </slot>
  </button>
</template>

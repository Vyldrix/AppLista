<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  value: number
  max?: number
  color?: 'primary' | 'success' | 'warning' | 'error'
  showLabel?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  max: 100,
  color: 'primary',
  showLabel: false,
})

const percentage = computed(() => {
  return Math.min(100, Math.max(0, (props.value / props.max) * 100))
})

const colorClasses = {
  primary: 'bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]',
  success: 'bg-gradient-to-r from-[#10b981] to-[#059669]',
  warning: 'bg-gradient-to-r from-[#f59e0b] to-[#d97706]',
  error: 'bg-gradient-to-r from-[#ef4444] to-[#dc2626]',
}
</script>

<template>
  <div
    class="w-full"
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    :aria-valuemax="max"
    :aria-label="`Progress: ${Math.round(percentage)}%`"
  >
    <div
      v-if="showLabel"
      class="flex justify-between items-center mb-2 text-sm font-medium text-text-secondary"
    >
      <slot name="label" />
      <span class="font-semibold text-text">{{ Math.round(percentage) }}%</span>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full overflow-hidden border border-border/50">
      <div
        :class="['h-full rounded-full transition-all duration-500', colorClasses[color]]"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
  </div>
</template>

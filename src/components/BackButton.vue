<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'
import type { Component } from 'vue'

interface Props {
  to?: string
  icon?: Component | string
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: () => ArrowLeft,
  label: 'Back',
})

const router = useRouter()

const handleClick = () => {
  if (props.to && router) {
    router.push(props.to)
  } else if (router) {
    router.back()
  }
}
</script>

<template>
  <div class="mb-6">
    <button
      class="inline-flex items-center gap-2 bg-transparent border-0 text-text-secondary text-base cursor-pointer px-4 py-2 rounded-xl transition-all duration-200 font-semibold hover:bg-background hover:text-(--color-primary) hover:-translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary) focus-visible:ring-offset-2"
      @click="handleClick"
      title="Back"
      type="button"
    >
      <component
        :is="icon"
        v-if="typeof icon === 'object' || typeof icon === 'function'"
        :size="20"
        class="shrink-0"
      />
      <span v-else-if="icon" class="text-xl">{{ icon }}</span>
      <span>{{ label }}</span>
    </button>
  </div>
</template>

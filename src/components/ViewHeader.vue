<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex justify-between items-start mb-8 gap-4 max-md:flex-col max-md:items-stretch">
    <div>
      <h2 class="text-3xl md:text-4xl font-extrabold text-text tracking-tight mb-1.5">
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-base text-text-secondary font-medium">
        {{ subtitle }}
      </p>
    </div>
    <div class="max-md:w-full">
      <slot name="action" />
    </div>
  </div>
</template>

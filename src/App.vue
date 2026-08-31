<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { onMounted } from 'vue'
import { usePreferencesStore } from '@/stores/preferences'
import { useCategoriesStore } from '@/stores/categories'
import { ShoppingBag, Sparkles } from 'lucide-vue-next'

// Load user preferences and custom categories on app mount
const preferencesStore = usePreferencesStore()
const categoriesStore = useCategoriesStore()
onMounted(async () => {
  await Promise.all([preferencesStore.loadPreferences(), categoriesStore.loadCustomCategories()])
})
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen bg-background">
    <header
      class="sticky top-0 z-50 backdrop-blur-md bg-linear-to-r from-emerald-600 via-emerald-600 to-teal-700 shadow-md border-b border-emerald-500/30"
    >
      <div class="max-w-7xl mx-auto px-4 md:px-6 py-3.5 flex items-center justify-between">
        <RouterLink
          to="/"
          class="flex items-center gap-3 group transition-transform hover:scale-[1.02]"
        >
          <div
            class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-inner text-white transition-all group-hover:bg-white/30"
          >
            <ShoppingBag :size="22" class="text-white" />
          </div>
          <div>
            <h1
              class="text-xl md:text-2xl font-extrabold text-white tracking-tight leading-none [text-shadow:0_1px_3px_rgba(0,0,0,0.15)] flex items-center gap-1.5"
            >
              Smart Shopper
              <Sparkles :size="16" class="text-emerald-200 inline" />
            </h1>
            <p class="text-xs text-emerald-100 font-medium tracking-wide">
              Lista Inteligente & Offline
            </p>
          </div>
        </RouterLink>
      </div>
    </header>
    <main class="flex-1 max-w-7xl w-full mx-auto px-4 md:px-6 py-8">
      <RouterView />
    </main>
  </div>
</template>

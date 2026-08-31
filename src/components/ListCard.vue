<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ShoppingList } from '@/db'
import { DEFAULT_LIST_COLOR } from '@/utils/colors'
import { Copy, Archive, ArchiveRestore, Trash2, Clock, CheckCheck, ListTodo } from 'lucide-vue-next'
import IconButton from './IconButton.vue'

interface Props {
  list: ShoppingList
  totalItems: number
  completedItems: number
  variant?: 'active' | 'archived'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'active',
})

const emit = defineEmits<{
  click: []
  duplicate: []
  archive: []
  unarchive: []
  delete: []
}>()

const isHovering = ref(false)

const progressPercentage = computed(() => {
  if (props.totalItems === 0) return 0
  return Math.round((props.completedItems / props.totalItems) * 100)
})

const listColor = computed(() => props.list.color || DEFAULT_LIST_COLOR)

const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString()
}
</script>

<template>
  <div
    class="group bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all duration-200 flex flex-col gap-4 relative overflow-hidden shadow-sm"
    :class="{
      'hover:-translate-y-1 hover:shadow-lg': variant === 'active',
      'opacity-70 hover:opacity-100 hover:shadow-md': variant === 'archived',
    }"
    :style="{
      borderColor: variant === 'active' && isHovering ? listColor : 'var(--color-border)',
    }"
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    @click="emit('click')"
  >
    <!-- Card Header -->
    <div class="flex justify-between items-start gap-2">
      <h3 class="text-xl font-semibold text-text flex-1 wrap-break-word">
        {{ list.name }}
      </h3>
      <div
        class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity max-md:opacity-100"
      >
        <IconButton
          v-if="variant === 'active'"
          :icon="Copy"
          title="Duplicate"
          @click.stop="emit('duplicate')"
        />
        <IconButton
          v-if="variant === 'active'"
          :icon="Archive"
          title="Archive"
          @click.stop="emit('archive')"
        />
        <IconButton
          v-if="variant === 'archived'"
          :icon="ArchiveRestore"
          title="Unarchive"
          @click.stop="emit('unarchive')"
        />
        <IconButton :icon="Trash2" title="Delete" variant="danger" @click.stop="emit('delete')" />
      </div>
    </div>

    <!-- Card Stats (Active only) -->
    <div
      v-if="variant === 'active'"
      class="flex items-center gap-4 p-4 bg-background border border-border/50 rounded-xl"
    >
      <div class="flex items-center gap-3 flex-1">
        <CheckCheck :size="24" class="text-primary shrink-0" />
        <div class="flex flex-col gap-0.5">
          <span class="text-xl font-bold text-text leading-none">
            {{ completedItems }}
          </span>
          <span class="text-xs font-semibold text-text-secondary uppercase tracking-wider">
            completed
          </span>
        </div>
      </div>
      <div class="w-px h-8 bg-border"></div>
      <div class="flex items-center gap-3 flex-1">
        <ListTodo :size="24" class="text-text-secondary shrink-0" />
        <div class="flex flex-col gap-0.5">
          <span class="text-xl font-bold text-text leading-none">
            {{ totalItems }}
          </span>
          <span class="text-xs font-semibold text-text-secondary uppercase tracking-wider">
            total items
          </span>
        </div>
      </div>
    </div>

    <!-- Card Footer -->
    <div class="flex items-center text-sm">
      <span class="inline-flex items-center font-medium text-text-secondary">
        <Clock :size="16" class="mr-1.5 shrink-0" />
        {{ variant === 'active' ? 'Updated' : 'Archived' }} {{ formatDate(list.updatedAt) }}
      </span>
    </div>

    <!-- Progress Bar (Active only) -->
    <div
      v-if="variant === 'active'"
      class="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200 rounded-b-2xl overflow-hidden"
    >
      <div
        class="h-full transition-all duration-300"
        :style="{
          width: `${progressPercentage}%`,
          backgroundColor: listColor,
        }"
      ></div>
    </div>
  </div>
</template>

import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { Trash2, Plus, ShoppingCart } from 'lucide-vue-next'
import IconButton from '@/components/IconButton.vue'
import BaseButton from '@/components/BaseButton.vue'
import BackButton from '@/components/BackButton.vue'
import EmptyState from '@/components/EmptyState.vue'
import ListCard from '@/components/ListCard.vue'

describe('Modern Icon System (lucide-vue-next)', () => {
  describe('IconButton Component with Lucide Icons', () => {
    it('should render an SVG element when a Lucide icon component is passed', () => {
      const wrapper = mount(IconButton, {
        props: {
          icon: Trash2,
          title: 'Delete',
        },
      })

      const svg = wrapper.find('svg')
      expect(svg.exists()).toBe(true)
      expect(wrapper.attributes('title')).toBe('Delete')
    })

    it('should render custom SVG slots when provided', () => {
      const wrapper = mount(IconButton, {
        slots: {
          default: '<svg data-test="custom-svg"></svg>',
        },
      })

      expect(wrapper.find('[data-test="custom-svg"]').exists()).toBe(true)
    })

    it('should maintain backward compatibility when a string is passed', () => {
      const wrapper = mount(IconButton, {
        props: {
          icon: '🗑️',
        },
      })

      expect(wrapper.text()).toContain('🗑️')
    })
  })

  describe('BaseButton Component with Lucide Icons', () => {
    it('should render a Lucide SVG icon alongside button text', () => {
      const wrapper = mount(BaseButton, {
        props: {
          icon: Plus,
        },
        slots: {
          default: 'New List',
        },
      })

      const svg = wrapper.find('svg')
      expect(svg.exists()).toBe(true)
      expect(wrapper.text()).toContain('New List')
    })
  })

  describe('BackButton Component with Lucide Vector Icon', () => {
    it('should render ArrowLeft SVG icon by default', () => {
      const wrapper = mount(BackButton, {
        props: {
          label: 'Back to Lists',
        },
      })

      const svg = wrapper.find('svg')
      expect(svg.exists()).toBe(true)
      expect(wrapper.text()).toContain('Back to Lists')
    })
  })

  describe('EmptyState Component with Lucide Icons', () => {
    it('should render Lucide SVG icon component for empty state illustration', () => {
      const wrapper = mount(EmptyState, {
        props: {
          icon: ShoppingCart,
          title: 'No lists yet',
          description: 'Create your first shopping list to get started!',
        },
      })

      const svg = wrapper.find('svg')
      expect(svg.exists()).toBe(true)
      expect(wrapper.text()).toContain('No lists yet')
    })
  })

  describe('ListCard Action Icons', () => {
    it('should render SVG action icons for duplicate, archive and delete', () => {
      const mockList = {
        id: 'list-1',
        name: 'Weekly Groceries',
        color: '#10b981',
        createdAt: Date.now(),
        updatedAt: Date.now(),
        archived: false,
      }

      const wrapper = mount(ListCard, {
        props: {
          list: mockList,
          totalItems: 5,
          completedItems: 2,
          variant: 'active',
        },
      })

      // All action buttons should render SVG icons from Lucide
      const svgs = wrapper.findAll('svg')
      expect(svgs.length).toBeGreaterThanOrEqual(3)
    })
  })
})

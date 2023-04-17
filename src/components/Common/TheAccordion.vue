<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div class="flex cursor-pointer flex-wrap items-center justify-between" @click="open">
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="arrowIcon" />
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'TheAccordion',
  props: {
    header: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const open = () => {
      isOpen.value = !isOpen.value
    }
    const arrowIcon = computed(() => (isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down']))
    return { open, isOpen, arrowIcon }
  }

  // Updating component from Options API in Vue2 to Component API in Vue3
  // data() {
  //   return {
  //     isOpen: false
  //   }
  // },
  // computed: {
  //   arrowIcon() {
  //     return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down']
  //   }
  // },
  // methods: {
  //   open() {
  //     this.isOpen = !this.isOpen
  //   }
  // }
}
</script>

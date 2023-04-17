<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<!-- updated to lastest version of composition API in Vue3.2 -->
<script setup>
import { computed } from 'vue'
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'primary'
  }
})
const buttonClass = computed(() => {
  return {
    [props.type]: true
  }
})
</script>

<style scoped>
button {
  @apply py-3 px-5 font-medium;
}

.primary {
  @apply rounded bg-brand-blue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}

.btn-right {
  @apply pr-0 text-brand-gray-3 hover:text-brand-blue-1;
}
</style>

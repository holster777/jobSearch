<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'primary'
    }
  },
  setup(props) {
    const buttonClass = computed(() => {
      return {
        [props.type]: true
      }
    })
    return { buttonClass }
  }
  // Updated from options API in Vue2 to Components API in Vue3
  // computed: {
  //   buttonClass() {
  //     return { [this.type]: true }
  //   }
  // }
}
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

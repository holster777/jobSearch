<template>
  <form
    @submit.prevent="searchForJobs"
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4" />
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute left-0 -top-10 ml-3">Role</label>
        <TextInput v-model="role" placeholder="Software Engineer" />
      </div>
      <span
        class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
        >in</span
      >
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label class="absolute left-0 -top-10 pl-3">Where?</label>
        <TextInput v-model="location" placeholder="Bali" />
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from '@/components/Common/ActionButton.vue'
import TextInput from '@/components/Common/TextInput.vue'
export default {
  name: 'JobSearchForm',
  components: {
    ActionButton,
    TextInput
  },
  data() {
    return {
      role: '',
      location: ''
    }
  },
  methods: {
    searchForJobs() {
      this.$router.push({
        name: 'JobResults',
        query: {
          role: this.role,
          location: this.location
        }
      })
    }
  }
}
</script>

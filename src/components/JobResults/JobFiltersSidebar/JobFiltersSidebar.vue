<template>
  <div class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white px-8 py-4">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear Filters" type="btn-right" />
        </div>
      </div>
      <JobFiltersSidebarOrganisations />
      <JobFiltersSidebarJobTypes />
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/Common/ActionButton.vue'
import JobFiltersSidebarOrganisations from './JobFiltersSidebarOrganisations.vue'
import JobFiltersSidebarJobTypes from './JobFiltersSidebarJobTypes.vue'

export default {
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    JobFiltersSidebarOrganisations,
    JobFiltersSidebarJobTypes
  }
}
</script>

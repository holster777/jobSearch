<template>
  <TheAccordion header="Organisations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="organization in UNIQUE_ORGANIZATIONS" :key="organization" class="h-8 w-1/2">
            <input
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </TheAccordion>
</template>

<script>
import TheAccordion from '@/components/Common/TheAccordion.vue'
import { mapActions, mapState } from 'pinia'

import { useJobsStore, UNIQUE_ORGANIZATIONS } from '@/stores/jobs'
import { useUserStore, ADD_SELECTED_ORGANIZATIONS } from '@/stores/user'

export default {
  name: 'JobFiltersSidebarOrganisations',
  components: {
    TheAccordion
  },
  data() {
    return {
      selectedOrganizations: [],
      selectedJobTypes: []
    }
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS])
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
    selectOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations)
      this.$router.push({ name: 'JobResults' })
    }
  }
}
</script>

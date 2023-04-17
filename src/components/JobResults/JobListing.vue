<template>
  <li class="mb-7">
    <router-link
      class="mx-auto block rounded border border-solid border-brand-gray-2 bg-white py-5 hover:shadow-gray"
      :to="jobPageLink"
    >
      <div class="mx-8 border-b border-solid border-brand-gray-2">
        <h2 class="mb-2 text-2xl">{{ job.title }}</h2>
        <div class="flex flex-row gap-4 align-middle">
          <div>
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <li v-for="location in job.locations" :key="location" class="mr-4 inline-block">
                <span>{{ location }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1">Qualifications</h3>
          <div>
            <ul class="list-disc pl-8">
              <li v-for="qualification in job.minimumQualifications" :key="qualification">
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'JobListing',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    job: {
      type: Object,
      require: true
    }
  },
  computed: {
    jobPageLink() {
      return `/jobs/results/${this.job.id}`
    }
  }
}
</script>

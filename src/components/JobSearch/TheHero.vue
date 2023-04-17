<template>
  <main class="flex h-screen flex-col">
    <section class="py-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <TheHeadline />
          <JobSearchForm />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-end">
          <HeroImage />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
    <section class="flex flex-col py-16 pl-28">
      <p class="pb-2 text-sm font-semibold uppercase tracking-wider text-brand-gray-3">Spotlight</p>
      <SpotLight class="flex flex-row gap-6">
        <template #default="{ img, title, description }">
          <router-link
            to="/jobs/results"
            class="flex h-96 w-72 flex-col rounded-lg border bg-brand-gray-2"
          >
            <img :src="img" class="rounded-t-lg object-contain" />
            <div class="mt-3 h-48 px-6 py-4">
              <h3 class="text-lg font-medium">
                {{ title }}
              </h3>
              <p class="mt-3 text-sm">{{ description }}</p>
            </div>
            <router-link to="/jobs/results" class="px-6 pb-4 text-sm text-brand-blue-1"
              >See Jobs</router-link
            >
          </router-link>
        </template>
      </SpotLight>
    </section>
  </main>
</template>

<script>
import TheHeadline from '@/components/JobSearch/TheHeadline.vue'
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'
import HeroImage from '@/components/JobSearch/HeroImage.vue'
import SpotLight from '@/components/JobSearch/SpotLight.vue'
export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    JobSearchForm,
    HeroImage,
    SpotLight
  }
}
</script>

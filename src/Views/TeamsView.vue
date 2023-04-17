<template>
  <HeaderContainer>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template #subtitle>
      <p class="my-4 mx-auto w-1/3 text-base font-light">
        Check out the different teams that you could work remotely for from anywhere around the
        world
      </p>
    </template>
  </HeaderContainer>
</template>

<script>
import HeaderContainer from '@/components/common/HeaderContainer.vue'
export default {
  name: 'TeamsView',
  components: {
    HeaderContainer
  }
}
</script>

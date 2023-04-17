<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-cover" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    }
  }
}
</script>

<template>
  <router-link class="a" :to="`/comments/${commentId}`" target="_blank">{{ commentText }}</router-link>
</template>

<script>
export default {
  name: 'custom-link',
  props: {
    commentId: {
      type: Number,
      required: true
    },
    commentText: {
      type: String,
      required: true
    }
  }
}
</script>


<style scoped>
.a{
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}
</style>
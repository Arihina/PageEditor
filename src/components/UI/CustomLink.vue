<template>
    <a :href="`/comment/${commentId}`">{{ commentText }}</a>
  </template>
  
  <script>
  export default {
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
a {
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}
</style>
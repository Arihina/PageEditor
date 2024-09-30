<template>
  <div>
    <h2>Comment {{ comment.id }}</h2>
    <p>Username: {{ comment.username }}</p>
    <p>Text: {{ comment.text }}</p>
    <p>Quote: {{ comment.quote }}</p>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>

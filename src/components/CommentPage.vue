<template>
  <div>
    <h2>Comment {{ comment.id }}</h2>
    <p v-html="comment.text"></p>
    <p v-if="comment.selectedText">
      <a :href="`#comment-${comment.id}`">{{ comment.selectedText }}</a>
    </p>
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

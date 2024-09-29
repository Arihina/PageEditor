<template>
  <div id="app">
    <book-page></book-page>
    <comment-tools></comment-tools>
  </div>
</template>

<script>

import BookPage from '@/components/BookPage.vue';
import CommentTools from '@/components/CommentTools.vue';

export default {
  name: 'app',
  components: {
    BookPage,
    CommentTools
  }
};
</script>
<style scoped>
</style>
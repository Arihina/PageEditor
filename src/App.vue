<template>
  <div id="app">
    <book-page></book-page>
    <comments-bar></comments-bar>
  </div>
</template>

<script>

import BookPage from '@/components/BookPage.vue';
import CommentsBar from '@/components/CommentsBar.vue';

export default {
  name: 'app',
  components: {
    BookPage,
    CommentsBar
  }
};
</script>
<style scoped>
</style>
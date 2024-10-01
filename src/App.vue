<template>
  <div id="app">
    <book-page></book-page>
    <comments-bar></comments-bar>
    <discussion-block></discussion-block>
  </div>
</template>

<script>

import BookPage from '@/components/BookPage.vue';
import CommentsBar from '@/components/CommentsBar.vue';
import DiscussionBlock from '@/components/DiscussionBlock.vue';

export default {
  name: 'app',
  components: {
    BookPage,
    CommentsBar,
    DiscussionBlock
  }
};
</script>
<style scoped>
</style>
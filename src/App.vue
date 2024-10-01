<template>
  <div id="app">
    <book-page></book-page>
    <comments-bar @update-discussion="updateDiscussion($event)"></comments-bar>
    <discussion-block :comment="discussionComment" :quote="quote"></discussion-block>
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
  },
  data() {
    return {
      discussionComment: null,
      quote: null
    }
  },
  methods: {
    updateDiscussion(event) {
      this.discussionComment = event.comment;
      this.quote = event.quote;
    }
  }
}
</script>

<style scoped></style>
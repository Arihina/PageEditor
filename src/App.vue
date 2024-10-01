<template>
  <div id="app">
    <div class="horizontal-list-item">
      <book-page></book-page>
      <discussion-block class="comment-item" :comment="discussionComment" :quote="quote"></discussion-block>
    </div>

    <comments-bar @update-discussion="updateDiscussion($event)"></comments-bar>

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

<style scoped>
.horizontal-list-item {
  display: flex;
  flex-direction: row;
}

.comment-item {
  margin-top: 130px;
}
</style>
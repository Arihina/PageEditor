<template>
    <h2>Discussion List</h2>
    <div class="tool-container">
        <ul>
            <li class="horizontal-list-item" v-for="comment in this.$store.getters['comments/getComments']"
                :key="comment.id">
                <custom-link :comment-id="comment.id" :comment-text="comment.quote" />
            </li>
        </ul>
    </div>
</template>


<script>
import CommentForm from "@/components/CommentForm.vue";

export default {
    components: {
        CommentForm
    },
    data() {
        return {
            commentPages: []
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>


<style scoped>
.tool-container {
    width: auto;
    height: 80%;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-left: 20px;
    padding: 50px;
    margin: 10px;
}

.horizontal-list-item {
    display: inline-block;
    margin: 15px;
}

h2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
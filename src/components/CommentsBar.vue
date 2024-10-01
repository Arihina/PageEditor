<template>
    <h2>Discussion List</h2>
    <div class="tool-container">
        <ul>
            <li class="horizontal-list-item" v-for="[quote, comment] in this.$store.getters['comments/getComments']"
                :key="comment.id">
                <custom-button :comment-id="comment.id" @click="$emit('update-discussion', {comment: comment, quote: quote})">
                    {{ quote.length > 30 ? quote.slice(0, 20) + '...' : quote }}
                </custom-button>
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
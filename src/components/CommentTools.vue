<template>
    <div class="tool-container">
        <custom-button @click="showDialog">H</custom-button>
        <comment-form @add="addComment"/>
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
            dialogVisible: false,
            comments: []
        }
    },
    methods: {
        showDialog() {
            this.dialogVisible = true;
        },
        addComment(comment) {
            this.comments.push(comment);
            this.dialogVisible = false;
            console.log(this.comments);
        }
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
</style>
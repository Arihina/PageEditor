<template>
    <div class="tool-container">
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
</style>
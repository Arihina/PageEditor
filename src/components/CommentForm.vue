<template>
    <form @submit.prevent>
        <h3>New comment</h3>
        <custom-input v-model="comment.username" placeholder="Name" />
        <custom-input v-model="comment.text" placeholder="Text" />
        <custom-button style="align-self: flex-end; margin-top: 10px;" @click="addComment">Add</custom-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            comment: {
                username: '',
                text: ''
            }
        }
    },
    methods: {
        addComment() {
            this.comment.id = Date.now();
            this.$emit('add', this.comment)
            this.comment = {
                username: '',
                text: ''
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>
<template>
    <form @submit.prevent>
        <h3>New comment</h3>
        <custom-input v-model="comment.username" placeholder="Name" />
        <custom-input v-model="comment.text" placeholder="Text" />
        <!--<editor ref="editor"></editor>-->
        <custom-button style="align-self: flex-end; margin-top: 10px;" @click="addComment">Add</custom-button>
    </form>
</template>

<script>
import Editor from "@/components/Editor.vue";
import { mapActions } from 'vuex';

export default {
    components:
    {
        Editor
    },
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
            //this.comment.text = this.$refs.editor.editorData
            this.$emit('add', this.comment)
            this.addCommentToStore(this.comment);
            this.comment = {
                username: '',
                text: ''
            }
        },
        ...mapActions('comments', ['addCommentToStore'])
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>
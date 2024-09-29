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
    props: {
        selectedText: {
            type: String,
            default: ''
        }
    },
    components:
    {
        Editor
    },
    data() {
        return {
            comment: {
                username: '',
                text: '',
                quote: ''
            }
        }
    },
    mounted() {
        this.comment.quote = this.selectedText;
    },
    methods: {
        addComment() {
            this.comment.id = Date.now();
            //this.comment.text = this.$refs.editor.editorData
            this.addCommentToStore(this.comment);
            this.comment = {
                username: '',
                text: '',
                quote: ''
            }
            console.log(this.$store.getters['comments/getComments']);
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
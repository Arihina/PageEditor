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
                text: ''
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

            const comment = {
                id: this.comment.id,
                username: this.comment.username,
                text: this.comment.text
            }

            this.addCommentToStore({ comment, quote: this.selectedText });

            this.comment = {
                username: '',
                text: ''
            }

            console.log(this.$store.getters['comments/getComments']);

            const randomColor = this.getRandomColor();
            this.$emit('update-quote-color', randomColor);
        },
        getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
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
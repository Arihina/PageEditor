<template>
    <div class="chapter-container">
        <div class="chapter">
            <h1>{{ chapter.title }}</h1>
            <div class="content-container">
                <div v-if="chapter.text" v-for="(paragraph, index) in chapter.text.split('\n\n')" :key="index">
                    <p>{{ paragraph }}</p>
                </div>
                <div class="tool-container">
                    <custom-button @click="showDialog">+</custom-button>
                </div>
            </div>
        </div>
    </div>
    <custom-dialog v-model:show="dialogVisible">
        <comment-form @add="addComment" />
    </custom-dialog>
</template>


<script>
import bookJson from '@/assets/book.json';
import CustomButton from './UI/CustomButton.vue';
import CommentForm from "@/components/CommentForm.vue";

export default {
    components: {
        CommentForm
    },
    data() {
        return {
            dialogVisible: false,
            comments: [],
            chapter: { title: '', text: '' }
        }
    },
    mounted() {
        this.loadChapter()
    },
    methods: {
        loadChapter() {
            this.chapter = bookJson.chapters[0]
        },
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
.chapter-container {
    display: flex;
    width: 100%;
    margin: 0 auto;
}

.chapter {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px;
}

.chapter h1 {
    margin-bottom: 20px;
}

.content-container {
    display: flex;
    align-items: center;
}

.chapter p {
    background-color: #d4e8d8;
    padding: 20px;
    border: 1px solid teal;
    border-radius: 10px;
    font-size: 20px;
}

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

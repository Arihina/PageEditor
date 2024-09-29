<template>
    <div class="chapter-container">
        <div class="chapter">
            <h1>{{ chapter.title }}</h1>
            <div class="content-container">
                <div v-if="chapter.text" v-for="(paragraph, index) in chapter.text.split('\n\n')" :key="index">
                    <p @contextmenu.prevent="openDialog">{{ paragraph }}</p>
                </div>
            </div>
        </div>

        <custom-dialog :show="showDialog" @update:show="showDialog = $event">
            <comment-form />
        </custom-dialog>

    </div>
</template>


<script>
import bookJson from '@/assets/book.json';
import CommentForm from './CommentForm.vue';

export default {
    components: {
        CommentForm
    },
    data() {
        return {
            chapter: { title: '', text: '' },
            showDialog: false
        }
    },
    mounted() {
        this.loadChapter()
    },
    methods: {
        loadChapter() {
            this.chapter = bookJson.chapters[0]
        },
        openDialog() {
            this.showDialog = true;
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
</style>

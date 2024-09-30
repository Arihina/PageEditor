<template>
    <div class="chapter-container">
        <div class="chapter">
            <h1>{{ chapter.title }}</h1>
            <div class="content-container">
                <div v-if="chapter.text" v-for="(paragraph, index) in chapter.text.split('\r\n')" :key="index">
                    <p @mouseup="selectText($event)" @contextmenu.prevent="openDialog">{{ paragraph }}</p>
                </div>
            </div>
        </div>

        <custom-dialog :show="showDialog" @update:show="showDialog = $event" @clickoutside="showDialog = false">
            <comment-form :selected-text="selectedText" @update-quote-color="updateQuoteColor($event)" />
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
            showDialog: false,
            selectedText: '',
            quoteColor: ''
        }
    },
    mounted() {
        this.loadChapter()
    },
    methods: {
        selectText(event) {
            this.selectedText = window.getSelection().toString();
        },
        openDialog() {
            this.showDialog = true;
        },
        loadChapter() {
            this.chapter = bookJson.chapters[0]
        },
        updateQuoteColor(color) {
            this.showDialog = false;
            this.quoteColor = color;

            const paragraphs = this.$el.querySelectorAll('p');
            paragraphs.forEach((paragraph) => {
                const text = paragraph.textContent;
                const startIndex = text.indexOf(this.selectedText);
                if (startIndex !== -1) {
                    const endIndex = startIndex + this.selectedText.length;
                    if (endIndex <= text.length) {
                        const node = paragraph.childNodes[0];
                        if (node && node.length > 0) {
                            const range = document.createRange();
                            range.setStart(node, startIndex);
                            range.setEnd(node, endIndex);

                            const span = document.createElement('span');
                            span.style.backgroundColor = color;
                            span.textContent = this.selectedText;

                            range.surroundContents(span);
                        }
                    }
                }
            });
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
    margin: 30px;
}

.chapter h1 {
    margin-bottom: 20px;
}

.content-container {
    display: flex;
    display: inline-block;
    align-items: center;
}

.chapter p {
    background-color: #d4e8d8;
    padding: 10px;
    border: 1px solid teal;
    border-radius: 10px;
    font-size: 20px;
}
</style>

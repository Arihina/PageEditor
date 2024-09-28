<template>
    <div class="chapter-container">
        <div class="chapter">
            <h1>{{ chapter.title }}</h1>
            <div class="content-container">
                <p>{{ chapter.text }}</p>
                <div class="tool-container"></div>
            </div>
        </div>
    </div>
</template>

<script>
import bookJson from '@/assets/book.json';

export default {
    data() {
        return {
            chapter: {}
        }
    },
    mounted() {
        this.loadChapter()
    },
    methods: {
        loadChapter() {
            this.chapter = bookJson.chapters[0]
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
  flex: 6;
  font-size: 20px;
}

.tool-container {
  width: auto;
  height: 100%;
  background-color: #f0f0f0;
  border: 1px solid #ccc; 
  border-radius: 10px; 
  margin-left: 20px;
  flex: 1;
}
</style>

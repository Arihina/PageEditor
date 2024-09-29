<template>
    <div class="ckeditor">
        <ckeditor v-model="editorData" :editor="editor" :config="editorConfig"/>
    </div>
</template>

<script>
import { ClassicEditor, Bold, Essentials, Italic, Mention, Paragraph, Undo } from 'ckeditor5';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';

export default {
    data() {
        return {
            editor: ClassicEditor,
            editorData: '<p>Comment</p>',
            editorConfig: {
                plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
                toolbar: ['undo', 'redo', '|', 'bold', 'italic'],
            }
        };
    },
}
</script>

<style scoped>
.ckeditor {
    min-height: 200px;
}
</style>
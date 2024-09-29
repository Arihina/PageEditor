import { createApp } from 'vue';
import App from './App.vue';
import components from '@/components/UI';
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app.use(CkeditorPlugin).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js'
import components from '@/components/UI';
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});

app.use(store).use(CkeditorPlugin).mount('#app');

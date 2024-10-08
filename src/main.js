import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
import router from './router/router';
import components from '@/components/UI';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});

app.use(router).use(store).mount('#app');

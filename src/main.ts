import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import router from './router';
import Vue3ColorPicker from 'vue3-colorpicker';
import { MotionPlugin } from '@vueuse/motion';
import 'vue3-colorpicker/style.css';

const app = createApp(App);
app.use(router);
app.use(Vue3ColorPicker);
app.use(MotionPlugin);
app.mount('#app');

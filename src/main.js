/* eslint-disable import/no-extraneous-dependencies */
import Vue, { createApp } from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './example/App.vue';

Vue.use(ElementUI);

createApp(App).mount('#app');

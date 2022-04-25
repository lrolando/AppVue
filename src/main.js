import { createApp } from 'vue'
import App from './App.vue'

/*import {Vue} from 'vue'
eventBus = new Vue;
export default(eventBus);*/

/*import { VueElement } from 'vue'
eventBus = new VueElement;*/

import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;


app.mount('#app')


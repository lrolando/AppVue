import { createApp } from 'vue'
import App from './App.vue'

//import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)

import mitt from 'mitt';
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;


app.mount('#app')




/*import {Vue} from 'vue'
eventBus = new Vue;
export default(eventBus);*/

/*import { VueElement } from 'vue'
eventBus = new VueElement;*/

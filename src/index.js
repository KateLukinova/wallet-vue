// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')
import vSelect from 'vselect-component'
import VueRouter from "vue-router";

Vue.use(VueRouter)
Vue.use(vSelect)

window.EventBus = new Vue();

// Vue components (for use in html)
const MFooter = Vue.component('MFooter', require('./components/MFooter.vue').default)
const MHeader = Vue.component('MHeader', require('./components/MHeader.vue').default)
const LangSelect = Vue.component('LangSelect', require('./components/LangSelect.vue').default)
const App = Vue.component('App', require('./components/App.vue').default)
const Main = Vue.component('Main', require('./components/Main.vue').default)
const Token = Vue.component('Token', require('./components/Token.vue').default)
const Swap = Vue.component('Swap', require('./components/Swap.vue').default)
const About = Vue.component('About', require('./components/About.vue').default)
const LinkBox = Vue.component('LinkBox', require('./components/LinkBox.vue').default)


const routes = [
  { path: '/', component: Main },
  { path: '/token', component: Token },
  { path: '/swap', component: Swap },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes // сокращённая запись для `routes: routes`
})

// Vue init
const app = new Vue({
  router,
  mode: 'history',
}).$mount('#app')

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
import Vue from 'vue'
import { i18n } from './plugins/i18n.js'



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
const GoPro = Vue.component('GoPro', require('./components/GoPro.vue').default)
const Huobi = Vue.component('Huobi', require('./components/Huobi.vue').default)
const VpnPage = Vue.component('VpnPage', require('./components/VpnPage.vue').default)
const News = Vue.component('News', require('./components/News.vue').default)
const Academy = Vue.component('Academy', require('./components/Academy.vue').default)
const Team = Vue.component('Team', require('./components/Team.vue').default)
const Contacts = Vue.component('Contacts', require('./components/Contacts.vue').default)
const LinkBox = Vue.component('LinkBox', require('./components/LinkBox.vue').default)


const routes = [
  { path: '/', component: Main },
  { path: '/main', component: Main },
  { path: '/token', component: Token },
  { path: '/swap', component: Swap },
  { path: '/about', component: About },
  { path: '/go-pro', component: GoPro },
  { path: '/vpn-page', component: VpnPage },
  { path: '/huobi', component: Huobi },
  { path: '/news', component: News },
  { path: '/academy', component: Academy },
  { path: '/team', component: Team },
  { path: '/contacts', component: Contacts }
]

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
})

window.eventBus = new Vue();

// Vue init
const app = new Vue({
  router,
  i18n,
  mode: 'history'
}).$mount('#app')

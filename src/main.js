import Vue from 'vue'
import App from './App.vue'
import vueCityPicker from './lib/index.js'

Vue.use(vueCityPicker)



new Vue({
    el: '#app',
    render: h => h(App)
})
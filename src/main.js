import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import moment from 'moment'

Vue.filter('formatDate', function(value) {
	if (value) {
		return moment(String(value)).format('DD/MM/YYYY');
	}
})

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

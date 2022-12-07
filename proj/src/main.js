import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

  /* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

  /* import specific icons */
  import { faPhone, faClock, faEnvelope, faLocationDot, faTruckRampBox, faTemperatureLow, faBoxesStacked, faArrowRight, faQuoteRight, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'

  /*Import icone brands */
  import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

  /*Import icone regular */
  import { faUser, faGem } from '@fortawesome/free-regular-svg-icons'

  /* add icons to the library */
  library.add(faPhone, faClock, faEnvelope, faLocationDot, faFacebookF, faTwitter, faLinkedinIn, faUser, faGem, faTruckRampBox, faTemperatureLow, faBoxesStacked, faArrowRight, faQuoteRight, faChevronDown, faChevronRight)

  /* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')

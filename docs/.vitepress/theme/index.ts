import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import CustomHome from './CustomHome.vue'
import LumaRegisterButton from './components/LumaRegisterButton.vue'
import RecentTalks from './components/RecentTalks.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CustomHome', CustomHome)
    app.component('LumaRegisterButton', LumaRegisterButton)
    app.component('RecentTalks', RecentTalks)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-features-before': () => h(CustomHome)
    })
  }
}
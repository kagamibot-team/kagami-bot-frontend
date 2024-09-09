import './assets/main.scss'

import { createApp, onMounted } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

router.afterEach(() => {
  // 为后端开发的钩子，方便检测界面是否渲染完成
  window.loaded_trigger_signal = true
})

app.use(router)

app.mount('#app')

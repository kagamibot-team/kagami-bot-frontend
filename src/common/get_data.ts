import axios from 'axios'
import { ref, Ref, UnwrapRef } from 'vue'
import { useRoute } from 'vue-router'

function update_data<T>(data: Ref<T>) {
  const route = useRoute()

  if (route.query.uuid === undefined) {
    console.warn('UUID 值为空，将使用默认数据。')
    window.loaded_data_signal = true
    return
  }

  axios
    .get(`/kagami/data/${route.query.uuid}/`)
    .then((res) => {
      if (res.status == 200) {
        data.value = res.data
        window.loaded_data_signal = true
      } else {
        window.loaded_data_signal = true
      }
    })
    .catch(() => {
      window.loaded_data_signal = true
    })
}

/**
 * 从后端读取并加载代码
 * @param default_data 默认值
 * @returns 一个数据的引用
 */
export function load<T>(default_data: T): Ref<UnwrapRef<T>> {
  window.loaded_data_signal = false
  const data = ref(default_data)
  update_data(data)
  return data
}

/**
 * 等待数据加载完成后，再执行的函数
 * @param func 要执行的函数
 */
export function afterLoad(func: () => void) {
  const timer = setInterval(() => {
    if (window.loaded_data_signal == true) {
      clearInterval(timer)
      func()
    }
  }, 100)
}

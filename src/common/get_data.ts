import axios from 'axios'
import { ref, Ref, UnwrapRef } from 'vue'
import { useRoute } from 'vue-router'

function update_data<T>(data: Ref<T>) {
  const route = useRoute()

  if (route.query.uuid === undefined) {
    console.warn('UUID 值为空，将使用默认数据。')
    data.value.load = 'false'
    return
  }

  axios
    .get(`/kagami/data/${route.query.uuid}/`)
    .then((res) => {
      if (res.status == 200) {
        data.value = res.data
        data.value.load = 'true' // 为处理某些延后加载而的添加一个新属性
      } else {
        data.value.load = 'false'
      }
    })
    .catch((_) => {
      data.value.load = 'false'
    })
}

/**
 * 从后端读取并加载代码
 * @param default_data 默认值
 * @returns 一个数据的引用
 */
export function load<T>(default_data: T): Ref<UnwrapRef<T>> {
  const data = ref(default_data)
  update_data(data)
  return data
}

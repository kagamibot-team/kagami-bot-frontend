// import axios from 'axios'
// import { jsonp } from 'vue-jsonp'

export function rep_str_to_ids(str: string): Array<string | object> {
  var result: Array<
    | string
    | {
        code: string
        ids: string
      }
  > = []

  // 第一个出现 IDS（表意文字描述字符）的位置
  var lpointer: number = -1

  // 还需要匹配多少个 IDS 单元
  var required: number = 0

  for (let pointer = 0; pointer < [...str].length; pointer++) {
    let char = [...str][pointer]
    let met_symbol = false

    if ('⿰⿱⿸⿺⿹⿽⿵⿷⿶⿼⿴⿻㇯'.includes(char)) {
      // 二元 IDS 符号
      met_symbol = true
      required += 2
    } else if ('⿲⿳'.includes(char)) {
      // 三元 IDS 符号
      met_symbol = true
      required += 3
    } else if ('⿿⿾'.includes(char)) {
      // 一元 IDS 符号
      met_symbol = true
      required += 1
    }

    if (met_symbol) {
      if (lpointer == -1) {
        // 还没有进入捕获状态，此时把第一个 IDS 符号捕获进入，然后进入捕获状态
        // 左指针已经指向第一个 IDS 符号，而且需求单元量在上方已经定义了。
        lpointer = pointer
      } else {
        // 此时已经在捕获状态了，因此，新的 IDS 符号在吃掉一个需求单元的同时，
        // 又创造出了新的需求。
        required -= 1
      }
    } else {
      if (lpointer == -1) {
        // 此时并不在捕获 IDS 符号。把这个字扔进去就好。
        result.push(char)
      } else if (required == 1) {
        // 此时仍然在捕获 IDS 符号，然后现在这个不是符号，是最后一个字。
        // 这时候，需要推到列表里面的字，是一个比较长的单元。用于在字形维基中查
        // 找对应的字形 SVG 文件。
        result.push({
          code: query_ids_to_code([...str].slice(lpointer, pointer + 1)),
          ids: [...str].slice(lpointer, pointer + 1).join('')
        })

        // 状态归位。
        lpointer = -1
        required = 0
      } else {
        // 此时仍然在捕获 IDS 符号，但是是汉字，于是减少一个单位。
        required -= 1
      }
    }
  }

  return result
}

// 很奇怪的高位 Unicode 导致的问题，不是吗？偏偏要把字符串拆成数组才能解决了。
// 参见 https://mathiasbynens.be/notes/javascript-unicode
function query_ids_to_code(ids: Array<string>): string {
  let ids_array = []
  for (let index = 0; index < ids.length; index++) {
    ids_array.push('u' + ids[index].codePointAt(0)!.toString(16))
  }
  return ids_array.join('-')
}

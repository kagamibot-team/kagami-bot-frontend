// import axios from 'axios'
// import { jsonp } from 'vue-jsonp'

function trans_ids(data) {
  if (typeof data === 'object') {
    for (let key in data) {
      data[key] = trans_ids(data[key])
    }
    return data
  } else if (typeof data === 'string') {
    return rep_str_to_ids(data)
  } else {
    return data
  }
}

function rep_str_to_ids(str) {
  let index = -1
  let match = 0
  let rep_index = 0
  let handle_str = str
  let chara = ''
  let out_chara = ''
  let sub_index = 0
  for (let chara_index in str) {
    chara = str[chara_index]
    index += 1
    if ('⿰⿱⿸⿺⿹⿽⿵⿷⿶⿼⿴⿻㇯'.includes(chara)) {
      if (match == 0) {
        rep_index = index
        match += 1
      }
      match += 2
    } else if ('⿲⿳'.includes(chara)) {
      if (match == 0) {
        rep_index = index
        match += 1
      }
      match += 3
    } else if ('⿿⿾'.includes(chara)) {
      if (match == 0) {
        rep_index = index
        match += 1
      }
      match += 1
    }
    if (index - rep_index == match - 1) {
      out_chara = query_ids_to_html(str.substring(rep_index, index + 1))
      handle_str =
        handle_str.substring(0, rep_index + sub_index) +
        out_chara +
        handle_str.substring(index + sub_index + 1)
      sub_index += out_chara.length - match
      match = 0
      rep_index = 0
    }
  }
  return handle_str
}

function query_ids_to_code(ids) {
  let ids_array = []
  for (let chara_index in ids) {
    ids_array.push('u' + ids.charCodeAt(chara_index).toString(16))
  }
  return ids_array.join('-')
}

function query_ids_to_html(ids) {
  let code = query_ids_to_code(ids)
  //   return jsonp(`http://glyphwiki.org/json?name=${code}`).then((response) => {
  //     if (response.data != null) {
  //       return `<span class='${code}'>〓</span>`
  //     } else {
  //       return ids
  //     }
  //   })
  //   let cssLink = document.createElement('link')
  //   cssLink.rel = 'stylesheet'
  //   cssLink.type = 'text/css'
  //   cssLink.href = `http://glyphwiki.org/style?glyph=${code}`
  //   document.head.appendChild(cssLink)
  //   return `<span class='${code}'>〓</span>`
  return `<img class='inline-svg' src='http://glyphwiki.org/glyph/${code}.svg' alt='${code}'/>`
}

export { trans_ids }

/**
 * 获取树的叶子id
 * @param arr
 * @returns {*[]|[]}
 */
export function filterLeafIds (arr) {
  let filteredIds = []
  let leftArr = []

  arr.map(item => {
    if (item.children && item.children.length > 0) {
      leftArr = leftArr.concat(item.children)
    } else {
      filteredIds.push(item.id)
    }
  })

  return leftArr.length ? filteredIds.concat(filterLeafIds(leftArr)) : filteredIds
}

/**
 * 获取树的所有id
 * @param arr
 * @returns {*[]|[]}
 */
export function getAllNodeIds (arr) {
  let allIds = []
  let leftArr = []
  arr.forEach(item => {
    allIds.push(item.id)
    if (item.children && item.children.length > 0) {
      leftArr = leftArr.concat(item.children)
    }
  })

  return leftArr.length ? allIds.concat(getAllNodeIds(leftArr)) : allIds
}

/**
 * 获取指定ID的树节点的所有id
 * @param arr
 * @param id
 * @returns {[]}
 */
export function getTreeNodeIds (arr, id) {
  let resultIds = []

  arr.map(item => {
    if (item.id === id) {
      resultIds.push(id)
      resultIds = resultIds.concat(getAllNodeIds(item.children))
    }
  })

  return resultIds
}

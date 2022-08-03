/**
 * 获取树的叶子id
 * @param {Array} arr - 源数组
 * @returns {Array} - 所有叶子id
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
 * @param {Array} arr - 源数组
 * @returns {Array} - 树所有id
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
 * 获取树的所有节点
 * @param {Array} arr - 源数组
 * @returns {Array} - 所有节点
 */
export function getAllNodes (arr) {
  let allNodes = []
  let leftArr = []
  arr.forEach(item => {
    allNodes.push(item)
    if (item.children && item.children.length > 0) {
      leftArr = leftArr.concat(item.children)
    }
  })

  return leftArr.length ? allNodes.concat(getAllNodes(leftArr)) : allNodes
}

/**
 * 获取指定ID的树节点的所有id
 * @param {Array} arr - 源数组
 * @param {(number|string)} id
 * @returns {Array}
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

/**
 * 获取指定ID节点所有父结点的id集合
 * @param arr
 * @param id
 * @returns {[]}
 */
export function getTreeNodeParentIds (arr, id) {
  let resultIds = []

  function ak (arr, id, ids = []) {
    for (let item of arr) {
      if (item.id === id) {
        ids.push(id)
        return ids
      } else if (Array.isArray(item.children) && item.children.length > 1) {
        return ak(item.chilren, id, ids)
      } else {
        return []
      }
    }
  }

  return ak(arr, id)
}

/**
 * 获取树某个对应id的全部节点
 * @param {Array} arr - 源数组
 * @param {(number|string)} id
 * @returns {Array}
 */
export function getSomeBranchNodes (arr, id) {
  let resultNodes = []

  arr.map(item => {
    if (item.id === id) {
      resultNodes.push(item)
      resultNodes = resultNodes.concat(getAllNodes(item.children))
    }
  })

  return resultNodes
}

/**
 * 获取树对应id的全部父节点id集合
 * @param arr
 * @param id
 * @param preResult
 * @returns {FlatArray<*, 1>[]}
 */
export function getTreeParentIds (arr, id, preResult = []) {
  return arr.map(item => {
    return item.id === id
      ? preResult.concat(item.id)
      : item.children
        ? getTreeParentIds(item.children, id, preResult.concat(item.id))
        : []
  }).flat()
}

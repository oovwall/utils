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

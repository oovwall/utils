import { filterLeafIds, getAllNodeIds, getTreeNodeIds } from './utils.js'

let arr = [{
  id: 1,
  label: '一级 1',
  children: [{
    id: 4,
    label: '二级 1-1',
    children: [{
      id: 9,
      label: '三级 1-1-1'
    }, {
      id: 10,
      label: '三级 1-1-2'
    }]
  }]
}, {
  id: 2,
  label: '一级 2',
  children: ''
}, {
  id: 3,
  label: '一级 3',
  children: [{
    id: 7,
    label: '二级 3-1',
    children: [{
      id: 14,
      label: '三级 3-1-1',
      children: [{
        id: 19,
        label: '四级 3-1-1-1'
      }, {
        id: 20,
        label: '四级 3-1-1-2'
      }]
    }]
  }, {
    id: 8,
    label: '二级 3-2'
  }]
}]
document.getElementById('arr').innerText = JSON.stringify(arr, null, 2)

function writeResult (id, content) {
  document.getElementById(id).innerText = content
}

writeResult('filterLeafIds', filterLeafIds(arr))
writeResult('getAllNodeIds', getAllNodeIds(arr))
writeResult('getTreeNodeIds', getTreeNodeIds(arr, 3))

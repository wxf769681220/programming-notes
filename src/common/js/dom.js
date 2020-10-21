/**
 * 瀑布流双栏布局
 * @param {*} wrapper
 */
export function reflower(wrapper) {
  let gutter = wrapper.offsetWidth * 0.02
  let list = wrapper.children
  console.log(list)

  let columnHeight = []

  for (let i = 0; i < list.length; i++) {
    if (i < 2) {
      columnHeight[i] = list[i].offsetHeight + gutter
    } else {
      let minHeight = Math.min.apply(null, columnHeight)
      let minHeightIndex = columnHeight.indexOf(minHeight)

      list[i].style.position = 'absolute'
      list[i].style.top = `${minHeight}px`

      if (minHeightIndex !== 0) {
        list[i].style.left = '49%'
      }

      columnHeight[minHeightIndex] += list[i].offsetHeight + gutter
    }
  }
  wrapper.style.minHeight = `${Math.max.apply(null, columnHeight)}px`
}

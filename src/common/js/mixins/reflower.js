export default {
  mounted() {
    this.$nextTick(() => {
      this.reflower(this.$refs[this.$options.name])
    })
  },
  methods: {
    reflower(wrapper) {
      const cards = wrapper.children
      const cardWidth = cards[0].offsetWidth
      const cols = Math.floor(document.documentElement.clientWidth / cardWidth)
      console.log(cols)
      wrapper.style.cssText = ';width:' + cardWidth * cols + 'px;margin: 0 auto'
      let arr = []
      cards.forEach((item, index) => {
        if (index < cols) {
          arr.push(item.offsetHeight)
          console.log(arr)
        } else {
          // 按最小列高度排列
          let minHeight = Math.min.apply(null, arr)
          const idx = arr.indexOf(minHeight)

          item.style.position = 'absolute'
          item.style.top = minHeight + 'px'
          item.style.left = cardWidth * idx + 'px'

          // OR: item.style.left = cards[idx].offsetLeft + 'px'
          arr[idx] += item.offsetHeight

          // 按顺序排列
          // const idx = index % cols
          // console.log('idx：', idx)
          // console.log('index：', index)
          // item.style.position = 'absolute'
          // item.style.top = arr[idx] + 'px'
          // item.style.left = cards[idx].offsetLeft + 'px'
          // arr[idx] += item.offsetHeight
        }
      })
    }
  }
}

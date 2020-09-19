<template>
  <div class="referenceType-4">
    <div class="card-column">
      <div class="card-column-title">1、Math 对象</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            Math对象的属性：数学计算中可能用到的特殊值。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  Math.E               // 自然对数的底数，即常量e的值

  Math.LN10            // 10的自然对数
  Math.LN2             // 2的自然对数

  Math.LOG2E           // 以2为底e的对数
  Math.LOG10E          // 以10为底e的对数

  Math.PI              // π的值

  Math.SQRT1_2         // 1/2的平方根(2的平方根的倒数)
  Math.SQRT2           // 2的平方根
  Math.sqrt(num)       // 返回num的平方根

  Math.abs(num)        // 返回num的绝对值
  Math.log(num)        // 返回num的自然对数

  Math.exp(num)        // 返回Math.E的num次幂
  Math.pow(num, power) //返回num的power次幂

  Math.acos(x)         // 返回x的反余弦值
  Math.asin(x)         // 返回x的反正弦值
  Math.atan(x)         // 返回x的反正切值
  Math.atan2(y, x)     // 返回y/x的反正切值

  Math.cos(x)          // 返回x余弦值
  Math.sin(x)          // 返回x的正弦值
  Math.tan(x)          // 返回x的正切值
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、确定最大值与最小值的方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>max() 和 min()</strong> 方法。它们可以接收任何数量的参数，并确定数值中的最大值或最小值。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 最大值
  Math.max(1, 2, 3, 4, 5) => 5

  // 最小值
  Math.min(1, 2, 3, 4, 5) => 1
</code>
            </pre>
          </div>
          <div class="card-header">
            确定数组中的最大值或最小值。可使用 <strong>apply()</strong> 方法。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 2, 3, 4, 5]

  // 最大值
  Math.max.apply(Math, arr) => 5

  // 最小值
  Math.min.apply(Math, arr) => 1
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">3、舍入方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul>
              <li>1、<strong>Math.ceil()</strong> ：向上舍入，数值舍入为最近的整数。</li>
              <li>2、<strong>Math.floor()</strong>：向下舍入，数值舍入为最近的整数。</li>
              <li>3、<strong>Math.round()</strong>：标准舍入，数值四舍五入为最近的整数。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 清除小数位，整数位+1
  Math.ceil(1.1) => 2
  Math.ceil(1.5) => 2
  Math.ceil(1.9) => 2

  // 清除小数位
  Math.floor(1.1) => 1
  Math.floor(1.5) => 1
  Math.floor(1.9) => 1

  // 四舍五入为最近整数
  Math.round(1.1) => 1
  Math.round(1.5) => 2
  Math.round(1.9) => 2
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">4、随机方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>random() </strong> 方法。始终返回大于等于 0 小于 1 的随机数。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 从某个范围内随机选择一个数
  Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)

  // 从0~10随机出一个数
  Math.floor(Math.random() * 11 + 0)

  // 封装函数
  function randomValueFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1
    return Math.floor(Math.random() * choices + lowerValue)
  }
  randomValueFrom(0, 10)
</code>
            </pre>
          </div>
          <div class="card-header">
            从数组中随机抽取一个数组项。（实质上就是索引的随机）
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 封装函数
  function randomValueFrom(lowerValue, upperValue) {
    var choices = upperValue - lowerValue + 1
    return Math.floor(Math.random() * choices + lowerValue)
  }

  var arr = ['red', 'green', 'black', 'blue']
  arr[randomValueFrom(0, arr.length-1)]
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'referenceType-4'
}
</script>

<style scoped lang="stylus"></style>

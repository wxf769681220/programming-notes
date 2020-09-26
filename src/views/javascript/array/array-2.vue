<template>
  <div class="array-2">
    <div class="card-column">
      <div class="card-column-title">1、操作方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>join()</strong>
            方法。将数组项转换为字符串拼接在一起，返回生成的字符串。
            可指定一个可选的字符串在生成的字符串中来分隔各数组项，若不指定分隔符，则默认使用逗号。（不会对原数组修改）
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = ['x', 'y', 'z']

  // 默认逗号分隔
  arr.join()    => 'x,y,z'

  // 指定字符分隔
  arr.join('-') => 'x-y-z'
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong>reverse()</strong>
            方法。反转数组项顺序，返回被修改后的数组。（会对原数组修改）
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = ['x', 'y', 'z']

  arr.reverse() => ['z', 'y', 'x']

  arr => ['z', 'y', 'x']
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong>concat()</strong>
            方法。创建并返回一个新数组。它的数组项包括调用 concat()
            的原始数组的项和 concat() 的每个参数。
            若这些参数中的任何一个自身是数组，则连接的是数组项而非数组本身。（不会对原数组修改）
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 2, 3]

  // 返回原数组的一个副本
  arr.concat() => [1, 2, 3]

  arr.concat(4, 5) => [1, 2, 3, 4, 5]
  arr.concat(4, [5,6]) => [1, 2, 3, 4, 5, 6]

  // 不会递归扁平化数组的数组
  arr.concat(4, [5,[6,7]]) => [1, 2, 3, 4, 5, [6,7]]
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、排序方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>sort()</strong>
            方法。按一定规则对数组项进行排序，返回排序后的数组。当不带参数调用
            sort()
            时，数组项以字母表顺序排序（必要时将临时转化为字符串进行比较）。
            （会对原数组修改）
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 以字母表顺序排序
  var arr1 = ['banana', 'cherry', 'apple']
  arr1.sort() => ['apple', 'banana', 'cherry']
  arr1 => ['apple', 'banana', 'cherry']

  // 以字符串比较
  var arr2 = [1, 10, 2, 4, 3, 5]
  arr2.sort() => [1, 10, 2, 3, 4, 5]
  arr2 => [1, 10, 2, 3, 4, 5]
</code>
            </pre>
          </div>
          <div class="card-header">
            sort()
            方法可以接受一个函数作为参数，来指定数组项的在数组中的先后顺序。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 区分大小写
  var arr1 = ['ant', 'Bug', 'cat', 'Dog']
  arr1.sort() => ['Bug', 'Dog', 'ant', 'cat']
  arr1 => ['Bug', 'Dog', 'ant', 'cat']

  // 不区分大小写
  var arr2 = ['ant', 'Bug', 'cat', 'Dog']
  arr2.sort(function(a, b) {
    var value1 = a.toLowerCase()
    var value2 = b.toLowerCase()
    if (value1 &lt; value2) return -1
    if (value1 > value2) return 1
    return 0
  })    => ['ant', 'Bug', 'cat', 'Dog']
  arr2  => ['ant', 'Bug', 'cat', 'Dog']
</code>
            </pre>
          </div>
          <div class="card-header">
            对于数值类型，或通过 valueOf()
            方法返回数值类型的对象类型，可以使用更简单的比较函数。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 10, 2, 4, 3, 5]

  arr.sort(function(a, b) {
    return a - b
  })    =>  [1, 2, 3, 4, 5, 10]
  arr2  =>  [1, 2, 3, 4, 5, 10]
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">3、操作方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>slice()</strong>
            方法。返回指定数组的一个片段或子数组。（不会对原始数组进行修改）
            <ul>
              <li>
                1、只有一个参数时，表示从起始位置截取到数组末尾最后一项（包含最后一项）。
              </li>
              <li>
                2、传入两个参数时，表示从起始位置截取结束位置（不包含结束位置项）
              </li>
              <li>
                3、传入两个参数时，第二个参数必须大于第一个参数，否则返回空数组。（包含负值时先通过第四条在再进行比较）
              </li>
              <li>
                4、传入参数包含负值时，可以通过数组长度加上该负值来确定需要截取的位置。
              </li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 2, 3, 4, 5]

  // 返回原数组的一个副本
  arr.slice()      => [1, 2, 3, 4, 5]

  arr.slice(1)     => [2, 3, 4, 5]
  arr.slice(1, 3)  => [2, 3]
  arr.slice(3, 1)  => []

  arr.slice(3, -1)           => [4]
  arr.slice(3, arr.length-1) => [4]

  arr.slice(-3, -1)                     => [3, 4]
  arr.slice(arr.length-3, arr.length-1) => [3, 4]
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong>splice()</strong>
            基于当前数组进行插入和删除操作。它返回由被删除数组项所组成的数组。（对当前数组进行修改）
            <ul>
              <li>1、只有一个参数时，表示从起始位置到数组末尾项全部删除。</li>
              <li>
                2、传入两个参数时，第一个参数表示起始位置；第二个参数表示要删除项的数量。
              </li>
              <li>
                3、传入三个或三个以上参数时，第一个参数表示起始位置；第二个参数表示要删除项的数量;
                第三个参数表示要插入的项; 若要插入多个项,
                则可以再插入第四个、第五个...等参数。
              </li>
              <li>
                4、该始终返回由被删除的项组成的数组。若没有被删除的项，即第二个参数等于
                0 时，则返回一个空数组。
              </li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 2, 3, 4, 5]

  arr.splice()      => []
  arr               => [1, 2, 3, 4, 5]

  arr.splice(1)     => [2, 3, 4, 5]
  arr               => [1]

  arr.splice(1, 2)  => [2, 3]
  arr               => [1, 4, 5]

  arr.splice(1, 2, 'x')  => [2, 3]
  arr                    => [1, 'x', 4, 5]

  arr.splice(1, 0, 'x') => []
  arr                   => [1, 'x', 2, 3, 4, 5]
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">4、栈方法与队列方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            栈方法（后进先出）包括：
            <ul>
              <li>
                1、<strong>push()</strong>：在数组的末尾添加一个或多个数组项，返回数组新的长度。
              </li>
              <li>
                2、<strong>pop()</strong>：删除数组的最后一个元素，减小数组长度，返回被删除的数组项。
              </li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 2, 3]

  // 在末尾添加任意数组项
  arr.push(4, 5) => 5
  arr => [1, 2, 3, 4, 5]

  // 从末尾删除最后一项
  arr.pop() => 5
  arr => [1, 2, 3, 4]
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            队列方法（先进先出）包括：
            <ul>
              <li>
                1、<strong>unshift()</strong>：在数组的头部添加一个或多个数组项，返回数组新的长度。
              </li>
              <li>
                2、<strong>shift()</strong>：删除数组的第一项，减小数组长度，返回被删除的数组项。
              </li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 2, 3]

  // 在头部添加任意数组项
  arr.unshift(4, 5) => 5
  arr => [4, 5, 1, 2, 3]

  // 从头部删除第一项
  arr.shift() => 4
  arr => [5, 1, 2, 3]
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">5、位置方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>iindexOf()</strong>
            方法用于查找指定的数组项，返回匹配到的第一个数组项的索引，若没有找到则返回
            -1。<strong>lastIndexOf()</strong> 方法与 indexOf() 方法用法一致，只不过它的查找方向从后向前。
            <ul>
              <li>1、只有一个参数时，表示要查找的项在当前数组中的位置。</li>
              <li>2、传入两个参数时，第一个参数表示：要查找的项；第二个参数表示：起始位置。</li>
              <li>3、传入两个参数时，若第二个参数是负值，则可以通过数组 length属性值加上负值来确定位置。</li>
              <li>4、与数组项匹配时, 会使用全等操作符。若数组中没有匹配的项, 则返回 -1。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 2, 3, 4, 5, 3]

  arr.indexOf(3)    => 2
  arr.indexOf(3, 3) => 5

  arr.indexOf(3, -2) => 5
  arr.indexOf(3, arr.length-2) => 5

  arr.indexOf('3') => -1
</code>
            </pre>
          </div>
          <div class="card-header">
            在一个数组中匹配指定的值，并返回包含所有匹配的数组索引的一个数组。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 'x', 2, 3, 'x', 4, 5, 'x']

  function findall(arr, el) {
    var results = []
    var len = arr.length
    var pos = 0

    while (pos &lt; len) {
      pos = arr.indexOf(el, pos)
      if (pos === -1) break
      results.push(pos)
      pos = pos + 1
    }
    return results
  }

  findall(arr, 'x') => [1, 4, 7]
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">6、迭代方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul>
              <li>1、<strong>every()</strong>：对数组中的每一项运行给定的函数，若函数对每一项都返回 true，则返回 true。（对空数组返回 true）</li>
              <li>2、<strong>some()</strong>：对数组中的每一项运行给定的函数, 若函数对任意一项返回 true, 则返回 true。</li>
              <li>3、<strong>map()</strong>：对数组中的每一项运行给定的函数, 返回每次函数调用的结果组成的数组。</li>
              <li>4、<strong>filter()</strong>：对数组中的每一项运行给定的函数, 返回该函数返回 true 的项组成的数组。</li>
              <li>5、<strong>forEach()</strong>：对数组中的每一项运行给定的函数, 没有返回值。</li>
            </ul>
            上列方法中的函数都会接收三个参数：
            <ul>
              <li>1、第一个参数表示：数组项的值。</li>
              <li>2、第二个参数表示：数组项的索引。</li>
              <li>3、第三个参数表示：数组对象本身。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 2, 3, 4, 5]

  // 对每一项都返回 true
  arr.every(function(item, index, array) {
    return (item >= 1)
  }) => true

  // 对任意一项返回 true
  arr.some(function(item, index, array) {
    return (item === 1)
  }) => true

  // 返回该函数返回 true 的项组成的数组
  arr.filter(function(item, index, array) {
    return (item > 2)
  }) => [3, 4, 5]

  // 返回每次函数调用的结果组成的数组
  arr.map(function(item, index, array) {
    return (item * 2)
  }) => [2, 4, 6, 8, 10]

  // 没有返回值
  var sum = 0
  arr.forEach(function(item, index, array) {
    // 每个数组项的值自加1
    array[index] = item + 1
    sum += array[index]
  })  => undefined
  arr => [2, 3, 4, 5, 6]
  sum => 20
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            所有迭代方法都有<strong class="bold">可选的第二个参数</strong>。如果指定了第二个参数为 o，则调用函数时，就好像该函数是 o 的方法一样。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 2, 3, 4, 5],

  o = {}

  arr.forEach(function(item, index, array) {
    this => // 指向 o
  }, o)
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            所有迭代方法在开始遍历时就记录了数组的长度。
            <ul>
              <li>1、若调用函数时，添加了新的数组项，则该数组项不会被遍历到。</li>
              <li>2、若调用函数时，修改了还未遍历到的已存在的数组项，则遍历到该数组项时会使用修改后的值。</li>
              <li>3、用于稀疏数组时，以上方法不会在不实际存在的数组项上调用函数。</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            forEach() 不能像 for 循环一样使用相应的 break 语句提前终止。
            若需要提前终止，必须把 forEach() 方法放在一个 try 块中，并能抛出一个异常。 如果 forEach() 调用的函数抛出 forEach.break 异常，循环会提前终止。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  function foreach(arr, f, t) {
    try {
      arr.forEach(f, t);
    }
    catch(e) {
      if (e === foreach.break) return
      else throw e
    }
  }
  foreach.break = new Error('StopIteration')
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">7、归并方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong>reduce()</strong> 方法。迭代数组中的所有项，返回一个最终值。函数返回任何值都会作为第一个参数自动传递给下一项。<strong>reduceRight()</strong> 方法与 reduce() 方法用法相同，归并方向相反。
            <ul>
              <li>1、第一个参数表示：前一个值, 即数组第一项。</li>
              <li>2、第二个参数表示：当前值, 即数组第二项。</li>
              <li>3、第三个参数表示：当前循环次数。</li>
              <li>4、第四个参数表示：数组对象本身。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 2, 3, 4, 5]

  arr.reduce(function(prev, cur, index, array){
    return prev + cur
  }) => // 1+2+3+4+5 = 15

  // 从右向左计算
  arr.reduceRight(function(prev, cur, index, array){
    return prev + cur
  }) => // 5+4+3+2+1 = 15
</code>
            </pre>
          </div>
          <div class="card-header">
            第二个参数可选，即表示初始化数值。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr = [1, 2, 3, 4, 5]

  // 求和
  arr.reduce(function(prev, cur, index, array){
    return prev + cur
  }, 10) => // 10+1+2+3+4+5 = 25

  // 求积
  arr.reduce(function(prev, cur, index, array){
    return prev * cur
  }, 1) => // 1*1*2*3*4*5 = 120

  // 求最大值
  arr.reduce(function(prev, cur, index, array){
    return (prev > cur) ? prev : cur
  }, 0) => // 5
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">8、继承方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul>
              <li>1、<strong>toString()</strong>：返回一个由每个数组项的字符串形式拼接起来的字符串，以逗号分隔。实际上会调用每个数组项的 toString() 方法。</li>
              <li>2、<strong>toLocaleString()</strong>：通常 toString() 方法返回一样的结果。区别：它会首先会检查每个数组项上是否存在 toLocaleString() 方法。
                若存在，则调用 toLocaleString() 方法；若没有，则调用 toString() 方法。</li>
              <li>3、<strong>valueOf()</strong>：返回数组对象本身。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var arr1 = ['x', 'y', 'z']

  arr1.toString()        => 'x,y,z'
  arr1.toLocaleString()  => 'x,y,z'
  arr1.valueOf()         => ['x', 'y', 'z']

  // 数组项中存在 toLocaleString() 方法
  var obj1 = {
    toString: function() {
      return 'red'
    }
  }

  var obj2 = {
    toString: function() {
      return 'green'
    },
    toLocaleString: function() {
      return 'blue'
    }
  }

  var arr2 = [obj1, obj2]
  arr2.toLocaleString() => 'red,blue'
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
  name: 'array-2'
}
</script>

<style scoped lang="stylus"></style>

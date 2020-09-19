<template>
  <div class="referenceType-2">
    <div class="card-column">
      <div class="card-column-title">1、RegExp对象</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">Date 类型。</strong>使用自 UTC（Coordinated Universal Time 国际协调时间）1970年1月1日午夜（零时）开始经过的毫秒数来保存时间。
            创建一个日期对象可以使用 new 操作符 + （Date）构造函数。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var time = new Date()
  time => // 自动获取当前日期和时间
</code>
            </pre>
          </div>
          <div class="card-header">向 Date 构造函数中传递表示日期类型的字符串，可以创建一个保存特定日期和时间的对象。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var time = new Date('2020-01-01')
  time => // 保存一个时间对象
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、日期方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <strong class="bold">Date.parse() 方法。</strong>它接受一个表示日期的字符串参数，返回该日期的毫秒数。如果该字符串不能表示一个日期，则返回 NaN。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 获取当前某一时刻的毫秒数
  var time1 = Date.parse(new Date())

  // 获取某一特定时刻的毫秒数
  var time2 = Date.parse('2020-2-1')

  // 非日期格式字符串
  var time3 = Date.parse('one')
  time3 => NaN
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">Date.UTC() 方法。</strong>该方法同样返回表示日期的毫秒数。这个方法的参数分别是年份、基于 0 的月份(0-11)、月中的哪一天(1-31)、小时数(0-23)、分钟、秒以及毫秒数。
            其中年份和月是必须的；若没提供月中的哪一天，则默认为 1；若省略其他参数，则统统默认为 0。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // GMT时间：2020年1月1日午夜零时
  var time1 = Date.UTC(2020, 0)

  // GMT时间：2020年2月1日下午1时11分11秒
  var time2 = Date.UTC(2020, 1, 1, 13, 11, 11)
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <strong class="bold">Date.now() 方法。</strong>返回调用该方法时的日期时间和时间的毫秒数。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 获取当前时间的毫秒数
  var time1 = Date.now()

  // 等价于
  var time2 = Date.parse(new Data())
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">3、日期格式化方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul>
              <li>1、toDateString()：以特定格式显示星期几、月、日和年。</li>
              <li>2、 toTImeString()：以特定格式显示时、分、秒和时区。</li>
              <li>3、 toLocaleDateString()：以特定地区格式显示星期几、月、日和年。</li>
              <li>4、 toLocaleTImeString()：以特定地区格式显示时、分、秒和时区。</li>
              <li>5、 toUTCString()：以特定格式显示完整的UTC日期。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var time = new Date()

  time.toDateString()       => // Fri Jun 05 2020
  time.toLocaleDateString() => // 2020/6/5
  time.toTimeString()       => // 14:07:16 GMT+0800 (中国标准时间)
  time.toLocaleTimeString() => // 下午2:07:42
  time.toUTCString()        => // Fri, 05 Jun 2020 06:08:00 GMT
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">4、继承 Object 方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul>
              <li>1、toString()：通常返回带有时区信息的日期和时间。</li>
              <li>2、toLocaleString()：会按照与浏览器设置的地区相适应的格式返回日期和时间。</li>
              <li>3、valueOf()：不返回字符串，而是返回日期的毫秒数。因此可以方便的使用比较操作符来进行日期比较。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var time1 = new Date(2020, 0)
  var time2 = new Date(2020, 1)

  // 当两个时间进行比较时，
  // 后台会自动调用 valueOf() 方法
  time1 &lt; time2 => true
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">5、日期/时间组件方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"></div>
          <div class="card-body">
            <pre v-highlight>
<code>
  getTime() => // 返回表示日期的毫秒数，与valueOf()返回相同的值
  setTime() => // 以毫秒数设置日期，会改变这整个日期

  getFullYear() => // 返回4位数的年份
  setFullYear() => // 设置年份。传入的年份值必须是4位数
  getUTCFullYear()
  setUTCFullYear()

  getMonth() => // 返回日期中的月份(0-11)
  setMonth() => // 设置月份。必须大于0，超过11则增加年份
  getUTCMonth()
  setUTCMonth()

  getDate() => // 返回日期月份中的天数
  setDate() => // 设置天数。超过该月中应有天数时，则增加月份
  getUTCDate()
  setUTCDate()

  getDay()    => // 返回日期中星期几（0表示星期日、6表示星期六）
  getUTCDay()

  getHours()  => // 返回日期中的小时数(0-23)
  setHours()  => // 设置小时数。超过23则增加天数
  getUTCHours()
  setUTCHours()

  getMinutes() => // 返回日期中的分钟数(0-59)
  setMinutes() => // 设置分钟。超过59则增加小时数
  getUTCMinutes()
  setUTCMinutes()

  getSeconds() => // 返回日期中的秒数(0-59)
  setSeconds() => // 设置秒数。超过59则增加分钟数
  getUTCSeconds()
  setUTCSeconds()

  getMilliseconds() => // 返回日期中的毫秒数。
  setMilliseconds() => // 设置日期中的毫秒数
  getUTCMilliseconds()
  setUTCMilliseconds()

  getTimezoneOffset() => // 返回本地时间与UTC时间相差的分钟数
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
  name: 'referenceType-2'
}
</script>

<style scoped lang="stylus"></style>

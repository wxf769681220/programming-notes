<template>
  <div class="referenceType-1" ref="referenceType1">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、日期对象</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="bold">Date 类型</strong>。
            </div>
            <div class="card-body">
              <p>使用自 UTC（Coordinated Universal Time 国际协调时间）1970年1月1日午夜（零时）开始经过的毫秒数来保存时间。
                创建一个日期对象可以使用 new 操作符 + （Date）构造函数。</p>
              <pre v-highlight>
<code>
  var time = new Date()
  time => // 自动获取当前日期和时间
</code>
              </pre>
              <p>向 Date 构造函数中传递表示日期类型的字符串，可以创建一个保存特定日期和时间的对象。</p>
              <pre v-highlight>
<code>
  var time = new Date('2020-01-01')
</code>
             </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、日期方法</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong class="danger">Date.parse()</strong> 方法。
            </div>
            <div class="card-body">
              <p>该方法接收一个表示日期的字符串参数，返回该日期的毫秒数。如果该字符串不能表示一个日期，则返回 NaN。</p>
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
              <strong class="danger">Date.UTC()</strong> 方法。
            </div>
            <div class="card-body">
              <p>该方法同样返回表示日期的毫秒数。这个方法的参数分别是年份、基于 0 的月份(0-11)、月中的哪一天(1-31)、小时数(0-23)、分钟、秒以及毫秒数。
                其中年份和月是必须的；若没提供月中的哪一天，则默认为 1；若省略其他参数，则统统默认为 0。</p>
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
              <strong class="danger">Date.now()</strong> 方法。
            </div>
            <div class="card-body">
              <p>该方法返回调用该方法时的日期时间和时间的毫秒数。</p>
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
          <div class="card">
            <div class="card-header">
              <strong class="danger">Date.toJSON()</strong> 方法。该方法返回日期的一个字符串表示形式。（值与调用它的toISOString()方法的结果一样）
            </div>
            <div class="card-body">
              <pre v-highlight>
<code>
  var now = new Date()

  // 当前日期的字符串表示
  now.toJSON() => '2020-09-19T02:12:54.121Z'
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、日期格式化方法</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <ol>
                <li><strong class="danger">toDateString()</strong>：以特定格式显示星期几、月、日和年。</li>
                <li><strong class="danger">toTImeString()</strong>：以特定格式显示时、分、秒和时区。</li>
                <li><strong class="danger">toLocaleDateString()</strong>：以特定地区格式显示星期几、月、日和年。</li>
                <li><strong class="danger">toLocaleTImeString()</strong>：以特定地区格式显示时、分、秒和时区。</li>
                <li><strong class="danger">toUTCString()</strong>：以特定格式显示完整的UTC日期。</li>
              </ol>
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
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、继承 Object 方法</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <ol>
                <li><strong class="danger">toString()</strong>：通常返回带有时区信息的日期和时间。</li>
                <li><strong class="danger">toLocaleString()</strong>：会按照与浏览器设置的地区相适应的格式返回日期和时间。</li>
                <li><strong class="danger">valueOf()</strong>：不返回字符串，而是返回日期的毫秒数。因此可以方便的使用比较操作符来进行日期比较。</li>
              </ol>
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
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">5、日期/时间组件方法</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header"></div>
            <div class="card-body">
              <pre v-highlight>
<code>
  <strong class="danger">getTime()</strong> => // 返回表示日期的毫秒数，与valueOf()返回相同的值
  <strong class="danger">setTime()</strong> => // 以毫秒数设置日期，会改变这整个日期

  <strong class="danger">getFullYear()</strong> => // 返回4位数的年份
  <strong class="danger">setFullYear()</strong> => // 设置年份。传入的年份值必须是4位数
  <strong class="danger">getUTCFullYear()</strong>
  <strong class="danger">setUTCFullYear()</strong>

  <strong class="danger">getMonth()</strong> => // 返回日期中的月份(0-11)
  <strong class="danger">setMonth()</strong> => // 设置月份。必须大于0，超过11则增加年份
  <strong class="danger">getUTCMonth()</strong>
  <strong class="danger">setUTCMonth()</strong>

  <strong class="danger">getDate()</strong> => // 返回日期月份中的天数
  <strong class="danger">setDate()</strong> => // 设置天数。超过该月中应有天数时，则增加月份
  <strong class="danger">getUTCDate()</strong>
  <strong class="danger">setUTCDate()</strong>

  <strong class="danger">getDay()</strong>    => // 返回日期中星期几（0表示星期日、6表示星期六）
  <strong class="danger">getUTCDay()</strong>

  <strong class="danger">getHours()</strong>  => // 返回日期中的小时数(0-23)
  <strong class="danger">setHours()</strong>  => // 设置小时数。超过23则增加天数
  <strong class="danger">getUTCHours()</strong>
  <strong class="danger">setUTCHours()</strong>

  <strong class="danger">getMinutes()</strong> => // 返回日期中的分钟数(0-59)
  <strong class="danger">setMinutes()</strong> => // 设置分钟。超过59则增加小时数
  <strong class="danger">getUTCMinutes()</strong>
  <strong class="danger">setUTCMinutes()</strong>

  <strong class="danger">getSeconds()</strong> => // 返回日期中的秒数(0-59)
  <strong class="danger">setSeconds()</strong> => // 设置秒数。超过59则增加分钟数
  <strong class="danger">getUTCSeconds()</strong>
  <strong class="danger">setUTCSeconds()</strong>

  <strong class="danger">getMilliseconds()</strong> => // 返回日期中的毫秒数。
  <strong class="danger">setMilliseconds()</strong> => // 设置日期中的毫秒数
  <strong class="danger">getUTCMilliseconds()</strong>
  <strong class="danger">setUTCMilliseconds()</strong>

  <strong class="danger">getTimezoneOffset()</strong> => // 返回本地时间与UTC时间相差的分钟数
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import reflowerMixins from 'common/js/mixins/reflower.js'
export default {
  name: 'referenceType1',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>

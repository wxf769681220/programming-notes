<template>
  <div class="dom-6">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、动态脚本</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>加载外部脚本文件。</p>
              <pre v-highlight>
<code>
  function loadScript(url) {
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url
    document.body.appendChild(script)
  }

  // 加载外部脚本文件的过程是异步的
  loadScript('client.js')
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、动态样式</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>加载外部 css 样式表。</p>
              <pre v-highlight>
<code>
  function loadStyles(url) {
    var link = document.createElement("link")
    link.rel = "stylesheet"
    link.type = "text/css"
    link.href = url
    var head = document.getElementsByTagName("head")[0]
    head.appendChild(link)
  }

  // 加载外部样式文件的过程是异步的
  loadStyles('style.js')
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、动态表格</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">字符串转数值。</div>
            <div class="card-body">
              <p>为了方便构建表格，DOM为 &lt;table>、&lt;thead>、&lt;tbody> 和 &lt;tr> 添加了一些的属性和方法：下列为 &lt;table> 元素添加的属性和方法：</p>
              <ul>
                <li><strong>caption</strong>：保存对 &lt;caption>元素的指针。</li>
                <li><strong>tHead</strong>：保存对 &lt;thead>元素的指针。</li>
                <li><strong>tBodies</strong>：是一个 &lt;tbody>元素的HTMLCollection。</li>
                <li><strong>tFoot</strong>：保存对 &lt;tfoot>元素的指针。</li>
                <li><strong>createCaption</strong>：创建 &lt;caption>元素，放到表格中，返回引用。</li>
                <li><strong>createTHead</strong>：创建 &lt;thead>元素，放到表格中，返回引用。</li>
                <li><strong>createTFoot</strong>：创建 &lt;tfoot>元素，放到表格中，返回引用。</li>
                <li><strong>deleteCaption</strong>：删除 &lt;caption>元素。</li>
                <li><strong>deleteTHead</strong>：删除 &lt;thead>元素。</li>
                <li><strong>deleteTFoot</strong>：删除 &lt;tfoot>元素。</li>
                <li><strong>rows</strong>：是一个表格所有行的HTMLCollection。</li>
                <li><strong>insertRows(pos)</strong>：向rows集合中的指定位置插入一行。</li>
                <li><strong>deleteRows(pos)</strong>：删除指定位置行。</li>
                <li>下列为 &lt;tbody>元素添加的属性和方法：
                  <ul>
                    <li><strong>rows</strong>：保存着 &lt;tbody>元素中行的 HTMLCollection。
                    <li><strong>insertRows(pos)</strong>：向rows集合中的指定位置插入一行，返回对新插入行的引用。</li>
                    <li><strong>deleteRows(pos)</strong>：删除指定位置行。</li>
                  </ul>
                </li>
                <li>下列为 &lt;tr>元素添加的属性和方法：
                  <ul>
                    <li><strong>cells</strong>：保存着表格中 &lt;tr>元素中单元格的 HTMLCollection。</li>
                    <li><strong>insertCell(pos)</strong>：向 cells 集合中的指定位置插入一个单元格，返回对新插入单元格的引用。</li>
                    <li><strong>deleteCell(pos)</strong>：删除指定位置单元格。</li>
                  </ul>
                </li>
              </ul>
              <pre v-highlight>
<code>
  /*
  &lt;table>
    &lt;caption>我的标题&lt;/caption>
    &lt;thead>
      &lt;tr>
        &lt;th>单元格1&lt;/th>
        &lt;th>单元格2&lt;/th>
      &lt;/tr>
    &lt;/thead>
    &lt;tbody>
      &lt;tr>
        &lt;td>单元格3&lt;/td>
        &lt;td>单元格4&lt;/td>
      &lt;/tr>
      &lt;tr>
        &lt;td>单元格3&lt;/td>
        &lt;td>单元格4&lt;/td>
      &lt;/tr>
    &lt;/tbody>
    &lt;tfoot>
      &lt;tr>
        &lt;td>单元格3&lt;/td>
      &lt;/tr>
    &lt;/tfoot>
  &lt;/table>
  */
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
  name: 'dom6',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>

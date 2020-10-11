<template>
  <div class="dom-3">
    <div class="card-column">
      <div class="card-column-title">1、选择符API</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">可以通过 Document 及 Element 实例调用下面三个方法：
            <ul class="menu">
              <li><strong>querySelector()</strong> 方法：接收一个 css 选择符，返回与该模式匹配的第一个元素。若没有找到匹配的元素，返回 null。</li>
              <li><strong>querySelectorAll()</strong> 方法：接收一个 css 选择符，返回与该模式匹配的所有元素。若没有找到匹配的元素，返回一个空的 nodeList 对象。</li>
              <li><strong>matchesSelector()</strong> 方法：接收一个 css 选择符。如果存在匹配元素，则返回 true，否则返回 false。（浏览器尚未支持）</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 只返回匹配到的第一个元素
  document.querySelector('body') === document.body => true
  document.querySelector('.selected')
  document.body.querySelector('div')

  // 返回所有匹配到的元素
  document.querySelectorAll('.selected')
  document.body.querySelectorAll('div')
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、innerHTML 与 outerHTML</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul class="menu">
              <li>在读模式下，innerHTML 属性返回被调用元素子树中所有节点组成的字符串。</li>
              <li>在写模式下，innerHTML 属性设置的值会替换被调用元素子树中所有节点。</li>
              <li>在写模式下，HTML 标记会被浏览器解析。</li>
              <li>不同浏览器下，返回字符串中 HTML 标签的大小写和格式都不同。</li>
              <li>outerHTML 属性与 innerHTML 属性类似，区别在于：outerHTML 属性返回的结果中包含被调用元素本身。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 设置纯文本
  document.body.innerHTML = 'hello world'

  // 设置带有HTML标记，会被解析
  document.body.innerHTML = '&lt;div>hello world&lt;/div>'

  // 危险操作
  document.body.innerHTML = "&lt;script>alert('hello world')&lt;/script>"
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            只要是使用 innerHTML 从外部插入的 HTML，都应该以可靠的方式处理 HTML。<strong>window.toStaticHTML()</strong> 方法，接收一个 HTML 字符串，返回一个可靠的处理后的版本。
            即从源 HTML 中删除所有脚本节点和事件处理器。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var text = "&lt;div onclick='dosomething()'>";
  text += "Click me";
  text += "&lt;script>alert('hello world')&lt;/script>";
  text += "&lt;/div>"

  // 移除事件处理程序
  // 移除所有脚本节点
  // 该方法尚未得到支持
  if (window.toStaticHTML) {
    var sanitized = window.toStaticHTML(text)
    sanitized => "&lt;div>Click me&lt;/div>"
  }
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">3、innerText 与 outerText</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul class="menu">
              <li>在读模式下，innerText 属性返回被调用元素子树中包含的所有文本内容拼接组成的字符串。</li>
              <li>在写模式下，innerText 属性会删除被调用元素子树中所有节点，并插入包含相应文本值的文本节点。</li>
              <li>在写模式下，HTML 标记不会被解析，最终以纯文本内容显示。</li>
              <li>在读模式下，outerText 属性与innerText 属性返回结果完全一样。</li>
              <li>在写模式下，outerText 属性会删除元素的所有子节点，包括元素本身，并以相应文本值的文本节点插入。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 设置纯文本
  document.body.innerText = 'hello world'

  // 设置带有HTML标记，不会被解析，以纯文本显示
  document.body.innerText = '&lt;div>hello world&lt;/div>'

  // 危险操作，它会删除&lt;body>元素
  document.body.outerText = "hello world"
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">4、insertAdjacentHTML() 方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong>insertAdjacentHTML()</strong> 方法，表示插入标记。这个方法接收两个参数：第一个参数表示：插入位置；第二个参数表示：插入的 HTML文本。第一个参数必须是下列值：
            <ul class="menu">
              <li>beforebegin： 在当前元素之前插入一个相邻的同胞元素。</li>
              <li>afterend：在当前元素之后插入一个相邻的同胞元素。</li>
              <li>afterbegin： 在当前元素之下插入一个新的子元素，使其成为该元素的第一个子元素。</li>
              <li>beforeend： 在当前元素之下插入一个新的子元素，使其成为该元素的最后一个子元素。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var div = document.getElementById('div')

  div.insertAdjacentHTML('beforebegin', '<span>item</span>')
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
  name: 'dom-3'
}
</script>

<style scoped lang="stylus"></style>

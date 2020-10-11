<template>
  <div class="dom-2">
    <div class="card-column">
      <div class="card-column-title">1、Document 类型</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul class=“menu”>
              <li><strong class="bold">Document 类型</strong>表示文档。</li>
              <li>
                document 对象是 HTMLDocument（继承自 Document
                类型）的一个实例，表示整个 HTML 页面。
              </li>
              <li>
                document 对象又是 window 的一个属性，因此可以通过全局来访问。
              </li>
              <li>
                document
                对象是每个文档的根节点，即文档节点，文档节点只有一个子节点，即
                &lt;html&gt; 元素（文档元素）。
              </li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  window.document

  document.nodeType       => 9
  document.nodeName       => '#document'
  document.nodeValue      => null
  document.parentNode     => null
  document.childNodes     => [html]
  document.ownerDocument  => null
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">文档头部相关属性。</strong></div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 获取对&lt;DOCTYPE&gt;的引用
  document.doctype

  // 获取对&lt;html&gt;的引用
  document.documentElement  // 获取对&lt;html&gt;的引用

  // 获取对&lt;head&gt;的引用
  document.head

  // 文档中实际使用的字符集，默认值值为'UTP-8'
  document.charset

  // 默认浏览器或操作系统的对字符集的设置
  document.defaultCharset

  // 获取对&lt;title&gt;的引用
  document.title

  // 获取对&lt;body&gt;的引用
  document.body
</code>
            </pre>
          </div>
          <div class="card-header"><strong class="bold">节点集合。</strong></div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 文档中所有带 name 特性的&lt;a&gt;元素
  document.anchors

  // 文档中所有带 href 特性的&lt;a&gt;元素
  document.links     // 文档中所有带 href 特性的&lt;a&gt;元素

  // 文档中所有的&lt;form&gt;元素
  document.forms

  // 文档中所有的&lt;img&gt;元素
  document.images
</code>
            </pre>
          </div>
          <div class="card-header">
            网页请求相关的属性，此信息都存在于请求的 HTTP 头部。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 包含页面完整的URL
  document.URL

  // 只包含页面域名
  document.domain

  // 可能包含空字符串
  document.referrer
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">创建节点。</strong></div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var menu = document.getElementById('menu')

  // 创建元素节点
  var li = document.createElement('li')

  // 创建文本节点
  var text = document.createTextNode('hello world！')

  li.appendChild(text)
  menu.appendChild(li)
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">查找元素节点。</strong></div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 返回一个元素节点
  document.getElementById

  // 返回一个 HTMLCollection 对象
  document.getElementsByTagName

  // 返回一个 HTMLCollection 对象
  document.getElementsByClassName

  // 返回一个 NodeList 对象
  document.getElementsByName
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <ul class=“menu”>
              <li>
                <strong>write()</strong> 和
                <strong>writeln()</strong>
                这两个方法都接收一个字符串参数，即要写入到输出流的文本。
              </li>
              <li>
                write() 会原样写入，而 writeln()
                会在字符串的末尾添加一个换行符（\n）。
              </li>
              <li>
                在页面被加载的过程中，这两个方法可以向页面动态的加入内容。
              </li>
              <li>
                这两个方法还可以动态的包含外部资源，例如：javascript 脚本文件。
              </li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  document.write("在页面被加载的过程中，我被加入到页面中!")

  // 动态的载入脚本文件（&lt;\/script>用到了转义字符)
  document.write("&lt;script type='text/javascript' + src='jquery.js'>" + "&lt;\/script&gt;")
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、Element 类型</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong class="bold">元素节点。</strong><br>
            Element 类型用于表现 HTML 元素，提供了对元素标签名、子节点 及特性的访问。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 获取元素节点
  var div = document.getElementById("div")

  div.nodeType       => 1
  div.nodeName       => 'DIV'
  div.nodeValue      => null

  // 这样最好，适用于任何文档
  if (div.nodeName.toLowerCase === 'div') {
    //...
  }
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">3、ATTRIBUTE 类型</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong class="bold">属性节点。</strong><br>所有 HTML 元素都包含下列标准的属性特性：
            <ul class=“menu”>
              <li><strong class="bold">id</strong>：元素在文档中的唯一标识符。</li>
              <li><strong class="bold">className</strong>：css 类名。</li>
              <li><strong class="bold">style</strong>：css 样式。</li>
              <li><strong class="bold">title</strong>：有关元素的附加说明信息。</li>
              <li><strong class="bold">lang</strong>：元素内容的语言代码，很少用。</li>
              <li><strong class="bold">dir</strong>：语言方向。值为 ltr 或 rtl，很少用。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var div = document.getElementById('myDiv')
  div.id        => 'myDiv'
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">classList 属性。</strong><br>由于 className 的值是一个字符串，任何对 className 操作都是对这个字符串的修改。
          HTML5 新增 classList 属性是新集合类型 DOMTokenList 的实例。该实例对象具有以下属性或方法：
            <ul class=“menu”>
              <li><strong class="bold">length</strong>：列表长度。</li>
              <li><strong class="bold">value</strong>：表示类名的字符串形式。</li>
              <li><strong class="">add(str)</strong>：将给定字符串添加到列表中。若值已经存在，则不再添加。</li>
              <li><strong class="">remove(str)</strong>：从列表中删除指定字符串。</li>
              <li><strong class="">toggle(str)</strong>：若列表存在给定字符串，则删除；否则，添加。</li>
              <li><strong class="">contains(str)</strong>：表示列表中是否存在给定字符串。若存在，则返回 true；否则，返回 false。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var div = document.getElementById('myDiv')
  div.classList => DOMTokenList[]
  div.classList[0]      => 'color'
  div.classList.item(0) => 'color'
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">style 特性。</strong><br>
            在操作 CSS 样式时，需要通过 style 特性。style 对象是 CSSStyleDeclaration 类型的实例。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var div = document.getElementById('myDiv')
  div.style => CSSStyleDeclaration{}
  div.style.color => rgb(0, 0, 0)
</code>
            </pre>
          </div>
        </div>
       <div class="card">
          <div class="card-header"><strong class="bold">操作元素特性。</strong><br>
            <ul class="menu">
              <li><strong>getAttribute()</strong> 方法，可以获取元素特性。对于在 HTML 元素上没有定义的特性，返回 null。</li>
              <li><strong>setAttribute()</strong> 方法，设置元素特性值。若特性已经存在，则以指定的值替换现在的值；若特性不存在，则创建该特性并设置相应的值。</li>
              <li><strong>removeAttribute()</strong> 方法，移除元素特性。这个方法返回 undefiend。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 以上方法仅用于自定义特性的访问或设置
  // 对于非自定义特性，
  // 请使用 DOM 元素本身的属性来访问或设置新值
  var div = document.getElementById("myDiv")

  div.id = 'myDiv'

  // 设置为空表示移除
  div.className = ''

  // 自定义特性
  div.setAttribute('data-num', '1')
  div.getAttribute('data-num') => '1'
  div.removeAttribute("data-num")
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">所有 HTML 元素都有一个 <strong class="bold">attributes</strong> 属性，。该属性中保存着一个 <strong class="bold">NamedNodeMap</strong> 对象，
            这是一个类数组对象，用于保存一组有序的元素特性。 NamedNodeMap 对象是基于 DOM 结构动态执行查询的结果，
            因此 DOM 结构的变化能够自动反映在 NamedNodeMap 对象中。NamedNodeMap 对象有如下四个方法：
            <ul class="menu">
              <li><strong class="">getNamedItem(name)</strong>：返回 nodeName 属性等于 name 的节点。</li>
              <li><strong class="">setNamedItem(node)</strong>：添加节点，以节点的 nodeName 属性为索引；（很少用）。</li>
              <li><strong class="">removeNamedItem(name)</strong>：移除 nodeName 属性等于 name 的节点。它返回被移除的属性节点。</li>
              <li><strong class="">item(pos)</strong> 返回位于数字 pos 位置的节点。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var div = document.getElementById("myDiv")

  // 保存着一个动态的属性节点的集合
  div.attributes => NamedNodeMap{0: 'id', 1: 'data-num'}

  // 以下三种访问方式都是等价的
  el.attributes[0]      => id=myDiv（object 类型）
  el.attributes['id']   => id=myDiv（object 类型）
  el.getNamedItem('id') => id=myDiv（object 类型）

  // 每个类数组项都是一个属性节点
  if (el.attributes[0].nodeType === 2) {
    el.attributes[0].nodeName  => 'id'
    el.attributes[0].nodeValue => 'myDiv'
  }
</code>
            </pre>
          </div>
          <div class="card-header">
            当我们需要遍历元素特性时会用到 attributes 特性对象。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>

  function outPutAttrList(e) {
    var pairs = new Array()
    var attrName
    var attrValue
    for (var i = 0, len = e.attributes.length; i &lt; len; i++) {
      attrName = e.attributes[i].nodeName
      attrValue = e.attributes[i].nodeValue
      pairs.push(attrName + "=\"" + attrValue + "\"")
    }
    return pairs.join(" ")
  }
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">4、Text 类型</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong class="bold">文本节点。</strong><br>Text 类型用于表示纯文本内容。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var div = document.getElementsById("myDiv")

  var textNode = div.firstChild

  if (textNode.nodeType === 3) {
    textNode.nodeName  => '#text'
    textNode.nodeValue => 'this is a text'
    textNode.data      => 'this is a text'
  }

  // 文本节点没有子节点
  textNode.childNodes => []
  textNode.childNodes.length => 0
  textNode.children => undefined

  // HTML 标签以纯文本形式输出
  document.createTextNode('&lt;strong>hi&lt;/strong>hello world!')
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">操作方法。</strong>
          <ul class="menu">
            <li><strong class="">appendData(text)</strong>：将 text 添加到节点的末尾。</li>
            <li><strong class="">deleteData(pos, count)</strong>：从 pos 指定位置开始删除 count 个字符。</li>
            <li><strong class="">replaceData(pos, count, text)</strong>：用t ext 替换从 pos 位置到 pos+count 为止处的字符。</li>
            <li><strong class="">insertData(pos, text)</strong>：在 pos 指定位置插入 text。</li>
            <li><strong class="">splitText(pos)</strong>：从 pos 指定位置将当前文本分隔成两个文本。</li>
            <li><strong class="">substringData(pos, count)</strong>：提取从 pos 位置到 pos + count 为止处的字符串。</li>
          </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var div = document.getElementsById("myDiv")
  var textNode = div.firstChild

  textNode.appendData('-text')      => 'content-text'
  textNode.deleteData(0,1)          => 'ontent-text'
  textNode.replaceData(0,1,'co')    => 'content-text'
  textNode.insertData(0, 'prv-')    => 'prv-content-text'
  textNode.splitText(4)             => 'prv-' 'content-text'
  var x = textNode.substringData(0,4)       => 'prv-' 'content-text'
  x => 'prv-'
</code>
            </pre>
          </div>
        </div>
       <div class="card">
          <div class="card-header"><strong class="bold">规范化文本节点。</strong>
          <ul class="menu">
            <li> 在默认情况下，每个元素只能包含一个文本，且必须确实有内容存在。</li>
            <li>无内容，也就没有文本节点。</li>
            <li>有内容，包含一个空格，因而有一个文本节点。</li>
            <li>如果两个文本节点是相邻的同胞节点，那么这两个节点中的文本就会连起来显示，且中间不会出现空格。</li>
            <li>Node 类型定义的 normalize() 方法将相邻的同胞文本节点合并。（与splitText() 方法执行相反的操作）</li>
          </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var div = document.getElementsById("myDiv")
  var textNode = div.firstChild

  // 分隔成两个文本节点
  textNode.splitText(4)

  div.childNodes.length => 2
  div.normalize()
  div.childNodes.length => 1
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">5、DocumentFragment 类型</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">DocumentFragment 类型，表示文档片段。在所有节点类型中，只有 DocumentFragment 在文档中没有对应的 HTML 标记，DOM 规定文档片段是一种轻量化的文档，
            可以包含和控制节点，但不完全像完整的文档那样占用额外的资源。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 文档片段
  if (Node.nodeType === 11) {
    Node.nodeName   => 'document-fragment'
    Node.nodeValue  => null
    Node.parentNode => null
  }
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">不能将文档片段直接添加到文档中，但可以将它作为一个仓库老使用，即可以在里面保存将来可能会添加到文档中的节点。
          文档片段继承了 Node 的所有方法。
          <ul class="menu">
            <li>1、不能将文档片段直接添加到文档中，它相当于一个仓库，即可以在里面保存将来可能会添加到文档中的节点。</li>
            <li>2、文档片段继承了 Node 的所有方法。</li>
            <li>3、优点：不需要浏览器反复渲染新创建的元素。它将所有需要渲染的元素保存在文档片段中，然后一次性将其添加到文档中。</li>
          </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 创建文档片段
  var fragment = document.createDocumentFragment()

  var ul = document.getElementById('myList')

  for (var i = 0; i &lt; 3; i++) {
    var li = docuemnt.createElement('li')
    var text = document.createTextNode('li' + i + 1)
    li.appendChild(text)
    fragment.appendChild(li)
  }

  ul.appendChild(fragment)
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
  name: 'dom-2'
}
</script>

<style scoped lang="stylus"></style>

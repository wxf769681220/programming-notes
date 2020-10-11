<template>
  <div class="dom-1">
    <div class="card-column">
      <div class="card-column-title">1、节点类型</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul class="menu">
              <li><strong class="bold">Node.ELEMENT_NODE（1)</strong>：元素节点。</li>
              <li><strong class="bold">Node.ATTRIBUTE_NODE（2)</strong>：属性节点。</li>
              <li><strong class="bold">Node.TEXT_NODE（3)</strong>：文本节点。</li>
              <li><strong class="bold">Node.CDATA_SECTION_NODE（4)</strong>：文档中的 CDATA 部（不会由解析器解析的文本）。</li>
              <li><strong class="bold">Node.ENTITY_REFERENCE_NODE（5)</strong>：实体引用。</li>
              <li><strong class="bold">Node.ENTITY_NODE（6)</strong>：实体。</li>
              <li><strong class="bold">Node.PROCESSING_INSTRUCTION_NODE（7)</strong>：处理指令。</li>
              <li><strong class="bold">Node.COMMENT_NODE（8)</strong>：注释节点。</li>
              <li><strong class="bold">Node.DOCUMENT_NODE（9)</strong>：整个文档（DOM 树的根节点）。</li>
              <li><strong class="bold">Node.DOCUMENT_TYPE_NODE（10)</strong>：向为文档定义的实体提供接口。</li>
              <li><strong class="bold">Node.DOCUMENT_FRAGMENT_NODE（11)</strong>：轻量级的 Document 对象（文档的某个部分）。</li>
              <li><strong class="bold">Node.NOTATION_NODE（12)</strong>：DTD 中声明的符号。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、节点基本属性</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul class="menu">
              <li>每个节点都有一个 <strong class="bold"> nodeType </strong>属性，用于表示节点类型。</li>
              <li>每个节点都有一个 <strong class="bold"> nodeName </strong>属性，用于表示节点名称。</li>
              <li>每个节点都有一个 <strong class="bold"> nodeValue </strong>属性，用于表示节点相关值。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var div = document.getElementById('myDiv')

  // 元素节点
  div.nodeType   => 1
  div.nodeName   => 'DIV'
  div.nodeValue  => null

  // 属性节点
  var attr = div.getAttributeNode('id')
  attr.nodeType   => 2
  attr.nodeName   => 'id'
  attr.nodeValue  => 'myDiv'

  // 文本节点
  var text = div.firstChild
  text.nodeType   => 3
  text.nodeName   => '#text'
  text.nodeValue  => 'hello'
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">3、节点关系属性</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul class="menu">
              <li>每个节点都有一个 <strong class="bold">parentNode</strong> 属性，指向其在文档树中的父节点（除了根节点）。</li>
              <li>每个节点都有一个 <strong class="bold">childNodes</strong> 属性，指向其在文档树中的所有子节点。</li>
              <li>每个节点都有一个 <strong class="bold">firstChild</strong> 属性，指向其子节点中的第一个节点。</li>
              <li>每个节点都有一个 <strong class="bold">lastChild</strong> 属性，指向其子节点中的最后一个节点。</li>
              <li>每个节点都有一个 <strong class="bold">previousSibling</strong> 属性，指向其同胞节点中，位其前的第一个节点。</li>
              <li>每个节点都有一个 <strong class="bold">nextSibling</strong> 属性，指向其同胞节点中，位其后的第一个节点。</li>
            </ul>
          </div>
          <div class="card-header">
            创建一个 <strong>sibling()</strong> 方法：用于获取某个节点的所有同胞节点。（参照 jquery 的 sibling() 方法）
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // e 是一个dom元素节点
  function sibling(e) {
    var n = (e.parentNode || {}).firstChild
    var r = []
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== e) {
        r.push(n)
      }
    }
    return r
  }
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <p>由于 HTML 结构在换行处会自动添加额外的文本节点。可以使用下面的过滤函数，也可以使用替代属性。</p>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 过滤函数
  function delExtraTextNode(e) {
    var child = el.childNodes
    for (var i = 0; i &lt; child.length; i++) {
      if (child[i].nodeName === "#text" && !/\s/.test(child.nodeValue)) {
        el.removeChild(child[i])
      }
    }
  }
</code>
            </pre>
          </div>
          <div class="card-header">
            <ul class="menu">
              <li>childNodes      -> <strong class="bold">children</strong></li>
              <li>firstChild      -> <strong class="bold">firstElementChild</strong></li>
              <li>lastChild       -> <strong class="bold">lastChildElementChild</strong></li>
              <li>previousSibling -> <strong class="bold">previousElementSibling</strong></li>
              <li>nextSibling     -> <strong class="bold">nextElementSibling</strong></li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <ul class="menu">
              <li>childNodes 返回一个 <strong class="bold">NodeList </strong>类数组对象。而 children 返回一个 <strong class="bold">HTMLCollection </strong>类数组对象。</li>
              <li><strong class="bold">相同点：</strong>
                <ul class="menu">
                  <li>都是类数组对象。</li>
                  <li>都包含 <strong>item()</strong> 方法，用于访问类数组项。</li>
                </ul>
              </li>
              <li><strong class="bold">不同点：</strong>
              <ul>
                <li>childNodes 包含 <strong>forEach()</strong> 方法，用于遍历类数组项。</li>
                <li>HTMLCollection 包含 <strong>namedItem()</strong> 方法，用于访问特定类数组项。</li>
              </ul>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var menu = document.getElementById("menu")

  // 访问类数组项
  menu.childNodes.item(0)
  menu.children.item(0)

  // 遍历类数组
  menu.childNodes.forEach(function(item,index, arr) {
    console.log(item)
  })

  // 访问特定类数组项
  menu.children.namedItem('item')
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">4、节点操作方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header">
            <ul class="menu">
              <li><strong>appendChild()</strong> 方法：用于向 childNodes 列表的末尾添加一个节点。若被添加的节点本身是文档的一部分，则将该节点从原位置转移到新位置。DOM 更新完成后，它返回新增的节点。</li>
              <li><strong>insertBefore()</strong> 方法，用于向 childnodes 列表中的指定位置插入一个节点。它接收两个参数：要插入的节点和参照的节点。
                若参照的节点是 null，则 insertBefore() 方法与 appendChild() 方法执行相同的操作。</li>
              <li><strong>replaceChild()</strong> 方法，用于向 childnodes 列表中替换指定的节点，插入的节点占据被替换的节点位置。
                它接收两个参数：要插入的节点和被替换的节点。DOM 更新完成后，它返回从文档树中被替换的节点。</li>
              <li><strong>removeChild()</strong> 方法，用于移除节点。它接收一个参数：被移除的节点。DOM 更新完成后，它返回被移除的节点。</li>
              <li><strong>clone()</strong> 方法，用于创建某个节点的一个完全相同的副本。它接受一个布尔值，表示是否执行深复制。若为 true，则复制节点及其整个子节点树；若为 false，则只复制节点本身。</li>
              <li><strong>normalize()</strong> 方法，这个方法唯一的作用是处理文档树中的空文本节点。</li>
            </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var div = document.getElementById('div')

  div.appendChild(someNode)

  // 插入到指定位置
  div.insertBefore(someNode, null)
  div.insertBefore(someNode, aimNode)

  // 替换指定节点
  div.replaceChild(someNode, aimNode)

  // 移除指定节点
  div.removeCild(someNode)

  // 克隆
  div.cloneNode()
  div.cloneNode(true)

  // 标准化,去空文本
  div.normalize()
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong>contains()</strong> 方法，用于确定一个节点是否是另一个节点的后代。若是，则返回 true；否则，返回 false。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  document.documentElement.contains(document.body) => true
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
  name: 'dom-1'
}
</script>

<style scoped lang="stylus"></style>

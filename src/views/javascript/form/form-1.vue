<template>
  <div class="form-1" ref="form1">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、HTMLFormELement 类型</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">
              <strong>&lt;form> 元素</strong>。
            </div>
            <div class="card-body">
              <p>在 HTML 中，表单是由 &lt;form> 元素表示的。在 javascript 中，表单使用 HTMLFormELement 类型，该类型继承了 HTMLElement，因此表单与其他 HTML 元素具有相同的默认属性。
                不过 HTMLFormELement 也有自己的独有的属性和方法：</p>
              <ul>
                <li><strong>name</strong>：表单的名称。等价于 HTML 中的 name 特性。</li>
                <li><strong>action</strong>：接收请求的URL。等价于 HTML 中的 action 特性。</li>
                <li><strong>method</strong>：要发送的 http 请求类型，通常是 "get" 或 "post"，默认值是 "get"。等价于 HTML 中的 method 特性。</li>
                <li><strong>target</strong>：用于发送请求和接收响应的窗口名称。等价于 HTML 中的 target 特性。</li>
                <li><strong>acceptCharset</strong>：服务器能够处理的字符串。等价于 HTML 中的 accept-charset 特性。</li>
                <li><strong>enctype</strong>：请求的编码类型，默认值是 "application/x-www-form-urlencoded"。等价于 HTML 中的 enctype 特性。</li>
                <li><strong>autocomplete</strong>：规定表单是否应该启用自动完成功能，通常是 "on" 或 "off"，默认值是 "on"。等价于 HTML 中的 autocomplete 特性。</li>
                <li><strong>elements</strong>：表单中所有控件的集合。（HTMLFormControlsCollection 对象）</li>
                <li><strong>length</strong>：表单中控件的数量。</li>
                <li><strong>submit()</strong>：用于提交表单。</li>
                <li><strong>reset()</strong>：用于表单重置。</li>
              </ul>
              <pre v-highlight>
<code>
  /* html结构：
    &lt;form
      name="myForm"
      action=""
      method="get"
      target=""
      acceptCharset=""
      enctype="application/x-www-form-urlencoded"
      autocomplete="on"
    >
      //...
    &lt;/form>
  */

  var form = document.forms

  // 获取对表单元素的引用
  form[0] === form['myForm'] => true

  // 表单字段长度
  form[0].length => 3
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>FormData 类型。</strong>
            </div>
            <div class="card-body">
              <p>XMLHttpRequest 2级定义一个 FormData 类型。
                FormData 为序列化表单以及创建与表单格式相同的数据（用于通过 XHR 传输）提供了便利。
                它不必明确地在 XHR 上设置请求头部，XHR 对象可以识别传入的数据类型是 FormData 的实例，并自动配置适当的头部信息。</p>
              <pre v-highlight>
<code>
  var xhr = createXHR()

  // 实例化对象
  var data = new FormData()

  // 传入键与值
  data.append("myname", "lee")
  data.append("myage", 20)

  // 通过XHR传输与表单格式相同的数据
  xhr.send(data)

  ///////////////////////////////////////////////////////

  // XHR 对象可以识别传入的数据类型是 FormData 的实例
  // 并自动配置适当的头部信息
  var xhr = createXHR()

  var myForm = document.forms("myForm")
  var data = new FormData(myForm)

  xhr.send(data)
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、表单提交</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>只要表单中存在以下任何一种按钮，那么在表单任意元素拥有焦点的情况下，按下回车就可以提交表单。（textarea 是个例外，它只换行不提交表单）</p>
              <pre v-highlight>
<code>
  /*
    &lt;input type="submit" />
    &lt;button type="submit">提交表单&lt;/button>

    // 需要浏览器支持
    &lt;img type="image" src=""/>
  */
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>submit 事件</strong>。
            </div>
            <div class="card-body">
              <p>在用户提交表单时，浏览器会在将请求发送给服务器之前触发 submit 事件。这样我们就可以在表单提交之前验证表单数据，并决定是否允许表单的提交。
                阻止这个事件的默认行为，就可以直接取消表单的提交。</p>
              <pre v-highlight>
<code>
  var form = document.forms['myForm']

  // 这里取消了表单提交
  EventUtil.addHandler(form, 'submit', function(event) {
    event = EventUtil.getEvent(event)
    EventUtil.preventDefault(event)
  })
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">submit() 方法</strong>。
            </div>
            <div class="card-body">
              <p>在用户提交表单时，浏览器会在将请求发送给服务器之前触发 submit 事件。这样我们就可以在表单提交之前验证表单数据，并决定是否允许表单的提交。
                阻止这个事件的默认行为，就可以直接取消表单的提交。</p>
              <pre v-highlight>
<code>
  var form = document.forms['myForm']

  // 提交表单
  form.submit()
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、表单重置</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>用户单击重置按钮，表单字段就会恢复到页面刚加载完毕时的初始值。</p>
              <pre v-highlight>
<code>
  /*
    // 重置按钮
    &lt;input type="reset" value="重置input值" />

    &lt;button type="reset">重置&lt;/button>
  */
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong>reset 事件</strong>。
            </div>
            <div class="card-body">
              <p>用户单击重置按钮时，就会触发 reset 事件。与 submit 一样，阻止这个事件的默认行为，就可以直接取消表单的重置操作。</p>
              <pre v-highlight>
<code>
  var form = document.forms['myForm']

  EventUtil.addHandler(form, 'reset', function(event) {
    event = EventUtil.getEvent(event)
    EventUtil.preventDefault(event)
  })
</code>
              </pre>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <strong class="danger">reset() 方法</strong>。
            </div>
            <div class="card-body">
              <p>调用 reset() 方法，实现表单重置。与 submit() 方法不同的是：调用 reset() 方法会触发 reset 事件。</p>
              <pre v-highlight>
<code>
  var form = document.forms['myForm']

  // 表单重置
  form.reset()
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、表单序列化</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>在 javascript 中，可以利用表单的 type 属性，连同 name 和 value 属性一起实现对表单的序列化。在表单提交期间，浏览器是如何将数据发送给服务器的：</p>
              <ol>
                <li>对表单字段的名称和值进行 URL 编码，使用和号（&）分隔。</li>
                <li>不发送禁用的字段。</li>
                <li>不发送 type 为 "reset" 和 "button" 的按钮。</li>
                <li>只发送勾选的复选框和单选框。</li>
                <li>多选选择框中的每个选中的值单独一个条目。</li>
                <li>&lt;select> 元素的值，就是选中的 &lt;option> 元素的 value 特性的值。若 &lt;option> 元素没有 value 值，则是 &lt;option> 元素的文本值。</li>
                <li>在用户单击提交按钮提交表单时，也会发送提交按钮。若用户不是通过单击提交按钮，像通过 submit() 方法实现表单提交的情况， 则不发送提交按钮（包括 type 为 "image" 的 &lt;input> 元素）。</li>
              </ol>
              <pre v-highlight>
<code>
  // 表单序列化
  function serialize(form, output) {
    var parts = output === "object" ? {} : [],
      field = null,
      i,
      len,
      j,
      optLen,
      option,
      optValue;

    for (i = 0, len = form.elements.length; i &lt; len; i++) {
      field = form.elements[i];
      switch (field.type) {
        case "select-one":
        case "select-multiple":
          if (field.name.length) {
            for (j = 0, optLen = field.options.length; j &lt; optLen; j++) {
              option = field.options[j];
              if (option.selected) {
                optValue = "";
                if (option.hasAttribute) {
                  optValue = (option.hasAttribute("value") ? option.value : option.text);
                } else {
                  optValue = (option.attributes["value"].specified ? option.value : option.text);
                }
                // 输出格式
                if (output === "object") {
                  parts[field.name] = optValue
                } else {
                  parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
                }
              }
            }
          }
          break;
        case undefined:
        case "file":
        case "submit":
        case "reset":
        case "button":
          break;
        case "radio":
        case "checkbox":
          if (!field.checked) {
            break;
          }
        // 执行默认操作
        default:
          if (field.name.length) {
            if (output === "object") {
              parts[field.name] = field.value
            } else {
              parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
            }
          }
      }
    }
    if (output === "object") {
      return parts;
    }
    return parts.join("&");
  }
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
  name: 'form1',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>

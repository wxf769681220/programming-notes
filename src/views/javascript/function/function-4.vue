<template>
  <div class="function-4" ref="function4">
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">1、模仿块级作用域</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>javascript 中没有块级作用域。但可以通过定义函数创建一个私有作用域来模仿块级作用域。</p>
              <pre v-highlight>
<code>
  // 没有块级作用域
  for (var i = 0; i &lt; 10; i++) {}
  i => 10

  // 模仿块级作用域
  (function() {
    var j;
    for (j = 0; j &lt; 10; j++) {}
  })();
  j => error
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">2、私有变量</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ol>
                <li>任何在函数中定义的变量，都可以认为是私有变量，且不能在函数的外部访问这些变量。</li>
                <li>有权访问私有变量和私有函数的公有方法称为<strong>特权方法</strong>。</li>
              </ol>
              <pre v-highlight>
<code>
  function Fn() {
    // 私有变量
    var privateVariable = 10

    // 私有函数
    function privateFn() {
      return privateVariable
    }

    // 特权方法
    this.publicMethod = function() {
      privateVariable++
      return privateFn()
    }
  }
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">3、静态私有变量</div>
        <div class="card-group">
          <div class="card">
            <div class="card-header">基本模式。</div>
            <div class="card-body">
              <pre v-highlight>
<code>
  (function() {
    // 私有变量
    var privateVariable = 10

    // 私有函数
    function privateFn() {
      //...
    }

    // 构造函数（函数表达式）
    // 没有使用 var 声明
    // 这样就可以在全局调用该构造函数了
    Fn = function() {
      this.name = "alex"
    }

    // 在原型上创建特权方法
    Fn.prototype.publicMethod = function () {
      privateFn()
      return privateVariable++
    }
  })();

  // 实例化对象（全局调用）
  var f = new Fn("alex")
  f.name = "alex"
  f.publicMethod() => 10
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">4、单例模式（singleton pattern）</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <ol>
                <li>单例，指的就是只有一个实例的对象。</li>
                <li>单例模式：保证某个类型仅有一个实例，并提供一个访问它的全局访问点。</li>
              </ol>
              <pre v-highlight>
<code>
  var o = (function() {
    // 私有变量
    var username = 'lee'
    var age = 24

    // 私有函数
    function privateFn() {
      return 'hello world!'
    }

    // 返回一个对象
    // 该对象提供一些特权方法用于访问该私有域中的私有变量或函数
    return {
      getUsername: function() {
        return username
      },
      getAge: function() {
        return age
      },
      say: function() {
        return privateFn
      }
    }
  })();

  // 只能通过公共方法获取私有变量
  o.getUsername() => 'lee'
  o.getAge()      => 24
  o.say()()       => 'hello world!'
</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-content">
        <div class="card-column-title">5、单例模式的增强</div>
        <div class="card-group">
          <div class="card">
            <div class="card-body">
              <p>单例模式的增强要求单例必须是某种类型的实例，同时还必须添加某些属性或方法对其加以增强。</p>
              <pre v-highlight>
<code>
  var o = (function () {
    // 私有变量
    var username = 'lee'
    var age = 24

    // 创建自定义类型的对象
    function CustomType() {
      //...
    }

    // 添加原型属性加以增强
    CustomType.prototype.getUsername = function () {
      return username;
    }

    CustomType.prototype.getAge = function () {
      return age;
    }

    // 实例化对象
    var user = new CustomType()

    // 添加实例属性增强
    user.username = username;
    user.age = age;

    // 返回这个对象
    return user
  })();

  o.username      => "lee"
  o.age           => 24
  o.getUsername() => "lee"
  o.getAge()      => 24
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
  name: 'function4',
  mixins: [reflowerMixins]
}
</script>

<style scoped lang="stylus">
</style>

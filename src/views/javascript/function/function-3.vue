<template>
  <div class="function-3">
    <div class="card-column">
      <div class="card-column-title">1、函数的模块设计</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong class="bold">作用域。</strong><br>
            javascript 中没有块级作用域。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 没有块级作用域
  for (var i = 0; i &lt; 10; i++) {
    //...
  }
  i => 10

  // 相当于
  var i = 0
  for (/* empty */; i &lt; 10; i++) {
    //...
  }
  i => 10
</code>
            </pre>
          </div>
          <div class="card-header"><strong class="bold">私有作用域。</strong><br>
            定义一个私有作用域，来仿块级作用域。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  (function() {
    var i = 0
    for (/* empty */; i &lt; 10; i++) {
      //...
    }
  })();

  i => error
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">私有变量。</strong>任何在函数中定义的变量，都可以认为是私有变量。因为不能在函数的外部访问这些变量。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 创建一个私有作用域
  (function() {
    // 私有变量
    var privateVariable = 10

    // 私有函数
    function privateFn() {
      //...
    }

    // 没有使用 var 声明构造函数的函数表达式
    // 这样就可以在全局调用该构造函数了
    Fn = function() {
      this.name = "alex"
    }

    // 特权方法
    Fn.prototype.publicMethod = function () {
      privateFn()
      return privateVariable++
    }
  })();

  // 实例化对象（全局调用）
  var x = new Fn("alex")
  x.name = "alex"
  x.publicMethod() => 10
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">2、单例模式（singleton pattern）</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong class="bold">单例</strong>：指的就是只有一个实例的对象。<strong class="bold">单例模式</strong>：保证某个类型仅有一个实例，并提供一个访问它的全局访问点。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 单例模式
  var o = (function() {
    // 私有变量
    var username = 'lee';
    var age = 24;

    // 私有函数
    function privateFn() {
      //...
    }

    // 公共方法
    return {
      getUsername: function() {
        return username
      },
      getAge: function() {
        return age
      }
    }
  })();

  // 只能通过公共方法获取私有变量
  o.getUsername() => 'lee'
  o.getAge()      => 24
</code>
            </pre>
          </div>
          <div class="card-header"><strong class="bold">单例模式增强。</strong>返回对象之前对其增强，单例必须是某种类型的实例，同时还必须添加某些属性或方法对其加以增强。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var o = (function () {
    // 私有变量
    var username = 'lee';
    var age = 24;

    // 创建自定义类型对象
    function CustomType() {
      //...
    }

    // 添加原型属性增强
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
    <div class="card-column">
      <div class="card-column-title">3、高级函数</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong class="bold">作用域安全的构造函数。</strong><br>
            作用域安全的构造函数，首先要确认 this 对象是正确类型的实例。若不是，则会创建新的实例并返回。作用域安全的构造函数不会影响原型链的继承。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
 /**
  * 无论是作为构造函数调用还是作为普通函数调用
  * 都会返回一个 Person 的新实例
  * 从而避免在全局对象上意外设置属性
  */
  function Person(name, age) {
    if (this instanceof Person) {
      this.username = name;
      this.age = age;
      this.friends = ["f1", "f2", "f3"]
    } else {
      return new Person(name, age)
    }
  }
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">惰性载入函数。</strong><br>
            函数体中包含大量的 if 语句，每次调用函数时，都要对 if 语句的每个分支进行检查。
            实际上对于某些函数来说，在第一次调用时，if 语句的某个分支可以决定结果的， 就不需要每次调用函数时都去执行 if 语句再去检查各个分支。比如：createXHR() 函数。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  /**
   * 惰性载入函数的实现
   * if 语句的每一个分支都会为 createXHR 变量赋值
   * 若某个分支可以决定结果，则用新赋值的 createXHR 变量覆盖了原有的函数
   * 最后返回调用这个新赋 createXHR 函数
   */
  function createXHR() {
    if (typeof XMLHttpRequest !== "undefined") {
      createXHR = function() {
        return new XMLHttpRequest()
      }
    } else if (typeof activeXObject !== "undefined") {
      createXHR = function() {
        if (typeof arguments.callee.activeXString !== "string") {
          var versions = ["MSXML2.XMLHttp", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp.6.0"]
          for (var i = 0, len = versions.length; i &lt; len; i++) {
            try {
              new  ActiveXObject(versions[i])
              arguments.callee.activeXString = versions[i]
              break
            } catch (ex) {
              //跳过
            }
          }
        }
        return new ActiveXObject(arguments.callee.activeXString)
      }
    } else {
      createXHR = function() {
        throw new Error("No XHR object available")
      }
    }
    return createXHR()
  }
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">4、对象保护函数</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong class="bold">防篡改对象。</strong><br>
            默认状况下，所有对象都是可自由扩展属性或方法的。<strong>Object.preventExtensions(object)</strong> 方法可以改变这个行为，即不能再为对象添加属性和方法。对于对象已有属性则丝毫不受影响。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var obj = {
    color: "red"
  }

  // 对象不可扩展
  Object.preventExtensions(obj)

  // 静默失败
  obj.username = "alex"

  // 抛出错误
  Object.defineProperty(obj, "username", {
    writable: true,
    value: "alex"
  })

  // 检测对象是否可以扩展的方法
  Object.isExtensible(obj) => false
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">密封对象。</strong><br>
           密封对象，即对象不可扩展，且已有属性 [[Configurable]] 特性将被设置为 false，这意味着无法通过 delete 操作符删除属性；不能把属性修改为访问器属性。
           （注意属性值是可以修改的） 密封对象使用 <strong>Object.seal()</strong> 方法。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var obj = {
    color: "red"
  }

  // 对象不可扩展，
  // 对象不可删除
  // 不可将其修改为访问器属性
  Object.seal(obj);

  // 属性值可以修改
  Object.defineProperty(obj, "color", {
    writable: true,
    value: "green"
  })

  obj.color => "green"

  // 检测对象是否被密封了的方法
  Object.isSealed(obj) => true
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong class="bold">冻结对象。</strong><br>
            冻结对象，即对象不可扩展，又是密封对象，且对象 [[writable]] 特性将被设置为 false。（注意若定义 [[set]] 函数，访问器属性仍然是可写的） 冻结对象使用 <strong>Object.freeze()</strong> 方法。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var obj = {
    color: "red"
  }

  Object.defineProperty(obj, "change", {
    configurable: true,
    enumerable: true,
    get: function() {
      return "yellow";
    },
    set: function (value) {
      if (value === "green") {
        console.log(value) => "green"
        // 修改属性值无效
        this.color = "blue";
      }
    }
  })

  Object.freeze(obj);

  // 访问器属性，属性值可写
  obj.change = "green"

  obj.color => "red"
  obj.change => "yellow"

  // 数据属性，抛出错误
  Object.defineProperty(obj, "color", {
    writable: true,
    value: "green"
  })
</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="card-column">
      <div class="card-column-title">5、函数内置方法</div>
      <div class="card-group">
        <div class="card">
          <div class="card-header"><strong>Function.call()</strong> 方法。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var obj = {
    name: "alex",
    age: 24
  }

  function fn() {
    return this.name + this.age
  }

  // 间接调用函数
  // 该函数内部 this 指向 obj
  fn.call(obj) => "alex24"
</code>
            </pre>
          </div>
          <div class="card-header">函数作为某个对象的一个方法调用 call() 方法。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var obj = {
    name: "alex",
    age: 24,
    say: function() {
      return this.name + this.age
    }
  }

  var o = {
    name: "lee",
    age: 20
  }

  // 该函数内部 this 指向 o 对象
  obj.say.call(o) => "lee20"
</code>
            </pre>
          </div>
          <div class="card-header">带参数的 call() 方法。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var obj = {
    name: "alex",
    age: 24,
    say: function(a) {
      return this.name + this.age + a
    }
  }

  var o = {
    name: "lee",
    age: 20
  }

  // 追加任意数量的参数
  obj.say.call(o, 10) => "lee2010"
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong>Function.apply()</strong> 方法。
            与 call() 方法用法一样。区别是：它接受数组形式的参数。
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var obj = {
    name: "alex",
    age: 24,
    say: function(a, b) {
      return this.name + this.age + (a + b)
    }
  }

  var o = {
    name: "lee",
    age: 20
  }

  // 参数以数组的形式传入
  obj.say.apply(o, [1, 2]) => "lee203"
</code>
            </pre>
          </div>
          <div class="card-header">若 apply() 的第一个参数不是对象，在非严格模式下与严格模式下的行为不一样。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  var obj = {
    name: "alex",
    age: 24,
    say: function (a, b) {
      // 非严格模式与严格模式下有所区别
      console.log(this)
      return this.name + this.age + (a + b)
    }
  }

  var o = 1

  obj.say.apply(o, [1,2]) => "NaN"
</code>
            </pre>
          </div>
        </div>
        <div class="card">
          <div class="card-header"><strong>Function.bind()</strong> 方法。
          <ul>
            <li>ECMAScript5 为所有函数定义了一个 bind() 方法，该方法创建一个新函数。</li>
            <li>这个新函数的 this 被指定为 bind() 的第一个参数。而其余参数将作为新函数的参数，供调用时使用。</li>
            <li>返回一个原函数的拷贝（新函数），并拥有指定的 this 值和初始参数。</li>
          </ul>
          </div>
          <div class="card-body">
            <pre v-highlight>
<code>
  /**
   * 有的时候我们需要将一个对象的某个方法单独拿出来使用
   * 由于作用域发生了变化，函数中的 this 不再指向当前对象
   * 若函数在全局作用域下被调用，则函数中的 this 指向 window
   * 这时我们需要将其绑定到特定对象上
   */

  // 全局变量
  var name = 'alex'
  var age = 24

  // 对象属性
  var person = {
    name: "lee",
    age: 20
  }

  var obj = {
    name: "alex",
    age: 24,
    say: function(a) {
      return this.name + this.age + "-" + a
    }
  }

  // 获取对象某个方法的引用
  var f = obj.say

  // 在全局作用域调用
  f(100) => "alex24-100"

  // 将新函数的作用域绑定到特定对象
  var foo = f.bind(person, 100)
  foo() => "lee20-100"
</code>
            </pre>
          </div>
         <div class="card-header">函数绑定常常与回调函数、事件处理器一起使用，将函数作为变量传递的同时保留代码执行环境。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // var myDiv = document.getElementById("div")

  var person = {
    name: "lee",
    age: 20,
    say: function() {
      console.log(this.name + this.age) => NaN / "lee20"
    }
  }

  // 将函数指针以值的形式进行传递
  // 此时 this 指向 myDiv 元素，结果输出 NaN
  EventUtil.addHandler(myDiv, 'click', person.say)

  // 使用函数绑定 bind() 方法，
  // 然后将函数指针以值的形式进行传递
  // 此时 this 指向 person 对象, 结果输出 "lee20"
  EventUtil.addHandler(myDiv, 'click', person.say.bind(person))
</code>
            </pre>
          </div>
          <div class="card-header">自定义函数的 bind() 绑定方法。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  // 自定义绑定函数并传参
  function myBind(fn, obj) {
    return function() {
      return fn.apply(obj, arguments)
    }
  }
</code>
            </pre>
          </div>
          <div class="card-header">函数柯里化。其基本方法与函数绑定时一样的。主要区别在于：当函数被调用时，返回的函数还需要设置一些传入的参数。
            javascript 原生 bind() 方法已实现函数柯里化。</div>
          <div class="card-body">
            <pre v-highlight>
<code>
  function foo(num1, num2) {
    return num1 + num2
  }

  function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1)
    return function() {
      var innerArgs = Array.prototype.slice.call(arguments, 0)
      var finalArgs = args.concat(innerArgs)
      return fn.apply(null, finalArgs)
    }
  }

  var y = curry(foo, 5, 5)
  y() => 10
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
  name: 'function-3'
}
</script>

<style scoped lang="stylus"></style>

Number_MIN_VALUE ECMAScript 能够表示的最小数值，超出这个数值范围的值，则会自动转换为特殊的 Infinity 值。
Number_MAX_VALUE ECMAScript 能够表示的最大数值，超出这个数值范围的值，则会自动转换为特殊的 -Infinity 值。
isFinity() 当一个数值位于最小值与最大值之间时会返回 true。
isNaN() 非数值。任何不能转换为数值的值会导致该函数返回 true。


#6.for-in 语句
for-in 语句用来枚举对象属性。
for (var prop in o) {
//输出每个属性的值
console.log(o[prop]);
}
枚举对象属性并将其放进一个数组中。
var o = { x: 1, y: 2, z: 3 };
var arr = [];
var i = 0;
for (arr[i++] in o) /* empty */ ;
arr => ['x', 'y', 'z']

# 自定义类型识别
instanceof




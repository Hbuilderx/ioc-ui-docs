- 在源码中，我用到了lodash的一个公共函数merge,它表示递归合并来源对象自身和继承的可枚举属性到目标对象。后续的来源对象属性会覆盖之前同名的属性

- 另外一个函数是isEmpty，当我传入的业务数据为空时，比如空数组[]、undefined、null时，都会被认为这是一个无数据的情况，这时候我们就展示一个空状态的组件，它可能由一张背景图构成(可选)；

- 在绑定到具体的DOM元素时，没有用querySelector选择器去选择一个类或者是用Math.random生成的id，因为这两者都不是绝对可靠的，这里直接使用当前vue实例关联的根DOM 元素$el

- 监听窗口大小的变化，并为这种情况添加对应的事件处理函数--echarts自带的resize方法，使echarts图形不会变形
将对应DOM的宽高设为100%，让其大小完全由使用者提供的容器控制

- setOption方法的第二个参数表示传入的新option是否不与之前的旧option进行合并，默认居然是false，即合并。这显然不行，我们需要每次的业务配置都是完全独立的
命名非常语义化，一看就懂

- 保留了自己需要单独配置一些定制样式的灵活性，即extraOption

- 此外，图表的类型`type`，这里需要自己填入，一是为了区分多个图表，而是防止初始化时Echarts报错，当然也可以在`extra-option`里重新指定`type`
# randInt

### randInt(min: Number, max: Number): Number
- 参数
  - `min` 最小值
  - `max` 最大值
- 返回
  - 随机值

获取指定范围的随机整数

```js
import randInt from 'your/src/randInt'

// 正常传入 [10, 20]
randInt(10, 20)

// 支持负数 [-10, 20]
randInt(-10, 20)

// 从大到小 [20, 30]
randInt(30, 20)

// 带小数和字符串的参数，会自动转为整数 [-1, 3]
randInt(3.1, '-1.2')
```

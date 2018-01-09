# @your/rand-int

## API

### randInt(min: Number, max: Number): Number
获取指定范围的随机整数

## Example
```bash
npm i @your/rand-int
```
```js
import randInt from '@your/rand-int'
```

- 支持负数，返回 `[-10, 20]` 之间的随机整数
```js
randInt(-10, 20)
``` 

- 两个参数从大到小也可以，返回 `[20, 30]` 之间的随机整数
```js
randInt(30, 20)
```

- 支持带小数和字符串的参数，会自动转为整数
```js
randInt(3.1, '-1.2')
```

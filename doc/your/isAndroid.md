# isAndroid

### isAndroid([userAgent: String]): Boolean
- 参数
  - `userAgent` 浏览器 ua 信息。默认：取当前环境 ua
- 返回
  - 是否安卓环境

判断当前是否安卓浏览器环境

```js
import isAndroid from 'your/src/isAndroid'

// 当前环境
isAndroid()

// 手动传入
isAndroid('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36')
```


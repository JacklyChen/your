# isWeixin

### isWeixin([userAgent: String]): Boolean
- 参数
  - `userAgent` 浏览器 ua 信息。默认：取当前环境 ua
- 返回
  - 是否微信环境

判断当前是否微信浏览器环境

```js
import isWeixin from 'your/src/isWeixin'

// 当前环境
isWeixin()

// 手动传入
isWeixin('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36')
```


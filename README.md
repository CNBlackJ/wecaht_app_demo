# 基于Node.js实现的微信公众平台鉴权demo

使用教程参考[这里](https://zhuanlan.zhihu.com/p/363061778)

## 安装

`npm i`

## 配置

`mv config/config_examle.js config/index.js`

修改对应的`appid`、`secret`

## 运行

`npm run dev`

## 测试

`curl -XGET http://127.0.0.1:8080/signature`

成功返回
```json
{"noncestr":"IamARanDomSecret","timestamp":1617808383,"jsapi_ticket":"LIKLckvwlJTxxxxxxxxxxx-_RhlLe19EaTUq-xxxx8QLf87YvEQyJIC59-jvQfVxxxx","signature":"9aee343fb0655cda1aa40d0xxxxxxxx9c07675"}
```

# multi-hostname-vue-cli

> 针对不同的域名进行打包和开发。

## Start up

#### clone && npm install
#### 修改配置文件 /config/host-config.js,只需要修改 ENV_LIST

```
/*
* 环境列表，第一个环境为默认环境
* envName: 指明现在使用的环境
* dirName: 打包的路径，只在build的时候有用
* apiHostname: 这个环境下面的api 请求的域名
* assetHostname: 静态资源存放的域名
* */
const ENV_LIST = [
  {
    envName: 'test',
    dirName: 'test',
    apiHostname: 'http://test_apiHostname',
    assetHostname: 'http://localhost:3004'
  },
  {
    envName: 'pro',
    dirName: 'pro',
    apiHostname: 'http://product_apiHostname',
    assetHostname:'http://product_assetHostname'
  },
  {
    envName: 'qa',
    dirName: 'qa',
    apiHostname: 'http://product_apiHostname',
    assetHostname:'http://product_assetHostname'
  }
]
```

####	在文件中使用hostname

```javascript
const HOST_NAME = process.env.HOST_NAME
export {HOST_NAME}
```

#### dev 开发调试
> npm run dev [envName]

* envName 为上面配置的envName，对应的process.env.HOST_NAME的值就是 对应的ENV_LIST中的hostname
* 不指定envName默认选择ENV_LIST的第一个值
* envName 不在ENV_LIST 中的时候默认选择 ENV_LIST的第一个值

```bash
# 例子：
# 在qa的环境中调试，process.env.HOST_NAME === 'http://qa_hostname'
npm run dev qa
```

#### build 打包
> npm run build [envName] //打指定环境的包
>
> npm run build-all // 全部重新打包

* 打包的envName与 dev类似
* 执行打包命令会在dist文件夹中生成对应的路径

```
dist
    |-test
    |-qa
    |-pro
```

## 对比vue-cli生成的环境修改的地方
#### 新增 `/config/host-conf.js`
> [host-conf.js](https://github.com/vincentmrlau/multi-hostname-vue-cli/blob/master/config/host-conf.js)

#### 修改 `/config/index.js`
* 修改build的路径
* 修改build的静态资源的路径

#### 修改 `/build/webpack.base.conf.js
* 添加 用户客户端的环境变量
```
// 通过webpack传入客户端中
  plugins: [
    new webpack.DefinePlugin({
      'process.env.HOST_NAME': '\"' + process.env.HOST_NAME + '\"'
    })
  ]
```

#### 入口`build/build.js`和`build/dev-server.js`设置环境变量
```javaScript
// 设置域名的环境变量
process.env.HOST_ENV = process.argv[2]
```

#### 新增 `build/build-all.js`
> [host-conf.js](https://github.com/vincentmrlau/multi-hostname-vue-cli/blob/master/build/build-all.js)

#### 修改`package.json`的script


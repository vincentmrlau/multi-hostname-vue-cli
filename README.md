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
* hostname: 这个环境下面的hostname
* */
const ENV_LIST = [
  {
    envName: 'test',
    dirName: 'test',
    hostname: 'http://test_hostname'
  },
  {
    envName: 'pro',
    dirName: 'pro',
    hostname: 'http://product_hostname'
  },
  {
    envName: 'qa',
    dirName: 'qa',
    hostname: 'http://qa_hostname'
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
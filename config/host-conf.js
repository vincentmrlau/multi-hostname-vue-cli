/**
 * Created by liuyiman on 2017/7/12.
 * 公司的接口环境有好几个，不同环境要不同的包，因此打包和开发的时候需要配置一下
 */
'use strict'
const chalk = require('chalk')

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

const HOST_ENV = process.env.HOST_ENV
let HOST_CONF
if ( HOST_ENV === undefined ) {
  // 没有设置环境，则默认为第一个
  HOST_CONF = ENV_LIST[0]
  console.log(chalk.bgYellow('缺少参数，默认使用 host-conf.js 的 ENV_LIST的第一个参数'))
} else {
  for (let i = 0; i < ENV_LIST.length; i++) {
    if ( ENV_LIST[i].envName === HOST_ENV) {
      HOST_CONF = ENV_LIST[i]
      break
    }
  }
}
// 如果没有匹配，发出警告，使用第一个
if( HOST_CONF === undefined) {
  HOST_CONF = ENV_LIST[0]
  console.log(chalk.bgRed('参数错误，默认使用 host-conf.js 的 ENV_LIST的第一个参数'))
  console.log(chalk.red('参数错误，默认使用 host-conf.js 的 ENV_LIST的第一个参数'))
}
// 把apiHostname设置到 node 的环境中 方便客户端使用
process.env.HOST_NAME = HOST_CONF.apiHostname

// log选中的变量
console.log(chalk.green('选中的参数为：'))
console.log(HOST_CONF)

module.exports.HOST_CONF = HOST_CONF
module.exports.ENV_LIST = ENV_LIST

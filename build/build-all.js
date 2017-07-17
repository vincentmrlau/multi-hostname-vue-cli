/**
 * Created by liuyiman on 2017/7/12.
 * 打所有环境的包
 */

'use strict'

// npm install child_process --save-dev
var execFileSync = require('child_process').execFileSync;
var path = require('path')
var ENV_LIST = require('./../config/host-conf').ENV_LIST
console.log(ENV_LIST)
var buildFile = path.join(__dirname, 'build.js')

for( var x in ENV_LIST){
  console.log('building :',ENV_LIST[x].envName)
  execFileSync( 'node', [buildFile, ENV_LIST[x].envName], {

  })
}

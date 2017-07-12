/**
 * Created by liuyiman on 2017/7/12.
 * 打所有环境的包
 */

'use strict'

// npm install child_process --save-dev
var execFileSync = require('child_process').execFileSync;
var path = require('path')
var EVN_LIST = require('./../config/host-conf').EVN_LIST
console.log(EVN_LIST)
var buildFile = path.join(__dirname, 'build.js')

for( var x in EVN_LIST){
  console.log('building :',EVN_LIST[x].envName)
  execFileSync( 'node', [buildFile, EVN_LIST[x].envName], {

  })
}

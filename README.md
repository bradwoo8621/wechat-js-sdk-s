# wehcat-js-sdk-s
## EN
Shadow for Wechat Javascript SDK, NPM purpose.  
Version is same as Wechat Javascript SDK itself.

## 中文
微信Javascript SDK影子版, 为了能够从NPM中引入而存在.  
版本与微信Javascript SDK的版本是一致的.  

# What is changed (改动了什么?)
## EN
* `wechat.js` is the original javascript file from wechat.
* Change `this` to `window` in original js file for webpack packaging.
* `index.js` add ES6 supporting.

## 中文
* `wechat.js`是原始的微信文件.
* 为了使用`webpack`打包, 源文件中的`this`被改成`window`.
* `index.js`添加了ES6支持.

# Note (注意)
## EN
* The original SDK doesn't support the Node environment, so there is no test script.
* `wechat.js` is pretty formatted by VSCode plugin `prettier`.

## 中文
* 原生的SDK不支持NODE环境, 所以没有测试脚本.
* 使用VSCode的`prettier`插件格式化了原始`wechat.js`文件.

# Versions Supported (支持的版本)
There are many libs for this purpose in npm, but with different version. This lib is try to let your find all wechat versions in one lib.  
NPM已经上有很多相同目的的库, 但是版本不一致, 因此本库的目的在于可以在一个库中找到不同的版本.  

Supported versions as below:  
本库的版本支持的版本如下:  
* `1.2.0`
* `1.2.1`
* `1.2.2`
* `1.3.0`

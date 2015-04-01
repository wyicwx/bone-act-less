# bone-act-less
> bone的less处理器

### 安装及使用

通过npm安装

```sh
$ npm install bone-act-less 
```

安装后在`bonefile.js`文件内通过`act()`加载

```js
var bone = require('bone');
var less = require('bone-act-less');

bone.dest('dist')
	.src('~/src/css/*.less')
	.act(less);
```

传递参数的调用方法

```js
bone.dest('dist')
	.src('~/src/css/*.less')
	.act(less({
		ieCompat: false
	}));
```

bone-act-less是将less编译器包装成bone可用的处理器，参数查询请参考[less](https://github.com/less/less.js)

### 其他

处理器开发以及使用请参考[处理器](https://github.com/wyicwx/bone/blob/master/docs/plugin.md)

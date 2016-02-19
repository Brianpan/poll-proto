# React/Reflux 投票系統前端
====
##Getting Started

---

```
	> npm install
	> npm run dev
```

====
## Memo
---
## 安裝package
```
npm install react react-router react-dom webpack wepack-dev-server \
			react-hot-loader babel-core babel-loader jsx-loader history --save

# webpack live reload
entry 加上 'webpack-dev-server/client?http://localhost:8080'
		   'webpack/hot/only-dev-server'

# 安裝lodash, reflux, fetch
npm install --save lodash reflux whatwg-fetch

# 一些cheatsheets 
http://runfastlynda.com/%E5%8D%9A%E5%AE%A2/2015/11/18/learn-react-2.html

## 在 module - loader下面
{
	test: /\.jsx$/,
	loaders: ['react-hot-loader', 'babel-loader', 'jsx-loader']
}

## html 裡面加上
<script src="http://localhost:8080/webpack-dev-server.js"></script>	

## package.json
"dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"
```


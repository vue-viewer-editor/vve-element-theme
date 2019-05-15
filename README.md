vve element theme

> vve支持的 element 主题

[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

## 目前主题有
- vve-te-00A1B7

## element ui主题
-如果需要新增element主题，配合[官方文档](https://element.eleme.cn/#/zh-CN/component/custom-theme)制作主题
-删除 除index.css其他文件，并修改index.css文件名为index.scss，添加main.scss，main.js，参考element-00A1B7目录

## 安装

### npm安装使用

```bash
npm install vve-element-theme
```

引入样式
```bash
import 'vve-element-theme/dist/element-00A1B7.css'
```

如果你的项目支持sass，你可以直接引用
```bash
import 'vve-element-theme/src/element-00A1B7/main.scss'
```

之后应用样式
```html
<!-- vve-te-00A1B7 是 vve-theme-element-00A1B7 的简写-->
<div class="vve-te-00A1B7"></div>
```

### CDN安装使用

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vve-element-theme@1.0.1/dist/element-00A1B7.css">

<!-- vve-te-00A1B7 是 vve-theme-element-00A1B7 的简写-->
<div class="vve-te-00A1B7"></div>
```

## 开发

- 安装依赖

```bash
npm install
```

- 开发

```bash
npm run dev
```

- 打包

```bash
npm run build
```

- 发布

```bash
npm run release
git push --follow-tags origin master && npm publish
```

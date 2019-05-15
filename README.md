vve element theme

> vve支持的 element 主题

[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

## 目前主题有
- vve-theme-element-00A1B7

## element ui主题
如果需要新增element主题，配合[官方文档](https://element.eleme.cn/#/zh-CN/component/custom-theme)制作主题

## 安装

安装npm包

```bash
npm install vve-element-theme
```

引入样式
```bash
import 'vve-element-theme/dist/element-00A1B7.css'
```

如果你的项目支持sass，你可以直接引用
```bash
import 'vve-element-theme/src/element-00A1B7/index.scss'
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

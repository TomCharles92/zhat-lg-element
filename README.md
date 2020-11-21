

### 安装依赖
```bash
yarn add @rollup/plugin-json rollup-plugin-postcss @rollup/plugin-node-resolve -D -W
```
- @rollup/plugin-json：可以把 json 文件作为模块加载
- @rollup/plugin-node-resolve：打包的过程中把依赖的第三方包打包进来

### 配置文件
项目根目录创建 rollup.config.js


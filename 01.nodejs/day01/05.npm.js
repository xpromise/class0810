/*
  npm指令：
    1. npm init 初始化一个包描述文件 package.json
    2. 下载包
      - npm install xxx --save / npm i xxx / npm i xxx -S 在当前目录下下载并安装指定包，并且添加到package.json生产依赖中
          node_modules  所有下载的包都在此文件夹中
          package-lock.json 下载的包地址、信息缓存，能让你下一次下载速度更快
     - npm install xxx --save-dev / npm i xxx -D 在当前目录下下载并安装指定包，并且添加到package.json开发依赖中
     - npm install / npm i  将package.json中所有依赖的包全部下载下来
     - npm install xxx -g / npm i xxx -g  全局安装一个包，指令工具
    3. 删除包
      - npm remove xxx  将指定的包删除了，将相关的依赖也会删除
 */

/*
  package.json:
    {
      "name": "react_ui",   //包名
      "version": "0.1.0",   //包版本
      "dependencies": {     // 生产依赖：项目运行时使用的依赖
        "antd-mobile": "^2.2.6",   // 2.2.x  版本必须是2.2最后一个版本默认下载最新的
        "prop-types": "~15.6.2",   // 15.x.x  版本必须15，后面版本默认下载最新的
        "react-scripts": "2.0.5"   // 版本必须是这个
      },
      "scripts": {   // 项目运行/启动的指令
        "start": "react-app-rewired start",   //npm start
        "build": "react-app-rewired build",   //npm run build
        "test": "react-app-rewired test --env=jsdom"  //npm run test
      },
      "devDependencies": {  // 开发依赖：项目构建打包时使用的依赖
        "babel-plugin-import": "^1.11.0",
        "react-app-rewired": "^1.6.2"
      }
    }
 */
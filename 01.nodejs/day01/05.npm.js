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
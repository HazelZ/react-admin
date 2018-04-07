##开发环境搭建		
git  
webpack  
webpack-dev-server  
yarn  
nodejs	
node-sass 


"webpack": "3.10.0"		
"webpack-dev-server": "2.9.7"		

- Yarn使用		
版本锁定，缓存机制，安装速度快  	
- Yarn安装  
npm install yarn -g		

yarn init  === npm init 
yarn == npm install  
yarn global add === npm install -g   
yarn add   === npm install --save    
yarn add --dev === npm install --save-dev    
yarn remove  === npm uninstall --save(-dev)     
yarn run xxx === npm run xxx  

## webpack配置
- 脚本 == babel,babel-preset-react   
- 样式 == css-loader,sass-loader  
- 图片，字体 == url-loader,file-loader  
插件  
- html单独打包成文件 == html-webpack-plugin 2.30.1
- 样式打包成单独文件 == extract-text-webpack-plugin 
- 提出通用模块js == CommonsChunkPlugin，webpack自带的  
- webpack-dev-server，提供web服务，2.9.7，热更新，代理路由拦截或转发

<!-- 提交master之后，新建dev分支开发 -->
从master切换到开发分支上  
- git merge origin master，拉取远程仓库最新的代码  
= git add ., 追踪文件的变化  
git commit -am 'message',将代码提交到本地仓库  
git push, 本地仓库代码推送到远程仓库   
提交pull request，管理员审核,这个时候已经可以发布了    






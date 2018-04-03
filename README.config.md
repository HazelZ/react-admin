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
- html-webpack-plugin,html单独打包成文件  
- extract-text-webpack-plugin,样式打包成单独文件  
- CommonsChunkPlugin,提出通用模块js  
- webpack-dev-server，提供web服务，2.9.7

<!-- 提交master之后，新建dev分支开发 -->
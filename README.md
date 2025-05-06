# yza_depro
杨某的第一个github项目

my-project/  
├── client/        # React 前端代码  
│   ├── src/  
│   └── package.json  
└── server/        # Node.js 后端代码  
    ├── routes/  
    └── package.json:ml-citation{ref="1,7" data="citationList"}  

1. npx create-react-app client  # 生成 React 项目:ml-citation{ref="3,6" data="citationList"}  
2. cd server
3. npm init -y  # 初始化 Node.js 项目
4. npm install express
5. 前端代理设置‌（client/package.json）："proxy": "http://localhost:5000"  # 解决开发环境跨域
6. ‌后端 CORS 配置‌（server/server.js）：const cors = require('cors');  app.use(cors({ origin: 'http://localhost:3000' }));
7. 后端启动 node server.js,前端启动 npm start
# yza_depro
杨某的第一个github项目

my-project/  
├── client/        # React 前端代码  
│   ├── src/  
│   └── package.json  
└── server/        # Node.js 后端代码  
    ├── routes/  
    └── package.json

1. npx create-react-app client  # 生成 React 项目
2. cd server
3. npm init -y  # 初始化 Node.js 项目
4. npm install express
5. 前端代理设置‌（client/package.json）："proxy": "http://localhost:5000"  # 解决开发环境跨域
6. ‌后端 CORS 配置‌（server/server.js）：const cors = require('cors');  app.use(cors({ origin: 'http://localhost:3000' }));
7. 后端启动 node server.js,前端启动 npm start

my-APP/
├── public/
│   └── posts/            # Markdown 文件或 JSON 数据
├── src/
│   ├── components/       # 通用组件（Header、Footer）
│   ├── pages/            # 页面组件
│   │   ├── Home.js       # 首页（博客列表）
│   │   └── Post.js       # 博客详情页（动态路由）
│   ├── App.js           # 配置路由
│   └── utils/           # 工具函数（如解析 Markdown）

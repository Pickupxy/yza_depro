// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ 
    origin: 'http://localhost:3000',  // 精确控制访问源
    methods: ['GET', 'POST']          // 限制请求方法:ml-citation{ref="4,6" data="citationList"}
  }));
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

app.listen(5000, () => console.log('Server running on port 5000'));

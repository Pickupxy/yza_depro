// src/App.js
import React, { useEffect } from 'react';
import api from './utils/api/get.api';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/users');
        console.log('API响应:', response);
        return response;
      } catch (error) {
        console.error('请求异常:', error);
      }
    };
    fetchData();
  }, []);

  return <div>应用内容</div>;
}

export default App;

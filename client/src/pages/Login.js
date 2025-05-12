import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里模拟登录验证（实际应调用API）
    if (username && password) {
      login({ username });
      navigate('/profile'); // 登录成功后跳转到个人页
    }
  };

  return (
    <div className="container mt-4">
      <h2>登录</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">用户名</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">密码</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          登录
        </button>
      </form>
    </div>
  );
}

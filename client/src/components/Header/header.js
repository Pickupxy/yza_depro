import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-dark text-white p-3 d-flex justify-content-between align-items-center">
      <nav>
        <Link to="/" className="text-white mx-2">首页</Link>
        <Link to="/profile" className="text-white mx-2">我的</Link>
      </nav>
      
      <div>
        {user ? (
          <button onClick={logout} className="btn btn-light">
            登出
          </button>
        ) : (
          <Link to="/login" className="btn btn-light">
            登录
          </Link>
        )}
      </div>
    </header>
  );
}

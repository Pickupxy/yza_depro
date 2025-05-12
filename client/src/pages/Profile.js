import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="container mt-4">
      <h2>个人中心</h2>
      <p>欢迎回来，{user?.username}！</p>
    </div>
  );
}

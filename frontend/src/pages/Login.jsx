import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api/axiosClient';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await api.post('/auth/login', { email, password });
    login(data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button>Login</button>
    </form>
  );
};

export default Login;

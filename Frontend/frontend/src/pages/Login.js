import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { setTokens } from '../utils/auth';

export default function Login(){
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/token/', {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ username, password })
    });
    if(res.ok){
      const data = await res.json();
      setTokens(data.access, data.refresh);
      navigate('/dashboard');
    } else {
      const data = await res.json();
      alert('Login failed: ' + JSON.stringify(data));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <input placeholder='username' value={username} onChange={e=>setUsername(e.target.value)} /><br/>
      <input placeholder='password' type='password' value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <button type='submit'>Login</button>
    </form>
  );
}

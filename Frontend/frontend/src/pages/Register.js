import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register(){
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [password2,setPassword2]=useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/accounts/register/', {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ username, email, password, password2 })
    });
    if(res.ok){
      alert('Registered! Please login.');
      navigate('/login');
    } else {
      const data = await res.json();
      alert('Registration failed: ' + JSON.stringify(data));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Register</h3>
      <input placeholder='username' value={username} onChange={e=>setUsername(e.target.value)} /><br/>
      <input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} /><br/>
      <input placeholder='password' type='password' value={password} onChange={e=>setPassword(e.target.value)} /><br/>
      <input placeholder='confirm password' type='password' value={password2} onChange={e=>setPassword2(e.target.value)} /><br/>
      <button type='submit'>Register</button>
    </form>
  );
}

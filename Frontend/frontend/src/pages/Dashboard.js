import React, {useEffect, useState} from 'react';
import api from '../api';
import { clearTokens } from '../utils/auth';

export default function Dashboard(){
  const [profile,setProfile] = useState(null);

  useEffect(()=> {
    const fetchProfile = async () => {
      try{
        const res = await api('/api/accounts/me/');
        if(res.ok){
          setProfile(await res.json());
        } else {
          setProfile({error:'failed to load'});
        }
      } catch(e){
        setProfile({error: e.message});
      }
    };
    fetchProfile();
  },[]);

  return (
    <div>
      <h3>Dashboard</h3>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <button onClick={()=>{ clearTokens(); window.location='/login'; }}>Logout</button>
    </div>
  );
}

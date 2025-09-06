import { getAccess, getRefresh, setTokens, clearTokens } from './utils/auth';

async function refreshToken(){
  const refresh = getRefresh();
  if(!refresh) throw new Error('No refresh token');
  const res = await fetch('/api/auth/token/refresh/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refresh })
  });
  if(!res.ok) throw new Error('Refresh failed');
  const data = await res.json();
  setTokens(data.access, null);
  return data.access;
}

export default async function api(path, options = {}, retry = true){
  const access = getAccess();
  const headers = options.headers ? {...options.headers} : {};
  if(access) headers['Authorization'] = 'Bearer ' + access;
  headers['Content-Type'] = headers['Content-Type'] || 'application/json';
  const res = await fetch(path, { ...options, headers });
  if(res.status === 401 && retry){
    // try refresh
    try{
      const newAccess = await refreshToken();
      headers['Authorization'] = 'Bearer ' + newAccess;
      const res2 = await fetch(path, { ...options, headers });
      return res2;
    } catch(e){
      clearTokens();
      throw e;
    }
  }
  return res;
}

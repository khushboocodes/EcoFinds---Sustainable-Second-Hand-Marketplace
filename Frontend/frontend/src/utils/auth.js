export function getAccess() {
  return localStorage.getItem('access');
}
export function getRefresh() {
  return localStorage.getItem('refresh');
}
export function setTokens(access, refresh){
  if(access) localStorage.setItem('access', access);
  if(refresh) localStorage.setItem('refresh', refresh);
}
export function clearTokens(){
  localStorage.removeItem('access');
  localStorage.removeItem('refresh');
}
export function isAuthenticated(){
  return !!getAccess();
}

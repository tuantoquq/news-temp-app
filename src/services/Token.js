export const getLocalAccessToken = () => localStorage.getItem('accessToken');
export const updateLocalAccessToken = (accessToken) => {
  localStorage.setItem('accessToken', accessToken);
};
export const removeAccessToken = () => {
  localStorage.removeItem('accessToken');
};

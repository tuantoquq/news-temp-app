import Api from './Api';
export const getAllUser = async () => {
  const response = await Api.get('/auth/api/v1/user', { headers: { 'Content-Type': 'application/json' } });
  return response;
};

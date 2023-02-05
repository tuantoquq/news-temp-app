import Api from './Api';

export const login = async (email, password) => {
  const response = await Api.post(
    '/auth/api/v1/login',
    { email, password },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response;
};

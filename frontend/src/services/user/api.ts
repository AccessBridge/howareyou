import { request } from '@umijs/max';

export async function login(
  body: API.LoginParams,
  options?: { [key: string]: any },
) {
  return request<API.LoginResponse>('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

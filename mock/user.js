//user.js
const login = {
  url: '/mock/login',
  method: 'get',
  timeout: 500,
  statusCode: 200,
  response: {
    code: 200,
    message: '登录成功',
    data: {
      code: 200,
      message: '用户登录成功',
      result: {
        token: '123456789',
      },
    },
  },
}
export default [login]

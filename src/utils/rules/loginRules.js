export const loginRule = {
  userRule: [
    { required: true, message: '账号名不能为空' },
    { max: 16, message: '账号名长度不正确' },
    { min: 4, message: '账号名长度不正确' },
  ],
  passwordRule: [
    { required: true, message: '密码不能为空' },
    { max: 16, message: '密码长度不正确' },
    { min: 4, message: '密码长度不正确' },
  ],
  mobileRule: [
    {
      validator: (rule, val) => {
        const mobileReg = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
        switch (true) {
          case !Boolean(val):
            return Promise.reject('手机号码不能为空');
          case !mobileReg.test(val):
            return Promise.reject('手机号码格式不正确');
          default:
            return Promise.resolve();
        }
      },
    },
  ],
  codeRule: [
    { required: true, message: '验证码不能为空' },
    { max: 6, message: '验证码不正确' },
    { min: 6, message: '验证码不确定' },
  ],
};

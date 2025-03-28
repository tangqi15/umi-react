// 账号密码登录
// @ts-nocheck
import React from 'react';
import IconMap from 'components/IconMap';
import { loginRule } from 'utils/rules';

const AccountLogin = ({ Input, FormItem }) => {
  console.log(IconMap, 'IconMap');
  return (
    <>
      <FormItem name="accountName" rules={loginRule.userRule} hasFeedback>
        <Input placeholder="请输入用户名" prefix={IconMap.userIcon} />
      </FormItem>
      <FormItem name="password" rules={loginRule.passwordRule} hasFeedback>
        <Input
          placeholder="请输入密码"
          prefix={IconMap.passwordIcon}
          type="password"
        />
      </FormItem>
    </>
  );
};

export default AccountLogin;

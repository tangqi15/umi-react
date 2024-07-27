// @ts-nocheck
import React, { useState } from 'react';
import type { FormProps } from 'antd';
// import { Link } from 'eact-router-dom'; // 引入 Link 组件
import './login.less';
import { loginRule } from 'utils/rules';
// import Link from ''
// import IconMap from 'components/IconMap';
import AccountLogin from './component/AccountLogin';
import SmCodeLogin from './component/SmCodeLogin';

import { Form, Input, Checkbox, Button } from 'antd';
const login = () => {
  type FieldType = {
    username: string;
    password: string;
    remember?: string;
  };
  console.log(IconMap, 'IconMap');

  const [form] = Form.useForm();
  const [type, setType] = useState(0);

  const onFinish = () => {};

  const submitInfo: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container">
      <div className="loginContainer">
        <div className="title">
          <span>登录</span>
        </div>
        <Form
          form={form}
          className="loginForm"
          onFinish={onFinish}
          onFinishFailed={submitInfo}
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={loginRule.userRule}
          >
            {/* <Input placeholder="请输入用户名" prefix={IconMap.userIcon} /> */}
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={loginRule.passwordRule}
          >
            <Input.Password placeholder="请输入密码" />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject('请勾选同意'),
              },
            ]}
          >
            <Checkbox>
              我已阅读并同意
              {/* <Link href="#">用户协议</Link> */}
            </Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default login;

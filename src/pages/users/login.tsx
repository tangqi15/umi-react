// @ts-nocheck
import React, { useState } from 'react';
import type { FormProps } from 'antd';
// import { Link } from 'eact-router-dom'; // 引入 Link 组件
import './login.less';
import { loginRule } from 'utils/rules';
// import Link from ''
import AccountLogin from './component/AccountLogin';
import SmCodeLogin from './component/SmCodeLogin';
import logoImg from 'common/img/logo.svg';

import { Form, Input, Checkbox, Button, Row, Col } from 'antd';
const login = () => {
  type FieldType = {
    username: string;
    password: string;
    remember?: string;
  };
  // console.log(IconMap, 'IconMap');

  const FormItem = Form.Item;
  const [form] = Form.useForm();

  const [type, setType] = useState(0);

  const submitInfo: FormProps<FieldType>['onFinishFailed'] = (data) => {
    console.log('data:', data);
  };

  // 组件选择的容器函数
  const CompontSelector = (props) => {
    return !type ? (
      <AccountLogin {...props}></AccountLogin>
    ) : (
      <SmCodeLogin {...props}></SmCodeLogin>
    );
  };

  return (
    <div className="from">
      <div className="logo">
        <img src={logoImg} alt="" />
        <span>织信人事管理系统</span>
      </div>
      <Form form={form} className="loginForm" onFinish={submitInfo}>
        {/* 选择当前展示的组件 用户名登录、手机号登录 */}
        {CompontSelector({ form, FormItem, Input })}

        <Row>
          <Button block={true} type="primary">
            登录
          </Button>
        </Row>
        <Row className="ft-12">
          <Col span={6}>忘记密码？</Col>
          <Col
            span={18}
            onClick={() => setType(!type ? 1 : 0)}
            className="align-right"
          >
            {!type ? '使用手机号登录' : '使用账号密码登录'}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default login;

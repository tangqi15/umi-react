// 登录页面
import React, { useState, useEffect } from 'react';
// antd 表单  相关组件
import { Button, Row, Input, Form, Col } from 'antd';
import IconMap from 'components/IconMap';
import './css/login.less';
// 账号密码登录
import AccountLogin from './component/AccountLogin';
// 手机号 验证码登录
import SmCodeLogin from './component/SmCodeLogin';
import logoImg from 'common/img/logo.svg';
import { useDispatch, useSelector } from 'umi';

const FormItem = Form.Item;

const login = ({ history }) => {
  const [type, setType] = useState(0); // 定义状态  0:  用于判断是 账号密码   1: 手机号验证码
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  //- 发送用户信息到后端
  const submitUserInfo = (data) => {
    //- 登录请求的参数处理  type为必选项 + 当前登录模式的参数 手机号码  mobile + code 账户：accountName ,password
    dispatch({ type: 'user/login', payload: { ...data, type } });
  };

  // 组件选择的容器函数
  const componentSelector = (props) =>
    !type ? <AccountLogin {...props} /> : <SmCodeLogin {...props} />;

  // 解构出 from  属性    antd 钩子函数  useForm
  const [form] = Form.useForm();

  // template
  return (
    <div className="form">
      <div className="logo">
        {/* <img src={logoImg} /> */}
        <span>人事管理系统</span>
      </div>
      <Form form={form} onFinish={submitUserInfo}>
        {componentSelector({ FormItem, Input, form })}
        <Row>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading.effects['user/login']}
          >
            登录
          </Button>
        </Row>
        <Row>
          <Col span={6}>
            <p
              className="login-methods-container"
              onClick={() => history.push('/users/forgetPassword')}
            >
              忘记密码？
            </p>
          </Col>
          <Col span={18}>
            <p
              className="login-methods-container login-methods"
              onClick={() => setType(!type ? 1 : 0)}
            >
              {!type ? '使用手机号码登录' : '使用账户名密码进行登录'}
              {IconMap.arrowRight}
            </p>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default login;

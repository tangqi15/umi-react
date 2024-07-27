import React, { useState } from 'react';
import IconMap from 'components/IconMap';
import { loginRule } from 'utils/rules';
import { Button } from 'antd';
const SmCodeLogin = ({ FormItem, Input, form }) => {
  let [currentTime, setCurrentTime] = useState(5);
  const [currentStatus, setCurrentStatus] = useState(true);
  const [disableFlag, setDisabledFlag] = useState(true);

  // 获取验证码
  const _sendSmCode = () => {
    setCurrentStatus(false);
    setDisabledFlag(true);
    // 倒计时
    runTime();
  };

  // 倒计时处理
  const runTime = () => {
    const timer = setInterval(() => {
      if (currentTime === 0) {
        clearInterval(timer);
        setCurrentStatus(true);
        setDisabledFlag(false);
        setCurrentTime(5);
      }
      setCurrentTime(--currentTime);
    }, 1000);
  };

  // 校验手机号
  const checkedMobile = async (val) => {
    console.log(val, 'val');
    try {
      const data = await form.validateFields(['mobile']);
      console.log(data, 'data');
      setDisabledFlag(false);
    } catch {
      setDisabledFlag(true);
    }
  };

  const addonAfterButton = (
    <Button onClick={_sendSmCode} disabled={disableFlag}>
      {currentStatus ? '发送验证码' : `${currentTime}秒后重新发送`}
    </Button>
  );
  return (
    <>
      <FormItem name="mobile" rules={loginRule.mobileRule} hasFeedback>
        <Input
          placeholder="请输入手机号码"
          prefix={IconMap.mobileIcon}
          onChange={checkedMobile}
        ></Input>
      </FormItem>
      <FormItem name="code" rules={loginRule.codeRule}>
        <Input
          placeholder="请输入验证码"
          prefix={IconMap.codeIcon}
          addonAfter={addonAfterButton}
        ></Input>
      </FormItem>
    </>
  );
};

export default SmCodeLogin;

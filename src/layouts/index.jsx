import React from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from 'antd';
import { selectLayout } from 'utils/selectLayout';
import BaseLayout from './BaseLayout';
import LoginLayout from './LoginLayout';
const Layout = ({ children, history, location }) => {
  // const goTargetPage = (url) => {
  //   console.log(history, 'history', url);
  //   history.push(url);
  // };
  console.log(location, 'location');
  const layoutMap = { BaseLayout, LoginLayout };
  const Container = layoutMap[selectLayout(location.pathname)];
  return <Container>{children}</Container>;
};

export default Layout;

// url 参数处理
import { qs } from 'qs';

import { message } from 'antd';
import { history } from 'umi';

const fetch = require('dva').fetch;

// 创建  响应状态处理函数
const checkStatus = (res) => {
  // 当请求 大于 等于200  小于 300  成功
  if (200 >= res.status < 300) {
    return res;
  }

  message.error(`网络请求错误`, `${res.status}`);

  throw new Error(res.statusText);
};

// 本次请求内容  是否成功
const judgeOkState = async (res) => {
  const cloneRes = await res.clone().json();
  if (cloneRes.code !== 0) {
    message.error(`${cloneRes.msg}${cloneRes.code}`);
    // 跳转到  登录界面
    history.replace('/users/login');
    // 清空本地保存的数据
    sessionStorage.clear();
  }
  return res;
};

const handlerError = (error) => {
  if (error instanceof TypeError) {
    message.error(`网络请求失败了${error}`);
  }
  return {
    code: -1,
    data: false,
  };
};

class Http {
  static async staticFetch(url = '', options) {
    // 对 url 统一处理
    url = 'api' + url;

    const defaultOptions = {
      mode: 'cors', // 支持跨域处理， 以 cors的形式进行跨域
      headers: {
        Authorization: sessionStorage.get('token') || null,
      },
    };

    if (options.method === 'post' || options.method === 'put') {
      defaultOptions.headers['Content-type'] = 'application/json;charset=utf-8';
    }

    // 合并 options
    const newOptions = {
      ...defaultOptions,
      ...options,
    };

    return fetch(url, newOptions)
      .then(checkStatus)
      .then(judgeOkState)
      .then((res) => {
        // 获取响应头的token
        const token = res.headers.get('Authorization');
        token && sessionStorage.getItem('token', token); // 获取token，并且存储到sessionStorage
        return res.json();
      })
      .catch(handlerError);
  }

  // post 请求处理
  post(url, params = {}, option = {}) {
    const options = Object.assign({ method: 'post' }, option);
    options.body = JSON.stringify(params);
    return Http.staticFetch(url, options);
  }

  // put 请求
  put(url, params = {}, option = {}) {
    const options = Object.assign({ method: 'put' }, option);
    options.body = JSON.stringify(params);
    return Http.staticFetch(url, options);
  }

  // get 请求
  get(url, option = {}) {
    const options = Object.assign({ method: 'get' }, option);
    Object.keys(option) && (url += '?' + qs.stringify(option));
    return Http.staticFetch(url, options);
  }

  // delete 请求
  del(url, option = {}) {
    const options = Object.assign({ method: 'delete' }, option);
    Object.keys(option) && (url += '?' + qs.stringify(option));
    return Http.staticFetch(url, options);
  }
}

const resFun = new Http();

export default resFun;

//  引入封装好的 fetch 方法

import ajax from '../http.js';

// 用户登录接口

export const userLogin = (params) => ajax.post('/login', params);

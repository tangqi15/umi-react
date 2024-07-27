// import React from 'react';
// import { Button } from 'antd';
// const test = () => {
//   return (
//     <div>
//       hello test
//       <Button type="primary">button</Button>
//     </div>
//   );
// };

// export default test;

// import React from 'react';
// import { Button, message, Space } from 'antd';
// const App = () => {

//   return (
//     <>
//       {contextHolder}
//       <Space>
//         <Button onClick={success}>Success</Button>
//         <Button onClick={error}>Error</Button>
//         <Button onClick={warning}>Warning</Button>
//       </Space>
//     </>
//   );
// };
// export default App;

import React, { Component } from 'react';
import { Button, message, Space } from 'antd';

export default class test extends Component {
  constructor(props) {
    super(props);
    // const [messageApi, contextHolder] = message.useMessage();
    // this.messageApi = messageApi;
    // this.contextHolder = contextHolder;
  }
  success = () => {
    // messageApi.open({
    //   type: 'success',
    //   content: 'This is a success message',
    // });
    message.success('This is a success message');
  };
  error = () => {
    // messageApi.open({
    //   type: 'error',
    //   content: 'This is an error message',
    // });
  };
  warning = () => {
    // messageApi.open({
    //   type: 'warning',
    //   content: 'This is a warning message',
    // });
  };

  render() {
    return (
      <>
        <Space>
          <Button onClick={this.success}>Success</Button>
          <Button onClick={this.error}>Error</Button>
          <Button onClick={this.warning}>Warning</Button>
        </Space>
      </>
    );
  }
}

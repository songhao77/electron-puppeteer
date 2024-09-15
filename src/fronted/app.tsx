import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

const App: React.FC = () => {
  const sendMessage = () => {
    window.electronAPI.sendMessage('Hello from Renderer');
  };

  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log(num);
  }, [num]);

  return (
    <div>
      <h1>React 应用</h1>
      <Button type='primary' onClick={sendMessage}>
        发送消息
      </Button>
    </div>
  );
};

export default App;

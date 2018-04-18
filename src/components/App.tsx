import * as React from 'react';
import 'antd/lib/button/style/css';
import Button from 'antd/lib/button';

interface AppProps {
  message: string;
}
export default function ({ message }: AppProps) {
  return (
    <div>
      <h1>Hello {message}</h1>
      <Button type="primary">Test</Button>
    </div>
  );
}

import React from 'react';
import { Button, message } from 'antd';

const Text = ({ name }) => (
    <div>
        Hello lingxi remote {name}!
        <Button type="primary" onClick={() => { message.info('远程组件被点击了'); }}>点我</Button>
    </div>
);

export default Text;


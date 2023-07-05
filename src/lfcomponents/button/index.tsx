import type { ButtonProps } from 'antd/lib/button';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import React from 'react';

export interface MyButtonProps extends ButtonProps {
  visible?: boolean;
  name?: string;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  const { visible = true, name, ...restProps } = props;

  return visible ? <Button {...restProps}>{name}</Button> : null;
};

export default MyButton;

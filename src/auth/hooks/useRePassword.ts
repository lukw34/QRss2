import { useState } from 'react';

export default (key: string, setModelValue: (key: any, value: any) => void) => {
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const onBlur = () => {
    setModelValue(key, {
      password,
      rePassword
    });
  };

  return {
    onBlur,
    setRePassword,
    setPassword,
    password,
    rePassword
  };
};

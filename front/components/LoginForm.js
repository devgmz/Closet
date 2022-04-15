import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import useInput from '../hooks/useInput';

const LoginForm = () => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput( '' );
  

  return (
    <div className='flex justify-start'>
    
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16}}
      style={{ padding: 8, margin: 16 }}
      autoComplete='off'
    >
        <Form.Item
          label="Email"
          name="user-email"
        >
          <Input type='email' />
        </Form.Item>
        <Form.Item
          label="Password"
          name="user-password"
        >
          <Input.Password required />
        </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          로그인
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default LoginForm
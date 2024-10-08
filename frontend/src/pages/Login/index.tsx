import { LockOutlined, PhoneOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Row,
  Space,
  Typography,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
//@ts-ignore
import { history, useModel } from 'umi';

const { Title } = Typography;

const sendOTP = async (phoneNumber: string) => {
  // Simulate sending OTP instantly
  return {
    status: 'ok',
    message: 'OTP sent successfully!',
  };
};

const verifyOTP = async (otp: string) => {
  // Simulate verifying OTP
  await new Promise((res) => setTimeout(res, 1000));
  if (otp === '0000') {
    return {
      status: 'ok',
      data: {
        id: 2,
        role: 'public',
        name: 'resname',
        token: 'mock-token-resident',
      },
    };
  }
  if (otp === '0001') {
    return {
      status: 'ok',
      data: {
        id: 1,
        role: 'volunteer',
        name: 'volname',
        token: 'mock-token-volunteer',
      },
    };
  }
  if (otp === '0002') {
    return {
      status: 'ok',
      data: {
        id: 1,
        role: 'staff',
        name: 'staffname',
        token: 'mock-token-staff',
      },
    };
  }
  return {
    status: 'error',
    message: 'Invalid OTP',
  };
};

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const { initialState, setInitialState } = useModel('@@initialState');
  const [form] = Form.useForm();

  // Effect to handle countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(timer);
            return 0;
          } else {
            return prevCount - 1;
          }
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [countdown]);

  const handleGetCode = async () => {
    const phoneNumber = form.getFieldValue('phoneNumber');
    if (!phoneNumber) {
      message.error('Please enter your phone number!');
      return;
    }
    setLoading(true);
    try {
      const response = await sendOTP(phoneNumber);
      if (response.status === 'ok') {
        message.success(response.message);
        setCountdown(30); // Start 60-second countdown
      } else {
        message.error(response.message || 'Failed to send OTP!');
      }
    } catch (error) {
      message.error('Error occurred while sending OTP!');
    }
    setLoading(false);
  };

  const handleSubmit = async (values: { phoneNumber: string; otp: string }) => {
    setLoading(true);
    try {
      const response = await verifyOTP(values.otp);
      if (response.status === 'ok') {
        // Set user info into global state
        flushSync(() => setInitialState({ ...initialState, ...response.data }));
        // Redirect to respective homepage after successful login
        // NOTE: Special handling is done here for Hash routing
        const getQueryParams = () => {
          const hash = location.hash || ''; // Get the hash part of the URL
          const queryString = hash.includes('?') ? hash.split('?')[1] : ''; // Extract the query string
          return new URLSearchParams(queryString); // Parse the query parameters
        };
        const redirectUrl = getQueryParams().get('redirect') || '/';

        history.push(redirectUrl);
        message.success('Login successful!');
      } else {
        message.error(response.message || 'Invalid OTP!');
      }
    } catch (error) {
      message.error('Error occurred during login!');
    }
    setLoading(false);
  };

  // Enable Get Code button when phoneNumber has 8 digits
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const onPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isValid = /^\d{8}$/.test(value);
    setIsPhoneValid(isValid);
  };

  return (
    <Space
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div style={{ padding: 24, backgroundColor: '#fff', borderRadius: 8 }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>
          HowAreYou Login
        </Title>
        <Form
          form={form}
          name="login"
          onFinish={handleSubmit}
          style={{ width: 300 }}
        >
          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: 'Please enter your phone number!' },
              {
                pattern: /^\d{8}$/,
                message: 'Please enter a valid 8-digit phone number!',
              },
            ]}
          >
            <Input
              size="large"
              prefix={<PhoneOutlined />}
              placeholder="Phone Number"
              onChange={onPhoneNumberChange}
            />
          </Form.Item>
          <Form.Item
            label="OTP"
            required
            style={{ marginBottom: 24 }} // Increased bottom margin for spacing
          >
            <Row gutter={8}>
              <Col span={16}>
                <Form.Item
                  name="otp"
                  noStyle
                  rules={[{ required: true, message: 'Please enter the OTP!' }]}
                >
                  <Input
                    size="large"
                    prefix={<LockOutlined />}
                    placeholder="Code"
                  />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Button
                  size="large"
                  onClick={handleGetCode}
                  disabled={!isPhoneValid || countdown > 0}
                  block
                  style={{
                    fontSize: countdown > 0 ? '10px' : undefined,
                    padding: '0 8px',
                    backgroundColor: countdown > 0 ? '#bae7ff' : '#1890ff', // Light blue when countdown active, dark blue otherwise
                    borderColor: countdown > 0 ? '#bae7ff' : '#1890ff',
                    color: '#fff',
                  }}
                >
                  {countdown > 0 ? `Re-send (${countdown}s)` : 'Get Code'}
                </Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              size="large"
              block
              style={{
                backgroundColor: '#1890ff',
                borderColor: '#1890ff',
                color: '#fff',
              }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Space>
  );
};

export default Login;

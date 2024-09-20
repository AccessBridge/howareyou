import { PlusOutlined } from '@ant-design/icons';
import { Access, history, useAccess, useParams } from '@umijs/max';
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Row,
  Space,
  Typography,
  Upload,
} from 'antd';
import type { UploadProps } from 'antd/es/upload/interface';
import React, { useEffect, useState } from 'react';
import ButtonGroupInput from '../../components/ButtonGroupInput';

const { TextArea } = Input;
const { Text, Title } = Typography;

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const RegisterVisitPage: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);

  // Fetch data asynchronously
  const populateForm = async () => {
    setLoading(true);
    try {
      // Simulated fetch data
      const result = {
        id: 1,
        elderlyCode: 'WL-8829',
        aacCode: 'AAC-123162',
        name: 'Goh Seok Meng',
        address: 'Woodlands Drive 62, #02-144, S623182',
        contact: 81234567,
        nok: [{ name: 'David Goh', relationship: 'Son', contact: 91234567 }],
        notes:
          'Goh Seok Meng lives alone on weekdays, can only speak Hokkien, and has difficulty walking. She does not mind having pictures taken.',
        languages: ['Hokkien'],
        attachments: [],
        visits: [
          {
            datetime: '09-10-2024 20:00',
            visitor: { id: 99, name: 'David', role: 'public' },
            location: 'Home',
            attachments: [],
            notes: 'All good.',
          },
          {
            datetime: '09-08-2024 17:00',
            visitor: { id: 2, name: 'David Hiong', role: 'volunteer' },
            location: 'Woodlands Hawker Centre',
            attachments: [],
            notes: "Saw auntie at Woodlands Hawker Centre, she's doing well",
          },
        ],
      };
      setTimeout(() => {
        console.log('Fake data fetched');
      }, 1000);
      form.setFieldsValue(result);
    } catch (error) {
      message.error('Failed to fetch data');
    } finally {
      console.log('FINALLY');
      setLoading(false);
    }
  };

  useEffect(() => {
    populateForm();
  }, [form]);

  const access = useAccess();
  const params = useParams<{ id: string }>(); // Specify the type of params

  // Handle form submission
  const onFinish = async (values: any) => {
    console.log('Form values:', values);

    const { id } = params; // Get the resident ID from URL params
    const { status, comments, upload } = values;

    // Extract photo URL if available
    let photoUrl = null;
    if (upload && upload.length > 0) {
      // Assuming the upload response contains the URL
      // Adjust according to your actual upload response structure
      photoUrl = upload[0].response?.url || null;
    }

    try {
      const response = await fetch('/api/logVisits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          residentId: parseInt(id, 10), // Ensure residentId is an integer
          visitorId: 1, // Hardcoded visitorId
          status,
          comments,
          photoUrl,
        }),
      });

      const result = await response.json();

      if (result.success) {
        message.success('Form submitted and logged successfully!');
        history.push(`/residents`);
      } else {
        message.error(
          result.message || 'Failed to log the form. Please try again.',
        );
      }
    } catch (error: any) {
      console.error('Submission error:', error);
      message.error('There was an error submitting the form.');
    }
  };

  // Handle redirect to resident profile page
  const handleRedirectToResidentProfile = () => {
    const { id } = params; // Use dynamic residentId
    history.push(`/residents/${id}`);
  };

  /**
   * Upload component props
   * @see https://ant.design/components/upload/#API
   * @prop action: The URL where the uploaded files will be sent. For a dummy endpoint, you can use a placeholder or mock server.
   * @prop listType: The type of the upload list. You can use 'text', 'picture', or 'picture-card'. 'picture-card' will display the uploaded image as thumbnails.
   * @prop beforeUpload: A function that will be called before uploading the file. You can use this function to validate the file type and size.
   * @prop onChange: A function that will be called when the status of the file changes. You can use this function to show a message when the file is uploaded successfully or failed.
   */
  const uploadProps: UploadProps = {
    action: 'https://jsonplaceholder.typicode.com/posts/', // Dummy endpoint
    listType: 'picture-card',
    beforeUpload: (file) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
        return Upload.LIST_IGNORE;
      }
      return true;
    },
    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Access accessible={access.isVolunteer || access.isPublic}>
      <Row justify="center" style={{ marginTop: '24px' }}>
        <Col xs={22} sm={20} md={16} lg={12}>
          <Space direction="vertical" size={24} style={{ width: '100%' }}>
            <Title level={3} style={{ marginBottom: '0px' }}>
              Register Visit
            </Title>
            <Access accessible={access.isVolunteer}>
              <Card
                style={{ width: '100%' }}
                bodyStyle={{ padding: '16px' }}
                loading={loading}
              >
                <Row gutter={16} align="middle">
                  <Col xs={8} sm={6} md={6} lg={6} xl={5}>
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        paddingBottom: '100%', // 1:1 aspect ratio
                        overflow: 'hidden',
                        borderRadius: '8px', // Slightly round the corners
                      }}
                    >
                      <img
                        src="https://www.josejeuland.com/wp-content/uploads/2022/11/DSF6022.jpg"
                        alt="Profile"
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    </div>
                  </Col>
                  <Col xs={16} sm={18} md={18} lg={18} xl={19}>
                    <div>
                      <Text strong style={{ fontSize: '16px' }}>
                        Goh Seok Meng
                      </Text>
                      <br />
                      <Text type="secondary">
                        Woodlands Drive 62, #02-144, S623182
                      </Text>
                    </div>
                    <div style={{ marginTop: '8px' }}>
                      <Button
                        type="primary"
                        onClick={handleRedirectToResidentProfile}
                      >
                        View Profile
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Access>
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <Form.Item
                label={
                  <span style={{ fontWeight: 'bold' }}>
                    How is he/she doing?
                  </span>
                }
                name="status"
                rules={[{ required: true, message: 'Please select an option' }]}
              >
                <ButtonGroupInput
                  options={[
                    { value: 'good', label: 'GOOD' },
                    { value: 'notGood', label: 'NOT GOOD' },
                    { value: 'notAround', label: 'NOT AROUND' },
                  ]}
                />
              </Form.Item>

              <Form.Item
                label={
                  <span style={{ fontWeight: 'bold' }}>
                    Any comments or observations?
                  </span>
                }
                name="comments"
              >
                <TextArea rows={4} />
              </Form.Item>

              <Form.Item
                label={
                  <div>
                    <Text strong>Any photos to share?</Text>
                    <div>
                      <Text type="secondary">
                        Optional. Seek their consent, and be respectful.
                      </Text>
                    </div>
                  </div>
                }
                name="upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload {...uploadProps}>
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Space>
        </Col>
      </Row>
    </Access>
  );
};

export default RegisterVisitPage;

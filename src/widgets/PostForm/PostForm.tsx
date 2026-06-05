import { type FC } from 'react';
import { Button, Card, Form, Input, Typography } from 'antd';
import { ArrowLeftOutlined, SaveOutlined } from '@ant-design/icons';

const {Title} = Typography;
const {TextArea} = Input;

interface PostFormValues {
  title: string;
  description: string;
}

interface PostFormProps {
  titleText: string;
  submitButtonText: string;
  initialValues?: PostFormValues;
  isSubmitting: boolean;
  onFinish: (values: PostFormValues) => void;
  onCancel: () => void;
}

const PostForm: FC<PostFormProps> = (props) => {
  const {
    titleText,
    submitButtonText,
    initialValues,
    isSubmitting,
    onFinish,
    onCancel,
  } = props;
  const [form] = Form.useForm();

  return (
    <div>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={onCancel}
        style={{marginBottom: '20px'}}
      >
        Cancel
      </Button>

      <Card className="form-wrapper">
        <Title level={2} style={{color: '#fff', marginBottom: '24px'}}>
          {titleText}
        </Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={initialValues}
        >
          <Form.Item
            name="title"
            label={<span style={{color: '#fff'}}>Title</span>}
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Title cannot be empty',
              },
              {transform: (value: string) => value?.trim()}
            ]}
          >
            <Input
              size="large"
              placeholder="Type a blog title ..."
            />
          </Form.Item>

          <Form.Item
            name="description"
            label={<span style={{color: '#fff'}}>Content description</span>}
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Please write a description !',
              },
              {transform: (value: string) => value?.trim()}
            ]}
          >
            <TextArea
              rows={4}
              placeholder="Write blog description ..."
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SaveOutlined />}
              loading={isSubmitting}
            >
              {submitButtonText}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default PostForm;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import PostForm from '../../widgets/PostForm/PostForm';
import { blogApi } from "../../shared/api/api.ts";
import { AppRoutes } from "../../shared/routing/routes.ts";

const AddPostPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleFinish = async (values: {
    title: string;
    description: string
  }) => {
    setIsSubmitting(true);
    try {
      await blogApi.createPost({
        title: values.title,
        description: values.description,
        datetime: new Date().toISOString(),
      });
      message.success('Post created successfully!');
      navigate(AppRoutes.main);
    } catch (e) {
      console.log(`Something went wrong + ${e}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PostForm
      titleText="Create New Post Entry"
      submitButtonText="Publish post"
      isSubmitting={isSubmitting}
      onFinish={handleFinish}
      onCancel={() => navigate(AppRoutes.main)}
    />
  );
};

export default AddPostPage;
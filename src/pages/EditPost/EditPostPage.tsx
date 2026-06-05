import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
import type { IPost } from '../../shared/types/blog';
import PostForm from '../../widgets/PostForm/PostForm';
import { blogApi } from "../../shared/api/api.ts";
import Loader from "../../shared/Loader/Loader.tsx";

const EditPostPage = () => {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [initialPost, setInitialPost] = useState<IPost | null>(null);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (!id) return;

    const loadPostData = async () => {
      try {
        const post = await blogApi.getPostById(id);
        if (post) {
          setInitialPost(post);
        } else {
          void message.error('Post not found');
          navigate('/');
        }
      } catch (e) {
        console.error(e);
        message.error('Failed to load post data');
      } finally {
        setIsLoadingData(false);
      }
    };

    void loadPostData();
  }, [id, navigate]);

  const handleFinish = async (values: {
    title: string;
    description: string
  }) => {
    if (!id || !initialPost) return;
    setIsSubmitting(true);
    try {
      await blogApi.updatePost(id, {
        title: values.title,
        description: values.description,
        datetime: initialPost.datetime,
      });
      message.success('Post updated successfully!');
      navigate(`/posts/${id}`);
    } catch (e) {
      console.error(e);
      message.error('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingData) return <Loader isLoading={isLoadingData} />;

  return (
    <PostForm
      titleText="Edit Post"
      submitButtonText="Save changes"
      initialValues={initialPost ? {
        title: initialPost.title,
        description: initialPost.description
      } : undefined}
      isSubmitting={isSubmitting}
      onFinish={handleFinish}
      onCancel={() => navigate(`/posts/${id}`)}
    />
  );
};

export default EditPostPage;
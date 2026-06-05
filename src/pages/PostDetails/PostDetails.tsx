import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, message, Popconfirm, Space, Typography } from 'antd';
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import type { IPost } from '../../shared/types/blog';
import { blogApi } from "../../shared/api/api.ts";
import { AppRoutes } from "../../shared/routing/routes.ts";

import Loader from "../../shared/Loader/Loader.tsx";

import "./PostDetails.css";

const {Title, Paragraph} = Typography;

const PostDetails = () => {
  const {id} = useParams<{ id: string }>();

  const navigate = useNavigate();
  const [post, setPost] = useState<IPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      try {
        const data = await blogApi.getPostById(id);
        setPost(data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };
    void fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (!id) return;
    try {
      await blogApi.deletePost(id);
      message.success('Post deleted successfully!');
      navigate(AppRoutes.main);
    } catch (e) {
      console.error(e);
      message.error('Failed to delete post.');
    }
  };

  if (isLoading) return <Loader isLoading={isLoading} />;
  if (!post) return <div style={{
    color: '#fff',
    textAlign: 'center'
  }}>Post not found</div>;

  return (
    <div className="post-page">
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(AppRoutes.main)}
        style={{marginBottom: '20px'}}
      >
        Back to Posts
      </Button>

      <Card className="post-details">
        <div className="details-top">
          <div>
            <Title level={2} style={{
              color: '#fff',
              margin: 0
            }}>{post.title}</Title>

            <Paragraph type="secondary">
              <CalendarOutlined style={{marginRight: '6px'}} />
              Published: {new Date(post.datetime).toLocaleString()}
            </Paragraph>
          </div>

          <Space>
            <Popconfirm
              title="Delete the post"
              description="Are you sure you want to delete this post?"
              onConfirm={handleDelete}
              okText="Yes"
              cancelText="No"
              placement="bottomRight"
            >
              <Button icon={
                <DeleteOutlined />} danger>Delete</Button>
            </Popconfirm>
          </Space>
        </div>

        <Paragraph>
          {post.description}
        </Paragraph>
      </Card>
    </div>
  );
};

export default PostDetails;
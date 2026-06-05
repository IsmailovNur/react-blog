import { type FC } from 'react';
import { Button, Card, Typography } from 'antd';
import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { IPostWithId } from '../../shared/types/blog';

import "./PostCard.css";

const {Text, Paragraph} = Typography;

interface PostCardProps {
  post: IPostWithId;
}

const PostCard: FC<PostCardProps> = ({post}) => {
  const navigate = useNavigate();

  return (
    <Card>
      <Text type="secondary" className="post-date">
        <CalendarOutlined className="date-icon" />
        Post created : {new Date(post.datetime).toLocaleString()}
      </Text>
      <Paragraph className="post-card-title">
        {post.title}
      </Paragraph>
      <Paragraph>
        {post.description}
      </Paragraph>
      <Button
        icon={<ArrowRightOutlined />}
        onClick={() => navigate(`/posts/${post.id}`)}
      >
        Read more
      </Button>
    </Card>
  );
};

export default PostCard;
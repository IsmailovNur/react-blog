import { useEffect, useState } from 'react';
import { blogApi } from "../../shared/api/api.ts";
import Loader from "../../shared/Loader/Loader.tsx";
import { Button, Empty } from "antd";
import PostCard from "../PostCard/PostCard.tsx";
import type { IPostWithId } from "../../shared/types/blog.ts";

import "./Posts.css";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../shared/routing/routes.ts";

const Posts = () => {
  const [posts, setPosts] = useState<IPostWithId[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const data = await blogApi.getAllPosts();
      setPosts(data);
    } catch (e) {
      console.error('Failed to fetch posts:', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchPosts();
  }, []);

  return (
    <div className="post-list">
      <Loader isLoading={isLoading} />

      {!isLoading && posts.length === 0 && (
        <div>
          <Empty description={
            <span>No posts found. Create the post at first </span>} />
          <div className="create-post">
            <Button size="large" type="link" onClick={() => navigate(AppRoutes.addPost)}>Create First Post</Button>
          </div>
        </div>
      )}

      {!isLoading && posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Posts;
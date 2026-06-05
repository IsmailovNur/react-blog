import { Button, Typography } from "antd";

const {Title} = Typography;
const AddPost = () => {

  const createPost = () => {}

  return (
    <div>
      <Title level={1}>PostForm</Title>
      <Button onClick={createPost}>CREATE POST</Button>
    </div>
  );
};

export default AddPost;
import { Typography } from 'antd';

import Posts from "../../widgets/Posts/Posts.tsx";
import "./HomePage.css";

const {Title} = Typography;

const HomePage = () => {

  return (
    <div>
      <Title level={1}>Recent Publications</Title>
      <Posts />
    </div>
  );
};

export default HomePage;
import { Typography } from 'antd';

import Posts from "../../widgets/Posts/Posts.tsx";
import "./Home.css";

const {Title} = Typography;

const Home = () => {

  return (
    <div>
      <Title level={1}>Recent Publications</Title>
      <Posts />
    </div>
  );
};

export default Home;
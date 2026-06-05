import { Card, Typography } from 'antd';
import "./Home.css";

const {Title, Paragraph} = Typography;

const Home = () => {

  return (
    <Card className="home-content">
      <Title level={2} style={{color: '#fff'}}>Welcome to My Blog </Title>
      <Paragraph style={{color: 'rgba(255,255,255,0.65)', fontSize: '16px'}}>
        This is my personal Blog App, developed in React, Vite, and Ant Design.
      </Paragraph>
      <Paragraph style={{color: 'rgba(255,255,255,0.65)', fontSize: '16px'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        A accusamus accusantium animi assumenda autem culpa cumque deleniti deserunt dolorem
        dolores ducimus eaque earum eius eligendi error eveniet id itaque laboriosam laudantium libero, magnam minima
        nostrum officia possimus quam quibusdam quos reiciendis repellendus rerum sapiente sint unde vitae voluptas. Provident, tenetur!
      </Paragraph>
      <Paragraph style={{
        color: 'rgba(255,255,255,0.65)',
        fontSize: '16px'
      }}>
        You can see my portfolio by clicking the button below.:
      </Paragraph>
    </Card>
  );
};

export default Home;
import { Card, List, Typography } from 'antd';
import "./AboutPage.css";
import { InfoCircleTwoTone } from "@ant-design/icons";

const {Title, Paragraph} = Typography;
const AboutPage = () => {
  return (
    <Card className="about-content">
      <div className="about-user">
        <InfoCircleTwoTone className="info-icon" />
        <Title level={2} style={{color: '#fff'}}>About Me</Title>
      </div>
      <Paragraph style={{color: 'rgba(255,255,255,0.65)', fontSize: 20}}>
        I'm a frontend developer. I specialize in building modern web applications using React, TypeScript, and advanced UI frameworks.
      </Paragraph>

      <List
        style={{color: "#fff"}}
        header={<div className="info-list-header">My Skills</div>}
        bordered
      >
        <List.Item className="info-list-item">
          HTML, CSS, SASS
        </List.Item>
        <List.Item className="info-list-item">
          JS, Typescript
        </List.Item>
        <List.Item className="info-list-item">
          Node JS, NPM
        </List.Item>
        <List.Item className="info-list-item">
          GIT, Vite
        </List.Item>
        <List.Item className="info-list-item">
          React, React-router
        </List.Item>
      </List>

    </Card>
  );
};

export default AboutPage;
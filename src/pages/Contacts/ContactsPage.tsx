import "./ContactsPage.css";
import { Typography } from 'antd';
import { GithubOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const {Title, Text} = Typography;

const ContactsPage = () => {
  return (

    <>
      <Title className="contacts-title">My Contacts</Title>
      <div className="contacts-wrapper">
        <div className="contacts-items">
          <div className="contacts-item">
            <MailOutlined className="contacts-item-icon" />
            <div>
              <Text strong style={{color: '#fff'}}>Email : </Text>
              <Text type="secondary">ismailovNurmuhammed@gamil.com</Text>
            </div>
          </div>

          <div className="contacts-item">
            <GithubOutlined className="contacts-item-icon" />
            <div>
              <Text strong style={{color: '#fff'}}>GitHub : </Text>
              <a href="https://github.com/IsmailovNur" target="_blank">IsmailovNur</a>
            </div>
          </div>

          <div className="contacts-item">
            <PhoneOutlined className="contacts-item-icon" />
            <div>
              <Text strong style={{color: '#fff'}}>Phone : </Text>
              <a href="tel:9968005553535">+996 800-555-3535</a>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default ContactsPage;
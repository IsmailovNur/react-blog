import { Layout } from "antd";
import AppLink from "../../shared/AppLink/AppLink.tsx";
import { AppRoutes } from "../../shared/routing/routes.ts";
import { AntDesignOutlined, PlusOutlined } from "@ant-design/icons";

import "./AppHeader.css";

const {Header} = Layout;

const AppHeader = () => {
  return (
    <Header className="header">
      <AppLink to={AppRoutes.main}><AntDesignOutlined className="header-logo" /></AppLink>
      <nav className="header-nav">
        <AppLink to={AppRoutes.main} className="nav-item">Home</AppLink>
        <AppLink to={AppRoutes.addPost} className="nav-item">
          <PlusOutlined style={{marginRight: '10px'}} />Add Post</AppLink>
        <AppLink to={AppRoutes.about} className="nav-item">About us</AppLink>
        <AppLink to={AppRoutes.contacts} className="nav-item">Contacts</AppLink>
      </nav>
    </Header>
  );
};

export default AppHeader;
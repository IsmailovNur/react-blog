import { Layout } from "antd";
import "./AppHeader.css";
import AppLink from "../../shared/AppLink/AppLink.tsx";
import { AppRoutes } from "../../shared/routing/routes.ts";
import { AntDesignOutlined } from "@ant-design/icons";

const {Header} = Layout;

const AppHeader = () => {
  return (
    <Header className="header">
      <AppLink to={AppRoutes.main}><AntDesignOutlined className="header-logo" /></AppLink>
      <nav className="header-nav">
        <AppLink to={AppRoutes.main} className="nav-item">Home</AppLink>
        <AppLink to={AppRoutes.about} className="nav-item">About me</AppLink>
        <AppLink to={AppRoutes.contacts} className="nav-item">Contacts</AppLink>
        <AppLink to={AppRoutes.postForm} className="nav-item">PostForm</AppLink>
      </nav>
    </Header>
  );
};

export default AppHeader;
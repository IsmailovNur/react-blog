import './App.css';
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import AddPost from "./pages/AddPost/AddPost.tsx";
import Contacts from "./pages/Contacts/Contacts.tsx";
import AppHeader from "./widgets/AppHeader/AppHeader.tsx";
import AppFooter from "./widgets/AppFooter/AppFooter.tsx";

import { Layout } from "antd";
import { AppRoutes } from "./shared/routing/routes.ts";
import { Content } from "antd/es/layout/layout";
import { blogApi } from "./shared/api/api.ts";
import PostDetails from "./pages/PostDetails/PostDetails.tsx";

const App = () => {

  const fetchPosts = async () => {

    try {
      const data = await blogApi.getAllPosts();
      console.log(data);
    } catch (e) {
      console.error('Failed to fetch posts:', e);
    }
  };

  useEffect(() => {
    void fetchPosts();
  }, []);

  return (
    <Layout className="App-wrapper">
      <AppHeader />

      <Content className="layout-content">
        <Routes>
          <Route path={AppRoutes.main} element={<Home />} />
          <Route path={AppRoutes.about} element={<About />} />
          <Route path={AppRoutes.contacts} element={<Contacts />} />

          <Route path={AppRoutes.addPost} element={<AddPost />} />

          <Route path={AppRoutes.postDetails} element={<PostDetails />} />
        </Routes>
      </Content>

      <AppFooter />
    </Layout>
  )
}

export default App;

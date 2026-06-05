import './App.css';
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./pages/Home/HomePage.tsx";
import AboutPage from "./pages/About/AboutPage.tsx";
import AddPost from "./pages/AddPost/AddPostPage.tsx";
import ContactsPage from "./pages/Contacts/ContactsPage.tsx";
import AppHeader from "./widgets/AppHeader/AppHeader.tsx";
import AppFooter from "./widgets/AppFooter/AppFooter.tsx";

import { Layout } from "antd";
import { AppRoutes } from "./shared/routing/routes.ts";
import { Content } from "antd/es/layout/layout";
import { blogApi } from "./shared/api/api.ts";
import PostDetailsPage from "./pages/PostDetails/PostDetailsPage.tsx";
import EditPost from "./pages/EditPost/EditPostPage.tsx";

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
          <Route path={AppRoutes.main} element={<HomePage />} />
          <Route path={AppRoutes.about} element={<AboutPage />} />
          <Route path={AppRoutes.contacts} element={<ContactsPage />} />

          <Route path={AppRoutes.addPost} element={<AddPost />} />

          <Route path={AppRoutes.postDetails} element={<PostDetailsPage />} />

          <Route path={AppRoutes.editPost} element={<EditPost />} />
        </Routes>
      </Content>

      <AppFooter />
    </Layout>
  )
}

export default App;

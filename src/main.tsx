import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm,
    }}>
      <App />
    </ConfigProvider>
  </BrowserRouter>
);


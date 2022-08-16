import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Catalog from "./pages/Catalog";
import Topic from "./pages/Topic";
import Layout from "./layouts/Default";
export interface Props {
  isAuth: boolean;
}
export default function useRoutes(props: Props) {
  if (props.isAuth) {
    return (
      <Routes>
        <Route
          path="/catalog"
          element={
            <Layout>
              <Catalog />
            </Layout>
          }
        />
        <Route path="/catalog/:id" element={<Topic />} />
        <Route path="*" element={<Navigate to="/catalog" replace />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

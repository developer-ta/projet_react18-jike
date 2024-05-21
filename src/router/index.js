import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

const router = createBrowserRouter([
  { path: "/", element: <Layout /> },
  { path: "/login", element: <Login /> },
  { path: "/layout", element: <Layout /> },
  {
    /* url  */
  },
  { path: "", element: <Layout /> },
  { path: "", element: <Layout /> },
  { path: "", element: <Layout /> },
  { path: "", element: <Layout /> },
]);

export default router;

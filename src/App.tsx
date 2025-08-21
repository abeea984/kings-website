import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Squad from "./pages/Squad";
import Fixtures from "./pages/Fixtures";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      { path: "squad", element: <Squad /> },
      { path: "fixtures", element: <Fixtures /> },
      { path: "shop", element: <Shop /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

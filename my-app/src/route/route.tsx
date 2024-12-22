import routes from "../config/config";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Client/Home";

// Khai báo interface cho route
interface Route {
  path: string;
  component: React.ComponentType;
  layout?: React.ComponentType<{ children: React.ReactNode }> | null;
}

// Danh sách các route
const publicRoutes: Route[] = [
  { path: routes.home, component: Home, layout: DefaultLayout },
];

export default publicRoutes;

import Revenue from "./Revenue";
import Order from "./Order";
import Home from "./Home";
import Profile from "./Profile";
import Menu from "./Menu";
import Notification from "./Notification";
import Setting from "./Setting";

const routes = [
  { path: "dashboard", element: Home },
  { path: "menu", element: Menu },
  { path: "profile", element: Profile },
  { path: "order", element: Order },
  { path: "revenue", element: Revenue },
  { path: "notification", element: Notification },
  { path: "setting", element: Setting },
  { path: "*", element: Home },
];

export default routes;

import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import UserPage from "views/User.jsx";

var routes = [
  {
    path: "/dashboard",
    name: "Painel",
    test: "painel",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notificações",
    test: "notificacoes",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "Usuários",
    test: "usuarios",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin"
  }
];
export default routes;

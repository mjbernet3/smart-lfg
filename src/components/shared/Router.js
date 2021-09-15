import { Switch, Route } from "react-router-dom";
import AuthRoute from "src/components/shared/AuthRoute";
import Home from "src/pages/Home.jsx";
import Login from "src/pages/Login.jsx";
import urls from "src/utils/urls";

function Router() {
  return (
    <Switch>
      <Route path={urls.login} component={Login} />
      <AuthRoute path={urls.home} component={Home} />
    </Switch>
  );
}

export default Router;

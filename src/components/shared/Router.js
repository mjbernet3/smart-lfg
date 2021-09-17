import AuthRoute from "components/shared/AuthRoute";
import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import { Switch, Route } from "react-router-dom";
import urls from "utils/urls";

function Router() {
  return (
    <Switch>
      <Route path={urls.register} component={Register} />
      <Route path={urls.login} component={Login} />
      <AuthRoute path={urls.home} component={Home} />
    </Switch>
  );
}

export default Router;

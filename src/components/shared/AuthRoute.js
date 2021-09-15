import { useAuth } from "contexts/AuthProvider";
import { Redirect, Route } from "react-router-dom";
import urls from "utils/urls";

function AuthRoute(props) {
  const { isLoading, id } = useAuth();

  // TODO: Add a loading indicator here
  if (isLoading) {
    return null;
  }

  if (!id) {
    return <Redirect to={urls.login} />;
  }

  return <Route {...props} />;
}

export default AuthRoute;

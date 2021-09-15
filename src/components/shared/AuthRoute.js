import { Redirect, Route } from "react-router-dom";
import { useAuth } from "src/contexts/AuthProvider";
import urls from "src/utils/urls";

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

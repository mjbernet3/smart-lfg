import axios from "axios";
import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState, useContext } from "react";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URI;

    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      const currentInfo = jwtDecode(token);
      setUserInfo(currentInfo);
    }

    setLoading(false);
  }, []);

  const saveCurrentUser = (token) => {
    axios.defaults.headers.common["Authorization"] = token;
    localStorage.setItem("token", token);
    const newInfo = jwtDecode(token);
    setUserInfo(newInfo);
  };

  const removeCurrentUser = () => {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
    setUserInfo({});
  };

  const auth = {
    isLoading,
    ...userInfo,
    saveCurrentUser,
    removeCurrentUser,
  };

  return <AuthContext.Provider value={auth} {...props} />;
}

export default AuthProvider;

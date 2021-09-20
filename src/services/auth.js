import { internalRequest } from "utils/requests";
import urls from "utils/urls";

export const register = async (games, preferences, account) => {
  return internalRequest({
    url: urls.api.register,
    method: "POST",
    body: {
      games,
      preferences,
      account,
    },
  });
};

export const login = async (email, password) => {
  return internalRequest({
    url: urls.api.login,
    method: "POST",
    body: {
      email,
      password,
    },
  });
};

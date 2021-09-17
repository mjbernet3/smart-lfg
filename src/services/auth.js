import { internalRequest } from "utils/requests";
import urls from "utils/urls";

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

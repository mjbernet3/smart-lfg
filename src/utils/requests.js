import axios from "axios";

export const internalRequest = async ({ url, method, body }) => {
  try {
    const { data } = await axios({
      url,
      method,
      data: body,
    });

    return data.payload;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      throw new Error("No response from server");
    } else {
      throw new Error(error.message);
    }
  }
};

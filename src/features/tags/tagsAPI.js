import axios from "axios";

export const getTags = async () => {
  const response = await axios.get("http://localhost:9000/tags");
  return response.data;
};

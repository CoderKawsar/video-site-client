import axios from "axios";

export const getVideos = async () => {
  const response = await axios.get("http://localhost:9000/videos");
  return response.data;
};

import axios from "axios";

export const getVideo = async (id) => {
  const response = await axios.get(`http://localhost:9000/videos/${id}`);
  return response.data;
};

import axios from "axios";

const API_URL = "http://localhost:3001";

export const getAllFacts = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/cat-facts`);

    return res.data.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

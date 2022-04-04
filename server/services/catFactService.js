import "dotenv/config";
import axios from "axios";

export const getFactsFromAPI = async () => {
  try {
    const config = {
      headers: { "Content-Type": "application/json" },
      timeout: 60e3,
    };

    const res = await axios.get(`${process.env.SOURCE_API}/facts`, config);
    return res.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

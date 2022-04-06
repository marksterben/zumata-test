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

export const addNewFact = async (input) => {
  try {
    const res = await axios.post(`${API_URL}/api/cat-fact/`, { text: input });

    return res.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const deleteFact = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/api/cat-fact/${id}`);

    return res.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const editFact = async (id, input) => {
  try {
    const res = await axios.put(`${API_URL}/api/cat-fact/${id}`, {
      text: input,
    });

    return res.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

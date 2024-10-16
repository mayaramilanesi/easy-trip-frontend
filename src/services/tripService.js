import axios from "axios";

let API_URL = import.meta.env.VITE_API_URL;

console.log("LOG - API_URL", API_URL);

export const fetchTrips = async (page, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar viagens", error);
    throw error;
  }
};

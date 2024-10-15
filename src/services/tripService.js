import axios from 'axios';

const API_URL = process.env.API_URL;

export const fetchTrips = async (page, limit = 10) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar viagens', error);
    throw error;
  }
};

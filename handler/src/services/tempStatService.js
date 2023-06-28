import axios from "axios";

const API_URL = process.env.REACT_APP_BASE_URL + "/api/tempStats";

const addTempStat = async (data) => {
  return axios.post(`${API_URL}/add`, data);
};

const searchTempStat = async (documentId) => {
  return axios.get(`${API_URL}/search/${documentId}`);
};

const deleteTempStat = async (documentId) => {
  return axios.delete(`${API_URL}/delete/${documentId}`);
};

const updateTempStat = async (documentId, updatedData) => {
  return axios.put(`${API_URL}/update/${documentId}`, updatedData);
};

export default {
  addTempStat,
  searchTempStat,
  deleteTempStat,
  updateTempStat
};

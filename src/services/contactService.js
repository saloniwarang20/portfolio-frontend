import api from "./api";

export const sendMessage = async (contactData) => {
  const response = await api.post("/contact", contactData);
  return response.data;
};
import axios from "axios";
import { CLUB_LOGIN_URL } from "../Utils/constants";

export const clubLoginService = async (email, password) => {
  try {
    const { data } = await axios.post(CLUB_LOGIN_URL, { email, password });
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

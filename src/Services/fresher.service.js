import axios from "axios";
import {
  FREHSERS_lOGIN_URL,
  REGISTER_URL,
  VERIFY_OTP_URL,
} from "../Utils/constants";

export const verifyOTPService = async (email, OTP) => {
  try {
    console.log("verifyotp service : ", email);

    const { data } = await axios.post(VERIFY_OTP_URL, { email, OTP });
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const RegisterService = async (email, password, name) => {
  try {
    console.log("RegisterService : ", email);

    const { data } = await axios.post(REGISTER_URL, { email, password, name });
    // const { data } = await fetch(REGISTER_URL, {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     name: name,
    //     email: email,
    //     password: password,
    //   }),
    // })
    // .then((res) => res.json())
    // .then((data) => {
    //   if (data.error) return "Oops! Something went wrong";
    //   else return data;
    // });
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fresherLoginService = async (email, password) => {
  try {
    const { data } = await axios.post(FREHSERS_lOGIN_URL, { email, password });
    return data;
  } catch (error) {
    throw error.response.data;
  }
};

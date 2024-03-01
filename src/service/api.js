import axios from "axios";

const url = "http://localhost:5000";

export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${process.env.REACT_APP_BACKEND}/login`, user);
  } catch (error) {
    console.log("Error while calling login API: ", error);
  }
};

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${process.env.REACT_APP_BACKEND}/signUp`, user);
  } catch (error) {
    console.log("Error while calling Signup API: ", error);
  }
};

export const getProductById = async (id) => {
  try {
    return await axios.get(`${process.env.REACT_APP_BACKEND}/product/${id}`);
  } catch (error) {
    console.log("Error while getting product by id response", error);
  }
};

export const payUsingPaytm = async (data) => {
  try {
    let response = await axios.post(
      `${process.env.REACT_APP_BACKEND}/payment`,
      data
    );
    return response.data;
  } catch (error) {
    console.log("Error", error);
  }
};

import axios from "axios";

let URL = "https://eshop-deve.herokuapp.com/api/v2/orders";

const headers = {
  Authorization: `${process.env.REACT_APP_API_TOKEN}`,
};
export const getOrders = () => {
  return axios(URL, {
    headers,
  });
};

export const getProducts = (id) => {
  return axios(`${URL}/${id}`, {
    headers,
  });
};

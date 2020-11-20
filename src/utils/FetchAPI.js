import axios from "axios";

let URL = "https://eshop-deve.herokuapp.com/api/v2/orders";

const headers = {
  Authorization:
    "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ",
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

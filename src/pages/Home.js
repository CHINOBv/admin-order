import { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  let URL = "https://eshop-deve.herokuapp.com/api/v2/orders";

  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    const getOreders = async () => {
      let response = await axios(URL, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ",
        },
      });

      setOrders(response.data.orders);
    };
    getOreders();
  }, []);

  return (
    <>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr className="">
            <th scope="col">Number</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {Orders.map((Order) => (
            <tr key={Order.id}>
              <td>{Order.number}</td>
              <td>
                <Link to={`/order/${Order.id}`}>{Order.name}</Link>
              </td>
              <td style={{ textTransform: "uppercase" }}>
                {Order.status.financial}
              </td>
              <td>{Order.totals.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;

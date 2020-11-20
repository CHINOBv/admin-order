import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { getOrders } from "../utils/FetchAPI";

const Home = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then(response => setOrders(response.data.orders))    
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
          {orders.map((Order) => (
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

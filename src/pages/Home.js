import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { getOrders } from "../utils/FetchAPI";

const Home = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => setOrders(response.data.orders));
  }, []);

  return (
    <>
      <table className="table table-striped table-responsive-sm">
        <thead style={{ backgroundColor: "#0984e3", color: "#fff" }}>
          <tr className="">
            <th scope="col">Number</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            let regx = /#/g;
            let name = order?.name?.replace(regx, '')
            return (
              <tr key={order.id}>
                <td>{order.number}</td>
                <td>
                  <Link
                    to={`/order/${order.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: 18,
                        backgroundColor: "#44bd32",
                        color: "#fff",
                        padding: 0,
                        borderRadius: 19,
                        margin: "auto",
                        fontWeight: 'bold'
                      }}
                      className="w-75"
                    >
                      {name}
                    </p>
                  </Link>
                </td>
                <td style={{ textTransform: "uppercase" }}>
                  {order.status.financial}
                </td>
                <td>{order.totals.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;

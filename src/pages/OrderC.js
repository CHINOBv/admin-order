import { useState, useEffect } from "react";

import axios from "axios";
import { withRouter } from "react-router-dom";

const OrderC = (props) => {
  let URL = `https://eshop-deve.herokuapp.com/api/v2/orders/${props.match.params.id}`;

  const [Products, setProducts] = useState([]);
  const [OrderInf, setOrderInf] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      //Fetching API
      let response = await axios(URL, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ",
        },
      });
      //Save Products on State
      setProducts(response.data.order.items);
      //Save info of Order on State
      setOrderInf(response.data.order);
    };
    getProducts();
  }, []);
  //Create Format of date for show
  const createdAt = new Date(OrderInf.dates?.createdAt);
  return (
    <div className="container">
      <div className="row row-cols">
        <div className="col w-100">
          <ul className="list-group">
            <li className="list-group-item active">Order Information</li>
            <li className="list-group-item">Order ID: {OrderInf.id}</li>
            <li className="list-group-item">Order Number: {OrderInf.number}</li>
            <li className="list-group-item">
              Crated At: {createdAt.toLocaleString("es-MX")}
            </li>
            <li className="list-group-item">Total: {OrderInf.totals?.total}</li>
          </ul>
        </div>
        <div className="col-8 w-auto">
          <table className="table table-striped">
            <thead className="thead-dark">
              <tr className="">
                <th scope="col">SKU</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {Products.map((Product) => (
                <tr>
                  <td>{Product.sku}</td>
                  <td>{Product.name}</td>
                  <td>{Product.fulfillment.quantity}</td>
                  <td>{Product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default withRouter(OrderC);

/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import Alert from "../components/Alert";

const OrderC = (props) => {
  const {id} = props.match.params;
  let URL = `https://eshop-deve.herokuapp.com/api/v2/orders/${id}`;

  const [Products, setProducts] = useState([]);
  const [OrderInf, setOrderInf] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const getProducts = () => {
      //Fetching API
      axios(URL, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ",
        },
      })
        .then((res) => {
          //Save info of Order on State
          setOrderInf(res.data.order);
          //Save Products on State
          setProducts(res.data.order.items);
        })  //If not exist the order show Alert
        .catch((e) => setShowAlert(true));
    };
    getProducts();
  }, []);
  //Create Format of date for show
  const createdAt = new Date(OrderInf.dates?.createdAt);
  return (
    <>
      {showAlert ? (
        <Alert
          message={{
            title: "Order Not Found",
            msg: "We could not find your order, Please verify your URL",
            showBtn: true,
          }}
        />
      ) : (
        <div className="container">
          <div className="row row-cols">
            <div className="col-md-4 col-sm w-100 mb-4">
              <ul className="list-group">
                <li className="list-group-item active text-center">Order Information</li>
                <li className="list-group-item">Order ID: {OrderInf.id}</li>
                <li className="list-group-item">
                  Order Number: {OrderInf.number}
                </li>
                <li className="list-group-item">
                  Crated At: {createdAt.toLocaleString("es-MX")}
                </li>
                <li className="list-group-item">
                  Total: {OrderInf.totals?.total}
                </li>
                <li className='list-group-item'>
                  <Link to={`/order/${id}/add-product`} className='btn btn-primary d-block '>Add Product</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-8 col-sm-12">
              <table className="table table-striped table-responsive-sm">
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
                    <tr className="" key={Product.id}>
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
      )}
    </>
  );
};

export default withRouter(OrderC);

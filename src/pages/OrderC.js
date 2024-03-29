/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { withRouter, Link } from "react-router-dom";

import { AlertError, AlertSucces } from "../components/Alert";
import { getProducts } from "../utils/FetchAPI";

const OrderC = (props) => {
  const { id } = props.match.params;

  const [products, setProducts] = useState([]);
  const [orderInf, setOrderInf] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    //Fetching API
    getProducts(id)
      .then((res) => {
        //Save info of Order on State
        setOrderInf(res.data.order);
        //Save products on State
        const datas = JSON.parse(localStorage.getItem("products"));
        if (datas) {
          const data = datas.filter((data) => data.orderId === id);
          setProducts(() => [...res.data.order.items, ...data]);
        }
      }) //If not exist the order show Alert
      .catch((e) => {
        AlertError({
          title: "Order Not Found",
          message: "We could not find your order, Please verify your URL",
          showBtn: true,
        });
        return setShowAlert(true);
      });
  }, []);
  //Create Format of date for show
  const createdAt = new Date(orderInf.dates?.createdAt);
  return (
    <>
      {showAlert ? null : (
        <div className="container">
          <div className="row row-cols">
            <div className="col-md-4 col-sm w-100 mb-4">
              <ul className="list-group">
                <li className="list-group-item active text-center">
                  Order Information
                </li>
                <li className="list-group-item">Order ID: {orderInf.id}</li>
                <li className="list-group-item">
                  Order Number: {orderInf.number}
                </li>
                <li className="list-group-item">
                  Crated At: {createdAt.toLocaleString("es-MX")}
                </li>
                <li className="list-group-item">
                  Status:{" "}
                  <span className="text-capitalize">
                    {orderInf.status?.financial}
                  </span>
                </li>
                <li className="list-group-item">
                  <Link
                    to={`/order/${id}/add-product`}
                    className="btn  d-block btn-outline-primary "
                  >
                    Add Product
                  </Link>

                  <button
                    onClick={() =>
                      AlertSucces({
                        title: "Payment Made",
                        message: "Your payment has been successful",
                      })
                    }
                    className="btn btn-success d-block w-100 mt-4"
                  >
                    Pay
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-md-8 col-sm-12">
              <table className="table table-striped table-responsive-sm">
                <thead style={{ backgroundColor: "#0984e3", color: "#fff" }}>
                  <tr className="">
                    <th scope="col">SKU</th>
                    <th scope="col">Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.sku}</td>
                      <td>{product.name}</td>
                      <td>{product.fulfillment.quantity}</td>
                      <td>{product.price}</td>
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

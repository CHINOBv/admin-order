import { useState, useEffect } from "react";

import axios from "axios";
import { withRouter } from "react-router-dom";

const OrderC = (props) => {

  let URL = `https://eshop-deve.herokuapp.com/api/v2/orders/${props.match.params.id}`;

  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let response = await axios(URL, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ",
        },
      });
      //console.log(response)
      setProducts(response.data.order.items)
    };
    getProducts();
  }, []);

  return (
    <>
      <table className="table table-striped">
        <thead className='thead-dark'>
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
    </>
  );
};

export default withRouter(OrderC);

import { useState } from "react";

import { AlertError, AlertSucces } from "../components/Alert";
import { v4 as uuidV4 } from "uuid";

const AddProduct = ({ history, match }) => {
  //console.log(history);
  const { id } = match.params;
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  const [validSku, setValidSku] = useState("");
  const [validName, setValidName] = useState("");
  const [validQuantity, setValidQuantity] = useState("");
  const [validPrice, setValidPrice] = useState("");

  const addProduct = (e) => {
    e.preventDefault();

    if (!sku.trim() || !name.trim() || quantity <= 0 || price <= 0) {
      AlertError({
          title: "All Fields Are Required",
          message: "Please Fill All Fields",
      });

      return;
    }

    let newProduct = {
      id: uuidV4(),
      sku,
      name,
      fulfillment: { quantity },
      price,
      orderId: id,
    };
    const productsLS = JSON.parse(localStorage.getItem("products"));
    productsLS?.push(newProduct);

    localStorage.setItem(
      "products",
      productsLS ? JSON.stringify(productsLS) : JSON.stringify([newProduct])
    );
    AlertSucces({
      title: "Added product",
      message: "The Product has been successfully Added to the Order",
    });

    setName("");
    setSku("");
    setQuantity(0);
    setPrice(0);
  };

  return (
    <>
      <div className="row w-100 m-auto">
        <div className="card text-center m-auto">
          <h5
            className="card-title pt-3"
            style={{ borderTop: "solid", borderTopColor: "#0984e3" }}
          >
            Add New Product
          </h5>
          <form className="card-body" onSubmit={(e) => addProduct(e)}>
            <div className="form m-auto">
              <div className="form-group col-md-8 m-auto">
                <label htmlFor="sku">SKU</label>
                <input
                  required
                  autoComplete="off"
                  type="text"
                  className={`form-control mb-md-3 ${validSku}`}
                  id="sku"
                  placeholder="sku for this product..."
                  autoFocus
                  value={sku}
                  onChange={(e) => setSku(e.target.value)}
                  onBlur={() =>
                    setValidSku(!sku.trim() ? "is-invalid" : "is-valid")
                  }
                />
                <div className="invalid-feedback">Please Add a SKU</div>
              </div>
              <div className="form-group col-md-8 m-auto">
                <label htmlFor="name">Name</label>
                <input
                  required
                  autoComplete="off"
                  type="text"
                  className={`form-control mb-md-3 ${validName}`}
                  id="name"
                  placeholder="name for this product..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() =>
                    setValidName(!name.trim() ? "is-invalid" : "is-valid")
                  }
                />
                <div className="invalid-feedback">Please Add a Name</div>
              </div>
            </div>
            <div className="form-row m-auto col-md-8">
              <div className="form-group col-md-4">
                <label htmlFor="sku">Quantity</label>
                <input
                  required
                  autoComplete="off"
                  type="number"
                  className={`form-control ${validQuantity}`}
                  id="sku"
                  placeholder="0"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  onBlur={() =>
                    setValidQuantity(quantity <= 0 ? "is-invalid" : "is-valid")
                  }
                />
                <div className="invalid-feedback">Please Add a Quantity</div>
              </div>
              <div className="form-group col-md-8 ">
                <label htmlFor="name">Price</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                  </div>
                  <input
                    required
                    formNoValidate
                    autoComplete="off"
                    type="number"
                    className={`form-control ${validPrice}`}
                    id="name"
                    placeholder="0"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onBlur={() =>
                      setValidPrice(price <= 0 ? "is-invalid" : "is-valid")
                    }
                  />
                  <div className="invalid-feedback">Please Add a Price</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md mb-4">
                <button type="submit" className="btn btn-block btn-success">
                  Add
                </button>
              </div>
              <div className="col-md">
                <button
                  className="btn btn-block btn-outline-danger"
                  onClick={() => history.push(`/order/${id}`)}
                >
                  {!sku.trim() && !name.trim() && quantity <= 0 && price <= 0
                    ? "Go Back"
                    : "Cancel"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;

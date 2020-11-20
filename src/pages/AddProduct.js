import { Link, withRouter } from "react-router-dom";

const AddProduct = (props) => {
  return (
    <>
      <div className="row w-100 m-auto">
        <div className="card text-center m-auto">
          <h5 className="card-header bg-info text-white">Add New Product</h5>
          <div className="card-body">
            <div className="form m-auto">
              <div className="form-group col-md-8 m-auto">
                <label htmlFor="sku">SKU</label>
                <input
                  type="text"
                  className="form-control mb-md-3"
                  id="sku"
                  placeholder="01_Laptop"
                />
              </div>
              <div className="form-group col-md-8 m-auto">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control mb-md-3"
                  id="name"
                  placeholder="Laptop"
                />
              </div>
            </div>
            <div className="form-row m-auto col-md-8">
              <div className="form-group col-md-4">
                <label htmlFor="sku">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="sku"
                  placeholder="1"
                />
              </div>
              <div className="form-group col-md-8 ">
                <label htmlFor="name">Price</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">$</div>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    id="name"
                    placeholder="100"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md mb-4">
                <button className="btn btn-block btn-success">Add</button>
              </div>
              <div className="col-md">
                <button className="btn btn-block btn-outline-danger">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;

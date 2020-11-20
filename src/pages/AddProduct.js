import { useState, useEffect } from 'react';

import Alert from '../components/Alert';

const AddProduct = ({history}) => {
  //console.log(history);

  const [SKU, setSKU] = useState('');
  const [Name, setName] = useState('');
  const [Quantity, setQuantity] = useState(0);
  const [Price, setPrice] = useState(0);

  const [ShowAlert, setShowAlert] = useState(false)

  const addProduct = (e) => {
    e.preventDefault();

    if(!SKU.trim() || !Name.trim() || Quantity <= 0 || Price <= 0){
        setShowAlert(true);
      return;
    }

    setShowAlert(false);
    console.log('pass')

  } 

  return (
    <>
      <div className="row w-100 m-auto">
        <div className="card text-center m-auto">
          <h5 className="card-title pt-3" style={{ borderTop: 'solid', borderTopColor: '#0984e3' }}>Add New Product</h5>
          {ShowAlert ? <Alert message={{ title: 'All Fields Are Required', msg: 'Please Fill All Fields' }}/> : null}
          <form className="card-body" onSubmit={(e) => addProduct(e)}>
            <div className="form m-auto">
              <div className="form-group col-md-8 m-auto">
                <label htmlFor="sku">SKU</label>
                <input
                  required
                  autoComplete='off'
                  type="text"
                  className={`form-control mb-md-3 ${!SKU.trim() ? 'is-invalid' : 'is-valid'}`}
                  id="sku"
                  placeholder="SKU for this product..."
                  autoFocus
                  value={SKU}
                  onChange={(e) => setSKU(e.target.value)}
                />
                <div className='invalid-feedback'>
                  Please Add a SKU
                </div>
              </div>
              <div className="form-group col-md-8 m-auto">
                <label htmlFor="name">Name</label>
                <input
                  required
                  autoComplete='off'
                  type="text"
                  className={`form-control mb-md-3 ${!Name.trim() ? 'is-invalid' : 'is-valid'}`}
                  id="name"
                  placeholder="Name for this product..."
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className='invalid-feedback'>
                  Please Add a Name
                </div>
              </div>
            </div>
            <div className="form-row m-auto col-md-8">
              <div className="form-group col-md-4">
                <label htmlFor="sku">Quantity</label>
                <input
                  required
                  autoComplete='off'
                  type="number"
                  className={`form-control ${Quantity <= 0? 'is-invalid': 'is-valid' }`}
                  id="sku"
                  placeholder="0"
                  value={Quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <div className='invalid-feedback'>
                  Please Add a Quantity
                </div>
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
                    autoComplete='off'
                    type="number"
                    className={`form-control ${Price <= 0? 'is-invalid': 'is-valid' }`}
                    id="name"
                    placeholder="0"
                    value={Price}
                  onChange={(e) => setPrice(e.target.value)}
                  />
                  <div className='invalid-feedback'>
                  Please Add a Price
                </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md mb-4">
                <button type='submit' className="btn btn-block btn-success">Add</button>
              </div>
              <div className="col-md">
                <button className="btn btn-block btn-outline-danger" onClick={() => history.goBack()}>
                  Cancel
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

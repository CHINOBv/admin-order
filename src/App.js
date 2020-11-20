import { useState, useEffect } from "react";
import axios from "axios";

function App() {
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
      console.log(response);
    };
    getOreders();
  }, []);

  return (
    <div className="App">
      <h1>Head</h1>
    </div>
  );
}

export default App;

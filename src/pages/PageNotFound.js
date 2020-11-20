import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container m-auto justify-content-center">
      <h1 className="text-center text-black font-weight-bold">
        404 Page Not Found :(
      </h1>
      <h4 className="text-center">You want to go back?</h4>
      <Link
        className="btn btn-block btn-danger w-100 font-weight-bold text-uppercase"
        to="/"
      >
        Go Back
      </Link>
    </div>
  );
};

export default PageNotFound;

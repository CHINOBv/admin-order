import { Link } from "react-router-dom";
const Alert = ({ message }) => {
  return (
    <div className="alert alert-danger w-75 m-auto" role="alert">
      <h4 className="alert-heading">Error: {message.title}</h4>
      <p>{message.msg}</p>
      {message.showBtn ? (
        <>
          <hr />
          <Link to="/" className="btn btn-block btn-danger">
            Go to Home
          </Link>{" "}
        </>
      ) : null}
    </div>
  );
};

export default Alert;

import { Link } from 'react-router-dom';
const Alert = ({ message }) => {
  return (
    <div className="alert alert-danger" role="alert">
      <h4 className="alert-heading">Error: {message.title}</h4>
      <p>
      {message.msg}
      </p>
      <hr />
      <Link to='/' className='btn btn-block btn-danger'>Go to Home</Link>
    </div>
  );
};

export default Alert;

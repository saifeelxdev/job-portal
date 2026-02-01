import { Link } from 'react-router-dom';

function Unauthorized() {
  return (
    <>
      <div className="min-h-screen flex-direction-column text-center">
        <h1 className="text-red-500 text-5xl">403 - Unathorized</h1>
        <p className=" text-2xl">
          you do not have permission to access this page.
        </p>
        <div className="text-blue-500 hover:text-blue-700 underline text-2xl">
          <Link to="/login">Go to Login</Link>
        </div>
      </div>
    </>
  );
}

export default Unauthorized;

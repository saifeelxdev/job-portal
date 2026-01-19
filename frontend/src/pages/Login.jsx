import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';

function Login() {
  return (
    <>
      <div className="min-h-screen bg-gray-700 grid place-items-center">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8 grid gap-5">
          <h2 className="text-center font-sans text-4xl font-semibold">
            Login
          </h2>

          <InputField
            label="Email"
            id="email"
            type="email"
            placeholder="Enter Email"
          />
          <InputField
            label="Password"
            id="password"
            type="password"
            placeholder="Enter Password"
          />
          <Button
            text="Login"
            className="bg-blue-600 p-2 text-white cursor-pointer hover:bg-blue-700 transition-colors duration-200 ease-out"
          />
        </div>
      </div>
    </>
  );
}

export default Login;

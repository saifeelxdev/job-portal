import InputField from '../components/InputField/InputField';
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import useAuth from '../hooks/useAuth';
function Login() {
  const navigate = useNavigate();
  const { formData, handleChange } = useForm({
    email: '',
    password: '',
  });

  const { login, loading, error } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await login(formData);
      alert('Login Successful');
    } catch (error) {
      console.log(error.message || 'login failed');
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-700 grid place-items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-8 grid gap-5"
        >
          <h2 className="text-center font-sans text-4xl font-semibold">
            Login
          </h2>
          {error && <p className="text-red-500">{error}</p>}
          <InputField
            label="Email"
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
          <InputField
            label="Password"
            name="password"
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <Button
            text={loading ? 'Logging in' : 'Login'}
            type="submit"
            disabled={loading}
            className="bg-blue-600 p-2 text-white cursor-pointer hover:bg-blue-700 transition-colors duration-200 ease-out"
          />
        </form>
      </div>
    </>
  );
}

export default Login;

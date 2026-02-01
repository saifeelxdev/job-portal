import { useState } from 'react';
import { loginUser, registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
export default function useAuth() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function login(formData) {
    setLoading(true);
    setError('');

    try {
      const data = await loginUser(formData);

      localStorage.setItem('token', data.data.token);
      if (data.data.user.role === 'recruiter') {
        navigate('/recruiter');
      } else if (data.data.user.role === 'candidate') {
        navigate('/candidate');
      }
      return data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function register(formData) {
    setLoading(true);
    setError('');
    try {
      const data = await registerUser(formData);
      return data;
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return { register, login, loading, error };
}

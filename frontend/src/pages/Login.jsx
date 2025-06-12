import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { ShopContext } from '../context/ShopContext';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const { token, setToken, backendUrl } = useContext(ShopContext);

  const [currentState, setCurrentState] = useState('Login');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (currentState === 'Sign Up' && password !== rePassword) {
      toast.error('Passwords do not match.');
      return;
    }

    try {
      let response;

      if (currentState === 'Sign Up') {
        response = await axios.post(`${backendUrl}/api/user/register`, {
          firstName,
          lastName,
          email,
          password,
        });
      } else {
        response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });
      }

      console.log('API Response:', response.data);

      if (response.data.success && response.data.token) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user)); // ✅ Fix added here
        console.log('Token stored:', response.data.token);
        navigate('/');
      } else {
        toast.error(response.data.message || 'Login failed.');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      const errorMsg =
        error.response?.data?.message || 'Authentication failed. Please try again.';
      toast.error(errorMsg);
    }
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }

    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className="bg-[#efd1c0] min-h-screen">
      <Layout>
        <ToastContainer />
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-16 mb-20 gap-5 text-[#6b1d1d]"
        >
          <div className="flex items-center gap-2 mb-6">
            <p className="prata-regular text-3xl font-bold">{currentState}</p>
            <hr className="border-none h-[2px] w-8 bg-[#24160f]" />
          </div>

          {currentState === 'Sign Up' && (
            <>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md"
                placeholder="Last Name"
                required
              />
            </>
          )}

          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md"
            placeholder="Email"
            required
          />

          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md"
            placeholder="Password"
            required
          />

          {currentState === 'Sign Up' && (
            <>
              <input
                type="password"
                onChange={(e) => setRePassword(e.target.value)}
                className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md"
                placeholder="Re-enter Password"
                required
              />
              <div className="flex items-start gap-2 w-full text-sm">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required
                />
                <label>
                  I accept the{' '}
                  <a href="/terms" className="underline font-bold">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </>
          )}

          <div className="w-full flex justify-between text-sm mt-[-6px]">
            <p className="cursor-pointer hover:underline">Forgot password?</p>
            {currentState === 'Login' ? (
              <p
                onClick={() => setCurrentState('Sign Up')}
                className="cursor-pointer hover:underline"
              >
                Create Account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState('Login')}
                className="cursor-pointer hover:underline"
              >
                Login Here
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#6b1d1d] text-[#efd1c0] font-semibold px-8 py-3 mt-6 rounded-md hover:bg-[#501414] transition"
          >
            {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </Layout>
    </div>
  );
};

export default Login;

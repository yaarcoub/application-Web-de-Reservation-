import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../api/services/apiService';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await authService.login(email, password);
      console.log('Login successful:', response.data);
      const { accessToken, role, nom, urlImage, id , pays,age,genre } = response.data;

      // Sauvegarde dans localStorage
      authService.setAuthToken(accessToken, {
        role,
        nom,
        urlImage,
        email,
        id,
        pays,age,genre 
      });

        console.log("Role after login:", role);
      // Redirection selon le rôle
      if (role === 'ADMIN') {
        navigate('/agent/dashboard');
      } else if (role === 'CLIENT') {
        navigate('/hotels');
      } else {
        navigate('/sign-in');
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 'Email ou mot de passe incorrect'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="vh-xxl-100">
      <div className="container h-100 d-flex px-0 px-sm-4">
        <div className="row justify-content-center align-items-center m-auto">
          <div className="col-12">
            <div className="bg-mode shadow rounded-3 overflow-hidden">
              <div className="row g-0">

                {/* Illustration */}
                <div className="col-lg-6 d-flex align-items-center order-2 order-lg-1">
                  <div className="p-3 p-lg-5">
                    <img
                      src="/assets/images/element/image_sign_in.svg"
                      alt=""
                    />
                  </div>
                  <div className="vr opacity-1 d-none d-lg-block"></div>
                </div>

                {/* Formulaire */}
                <div className="col-lg-6 order-1">
                  <div className="p-4 p-sm-7">
                    <Link className="navbar-brand" to="/">
                      <img
                        src="/assets/images/logo-icon.svg"
                        width={50}
                        alt="Logo"
                      />
                    </Link>

                    <h1 className="mb-2 h3">Welcome back</h1>
                    <p className="mb-0">
                      New here? <Link to="/sign-up">Create an account</Link>
                    </p>

                    {/* Message d’erreur */}
                    {error && (
                      <div className="alert alert-danger mt-3">{error}</div>
                    )}

                    <form className="mt-4 text-start" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Enter email id</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3 position-relative">
                        <label className="form-label">Enter password</label>
                        <input
                          className="form-control"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>

                      {/* Lien Forgot Password */}
                      <div className="mb-3 text-end">
                        <Link to="/reset-password" className="small text-decoration-none">
                          Forgot Password?
                        </Link>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="btn btn-primary w-100"
                          disabled={loading}
                        >
                          {loading ? 'Logging in...' : 'Login'}
                        </button>
                      </div>
                    </form>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

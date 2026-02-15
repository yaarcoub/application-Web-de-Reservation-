import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../api/services/apiService';

const TwoFactorAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [code, setCode] = useState(['', '', '', '', '', '']); // 6 digits
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Récupérer l'email passé depuis SignUp
    if (location.state?.email) {
      setUserEmail(location.state.email);
    }
  }, [location.state]);

  // 🔹 Modifier un chiffre du code
  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return; // que des chiffres
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // focus next input automatiquement
    if (value && index < code.length - 1) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  // 🔹 Soumettre le code pour vérification
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = code.join('');
    if (token.length !== 6) return;

    try {
      setLoading(true);
      setError('');

      await authService.verify(token); // Appel backend EnableAccount(token)

      alert('Compte vérifié avec succès ✅');
      navigate('/sign-in'); // rediriger vers sign-in après vérification
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Code invalide ou expiré ❌');
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Resend code
  const handleResend = async () => {
    try {
      setLoading(true);
      setError('');

      await authService.resendVerification(userEmail); // Nouveau endpoint backend pour renvoyer code
      alert('Le code de vérification a été renvoyé 📧');
    } catch (err) {
      console.error(err);
      setError('Impossible de renvoyer le code ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="vh-xxl-100">
      <div className="container h-100 d-flex px-0 px-sm-4">
        <div className="row justify-content-center align-items-center m-auto">
          <div className="col-12">
            <div className="shadow bg-mode rounded-3 overflow-hidden">
              <div className="row g-0 align-items-center">

                {/* Vector Image */}
                <div className="col-lg-6 d-md-flex align-items-center order-2 order-lg-1">
                  <div className="p-3 p-lg-5">
                    <img src="/assets/images/element/forgot-pass.svg" alt="Two factor authentication illustration" />
                  </div>
                  <div className="vr opacity-1 d-none d-lg-block"></div>
                </div>

                {/* Information */}
                <div className="col-lg-6 order-1">
                  <div className="p-4 p-sm-7">
                    <Link to="/">
                      <img className="mb-4 h-50px" src="/assets/images/logo-icon.svg" alt="Booking logo" />
                    </Link>
                    <h1 className="mb-2 h3">Two Factor Authentication</h1>
                    <p className="mb-sm-0">We have sent a code to <b>{userEmail}</b></p>

                    <form className="mt-sm-4" onSubmit={handleSubmit}>
                      {error && <div className="alert alert-danger">{error}</div>}

                      <p className="mb-1">Enter the 6-digit code:</p>
                      <div className="autotab d-flex justify-content-between gap-1 gap-sm-3 mb-2">
                        {code.map((digit, index) => (
                          <input
                            key={index}
                            id={`code-${index}`}
                            type="text"
                            maxLength="1"
                            className="form-control text-center p-3"
                            value={digit}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            required
                          />
                        ))}
                      </div>

                      <div className="d-sm-flex justify-content-between small mb-4">
                        <span>Didn't receive a code?</span>
                        <button
                          type="button"
                          className="btn btn-sm btn-link p-0 text-decoration-underline mb-0"
                          onClick={handleResend}
                          disabled={loading}
                        >
                          Resend
                        </button>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary w-100 mb-0"
                        disabled={code.some(d => d === '') || loading}
                      >
                        {loading ? 'Verifying...' : 'Verify and Process'}
                      </button>
                    </form>

                    <div className="text-primary-hover mt-3 text-center">
                      Copyrights ©2025 Booking.
                    </div>
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

export default TwoFactorAuth;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../api/services/apiService';


const SignUp = () => {
  const navigate = useNavigate();

  // ====== States ======
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [genre, setGenre] = useState('');
  const [pays, setPays] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ====== Submit ======
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation frontend
    if (!name || !email || !password || !confirmPassword || !age || !genre || !pays) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (age < 18) {
      setError('Vous devez avoir au moins 18 ans');
      return;
    }

   try {
  setLoading(true);
  setError(null);

  const response = await authService.register({
    name,
    email,
    password,
    age: Number(age),
    genre,
    pays,
  });

  console.log('Registration response:', response.data);
  // 🔹 récupérer l'email pour 2FA
  const registeredEmail = response.data.email;

  // 🔹 naviguer vers /verify avec email en state
  navigate('/verify', { state: { email: registeredEmail } });



} catch (err) {
  console.error(err);
  setError(
    err.response?.data?.message ||
    "Erreur lors de la création du compte"
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

                {/* Image */}
                <div className="col-lg-6 d-md-flex align-items-center order-2 order-lg-1">
                  <div className="p-3 p-lg-5">
                    <img
                      src="/assets/images/element/image_sign_in.svg"
                      alt="signup"
                      className="img-fluid"
                    />
                  </div>
                  <div className="vr opacity-1 d-none d-lg-block"></div>
                </div>

                {/* Form */}
                <div className="col-lg-6 order-1">
                  <div className="p-4 p-sm-6">

                    <Link to="/">
                      <img
                        className="h-50px mb-4"
                        src="/assets/images/logo-icon.svg"
                        width={50}
                        alt="logo"
                      />
                    </Link>

                    <h1 className="mb-2 h3">Create new account</h1>
                    <p className="mb-0">
                      Already a member? <Link to="/sign-in">Log in</Link>
                    </p>

                    {error && (
                      <div className="alert alert-danger mt-3">{error}</div>
                    )}

                    <form className="mt-4 text-start" onSubmit={handleSubmit}>

                      {/* Name */}
                      <div className="mb-3">
                        <label className="form-label">Nom complet</label>
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      {/* Email */}
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      {/* Age */}
                      <div className="mb-3">
                        <label className="form-label">Âge</label>
                        <input
                          type="number"
                          className="form-control"
                          min="18"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>

                      {/* Genre */}
                      <div className="mb-3">
                        <label className="form-label">Genre</label>
                        <select
                          className="form-select"
                          value={genre}
                          onChange={(e) => setGenre(e.target.value)}
                        >
                          <option value="">-- Sélectionner --</option>
                          <option value="HOMME">Homme</option>
                          <option value="FEMME">Femme</option>
                        </select>
                      </div>

                      {/* Pays */}
                      <div className="mb-3">
                        <label className="form-label">Pays</label>
                        <input
                          type="text"
                          className="form-control"
                          value={pays}
                          onChange={(e) => setPays(e.target.value)}
                        />
                      </div>

                      {/* Password */}
                      <div className="mb-3">
                        <label className="form-label">Mot de passe</label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      {/* Confirm Password */}
                      <div className="mb-3">
                        <label className="form-label">Confirmer le mot de passe</label>
                        <input
                          type="password"
                          className="form-control"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={loading}
                      >
                        {loading ? 'Création...' : 'Sign up'}
                      </button>

                    </form>

                    <div className="text-center mt-4 small">
                      Copyright ©2025
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

export default SignUp;

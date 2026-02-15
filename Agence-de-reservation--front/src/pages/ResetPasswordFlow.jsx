import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../api/services/apiService";

const ResetPasswordFlow = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [step, setStep] = useState(1); // 1: email, 2: nouveau mot de passe, 3: code
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setError(""); setMessage(""); setLoading(true);

    try {
      await authService.forgotPassword(email);
      setMessage("Code envoyé à votre email !");
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de l'envoi du code");
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    setError(""); setMessage("");

    if (newPassword !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    setStep(3);
  };

  const handleCodeSubmit = async (e) => {
    e.preventDefault();
    setError(""); setMessage(""); setLoading(true);

    try {
      await authService.resetPasswordWithToken(code, newPassword);
      setMessage("Mot de passe réinitialisé avec succès !");
      setTimeout(() => navigate("/sign-in"), 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Code invalide ou expiré");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f5f7fa" }}
    >
      <div
        className="p-5 shadow rounded"
        style={{ minWidth: "350px", maxWidth: "400px", width: "100%", backgroundColor: "white" }}
      >
        <h2 className="text-center mb-4">Réinitialisation du mot de passe</h2>

        {error && <div className="alert alert-danger">{error}</div>}
        {message && <div className="alert alert-success">{message}</div>}

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Envoi en cours..." : "Envoyer le code"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handlePasswordSubmit}>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Nouveau mot de passe"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirmer mot de passe"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Chargement..." : "Suivant"}
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleCodeSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Code reçu par email"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-primary w-100" disabled={loading}>
              {loading ? "Vérification..." : "Valider le mot de passe"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPasswordFlow;

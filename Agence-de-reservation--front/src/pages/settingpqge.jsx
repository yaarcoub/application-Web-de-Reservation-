import React, { useState, useEffect } from 'react';
import { authService , ServiceImages } from '../api/services/apiService';

const AgentSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(false);

  const [profileData, setProfileData] = useState({
    id: '',
    name: '',
    genre: '',
    pays: '',
    age: '',
    role: ''
  });

  // 🔹 NOUVEAUX STATES (IMAGE)
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // 🔹 Charger user depuis localStorage
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setProfileData({
        id: user.id,
        name: user.nom || '',
        genre: user.genre || '',
        pays: user.pays || '',
        age: user.age || '',
        role: user.role || ''
      });

      // image existante
      if (user.userImage) {
        setPreviewImage(user.userImage);
      }
    }
  }, []);

  // 🔹 Gestion des inputs texte
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 🔹 Gestion sélection image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setSelectedImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  // 🔹 Upload image
  const handleUploadImage = async () => {
    if (!selectedImage) {
      alert('Veuillez sélectionner une image');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await ServiceImages.uploadImageuser(formData);
      const imageUrl = response.data;

      // 🔥 Mise à jour localStorage SANS toucher aux autres infos
      const user = JSON.parse(localStorage.getItem('user'));

      const updatedUser = {
        ...user,
        urlImage: imageUrl
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));

      alert('Image mise à jour avec succès ✅');
    } catch (error) {
      console.error(error);
      alert("Erreur lors de l'upload ❌");
    }
  };

  // 🔹 Save changes (PATCH)
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        id: profileData.id,
        name: profileData.name,
        genre: profileData.genre,
        pays: profileData.pays,
        age: Number(profileData.age)
      };

      const response = await authService.update(payload);

      // 🔹 Update localStorage (sans toucher à l'image)
      const user = JSON.parse(localStorage.getItem('user'));

      const updatedUser = {
        ...user,
        nom: payload.name,
        genre: payload.genre,
        pays: payload.pays,
        age: payload.age,
        urlImage: user.urlImage
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));

      alert('Profil mis à jour avec succès ✅');
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la mise à jour ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="pt-0">
        <div className="container vstack gap-4">
          <h1 className="fs-4">
            <i className="bi bi-gear me-1"></i>Settings
          </h1>

          <div className="card border rounded-3">
            <div className="card-header border-bottom">
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <button
                    className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                  >
                    Edit Profile
                  </button>
                </li>
              </ul>
            </div>

            <div className="card-body">
              {activeTab === 'profile' && (
                <form onSubmit={handleSaveChanges}>
                  <div className="row g-3">

                    {/* 🔹 IMAGE USER */}
                    <div className="col-12 text-center">
                      <img
                        src={previewImage || '/default-avatar.png'}
                        alt="profile"
                        className="rounded-circle mb-3"
                        width="120"
                        height="120"
                        style={{ objectFit: 'cover' }}
                      />

                      <input
                        type="file"
                        accept="image/*"
                        className="form-control mb-2"
                        onChange={handleImageChange}
                      />

                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={handleUploadImage}
                      >
                        Upload Image
                      </button>
                    </div>

                    {/* 🔹 NAME */}
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={profileData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* 🔹 GENRE */}
                    <div className="col-md-6">
                      <label className="form-label">Genre</label>
                      <select
                        className="form-control"
                        name="genre"
                        value={profileData.genre}
                        onChange={handleInputChange}
                      >
                        <option value="">Select</option>
                        <option value="HOMME">Homme</option>
                        <option value="FEMME">Femme</option>
                      </select>
                    </div>

                    {/* 🔹 PAYS */}
                    <div className="col-md-6">
                      <label className="form-label">Pays</label>
                      <input
                        type="text"
                        className="form-control"
                        name="pays"
                        value={profileData.pays}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* 🔹 AGE */}
                    <div className="col-md-6">
                      <label className="form-label">Age</label>
                      <input
                        type="number"
                        className="form-control"
                        name="age"
                        value={profileData.age}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* 🔹 SAVE */}
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                      >
                        {loading ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>

                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AgentSettings;

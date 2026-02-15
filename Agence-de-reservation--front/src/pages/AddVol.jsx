import React, { useState } from 'react';
import AgentMenu from '../components/Agent/AgentMenu';
import { Link } from 'react-router-dom';
import { serviceOffre, ServiceImages } from '../api/services/apiService';

const AddVol = () => {
  const [formData, setFormData] = useState({
    titre: '',
    description: '',
    compagnie: '',
    add: '',
    ada: '',
    ddd: '',
    dda: '',
    numeroVol: '',
    typeAvion: '',
    dureeVol: '',
    classe: 'Economy',
    nombrePlacesDisponibles: '',
    prix: '',
    paysDepart: '',
    paysArrivee: ''
  });

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(prev => [...prev, ...files]);

    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImages(prev => [...prev, reader.result]);
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setPreviewImages(previewImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Préparer les données pour le backend
      const offerData = {
        ...formData,
        prix: parseFloat(formData.prix),
        nombrePlacesDisponibles: parseInt(formData.nombrePlacesDisponibles),
        dureeVol: parseFloat(formData.dureeVol)
      };

      // 1️⃣ Créer l'offre de vol
      const response = await serviceOffre.addVolOffer(offerData);
      const createdOffer = response.data;
      const offreId = createdOffer.id;
        console.log("Created Offer ID:", response);
      if (images.length > 0) {
        const formDataImages = new FormData();
        formDataImages.append('offreId', offreId);
        images.forEach(img => formDataImages.append('images', img));
        await ServiceImages.uploadImage(formDataImages);
      }

      alert('Flight listing created and images uploaded successfully!');

      // Reset form
      setFormData({
        titre: '',
        description: '',
        compagnie: '',
        add: '',
        ada: '',
        ddd: '',
        dda: '',
        numeroVol: '',
        typeAvion: '',
        dureeVol: '',
        classe: 'Economy',
        nombrePlacesDisponibles: '',
        prix: '',
        paysDepart: '',
        paysArrivee: ''
      });
      setImages([]);
      setPreviewImages([]);
    } catch (error) {
      console.error(error);
      alert('Error creating flight listing or uploading images.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AgentMenu />

      <main>
        <section className="pt-0">
          <div className="container vstack gap-4">
            <div className="row">
              <div className="col-12">
                <h1 className="fs-4 mb-0">
                  <i className="bi bi-plus-circle fa-fw me-1"></i>Add New Flight
                </h1>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <form onSubmit={handleSubmit}>
                  <div className="card border rounded-3">
                    <div className="card-body">
                      <div className="row g-4">
                        {/* === Flight Information === */}
                        <div className="col-12">
                          <h5 className="mb-3">
                            <i className="bi bi-info-circle me-2"></i>Flight Information
                          </h5>
                        </div>

                        <div className="col-12">
                          <label className="form-label">Flight Title *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="titre"
                            placeholder="e.g., Vol Paris → New York"
                            value={formData.titre}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-12">
                          <label className="form-label">Description *</label>
                          <textarea
                            className="form-control"
                            name="description"
                            placeholder="e.g., Direct flight with meals included."
                            rows="3"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Airline Company *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="compagnie"
                            placeholder="e.g., Air France"
                            value={formData.compagnie}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Flight Number *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="numeroVol"
                            placeholder="e.g., AF123"
                            value={formData.numeroVol}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Aircraft Type *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="typeAvion"
                            placeholder="e.g., Boeing 777"
                            value={formData.typeAvion}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Flight Duration (Hours) *</label>
                          <input
                            type="number"
                            step="0.25"
                            className="form-control"
                            name="dureeVol"
                            placeholder="e.g., 7.5"
                            value={formData.dureeVol}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        {/* === Route === */}
                        <div className="col-12 mt-3">
                          <h5 className="mb-3">
                            <i className="bi bi-geo-alt me-2"></i>Route Information
                          </h5>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Departure Airport *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="add"
                            placeholder="e.g., Charles de Gaulle"
                            value={formData.add}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Arrival Airport *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="ada"
                            placeholder="e.g., JFK"
                            value={formData.ada}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Departure Country *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="paysDepart"
                            placeholder="e.g., France"
                            value={formData.paysDepart}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Arrival Country *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="paysArrivee"
                            placeholder="e.g., USA"
                            value={formData.paysArrivee}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        {/* === Schedule === */}
                        <div className="col-12 mt-3">
                          <h5 className="mb-3">
                            <i className="bi bi-calendar-event me-2"></i>Schedule
                          </h5>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Departure Date & Time *</label>
                          <input
                            type="datetime-local"
                            className="form-control"
                            name="ddd"
                            value={formData.ddd}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Arrival Date & Time *</label>
                          <input
                            type="datetime-local"
                            className="form-control"
                            name="dda"
                            value={formData.dda}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        {/* === Class & Availability === */}
                        <div className="col-md-6 mt-3">
                          <label className="form-label">Cabin Class *</label>
                          <select
                            className="form-select"
                            name="classe"
                            value={formData.classe}
                            onChange={handleInputChange}
                          >
                            <option value="Economy">Economy</option>
                            <option value="Premium Economy">Premium Economy</option>
                            <option value="Business">Business</option>
                            <option value="First">First</option>
                          </select>
                        </div>

                        <div className="col-md-6 mt-3">
                          <label className="form-label">Available Seats *</label>
                          <input
                            type="number"
                            className="form-control"
                            name="nombrePlacesDisponibles"
                            placeholder="e.g., 50"
                            value={formData.nombrePlacesDisponibles}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        {/* === Pricing === */}
                        <div className="col-md-6 mt-3">
                          <label className="form-label">Price per Seat ($) *</label>
                          <input
                            type="number"
                            className="form-control"
                            name="prix"
                            placeholder="e.g., 550"
                            value={formData.prix}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        {/* === Image Upload === */}
                        <div className="col-12 mt-3">
                          <h5 className="mb-3">
                            <i className="bi bi-image me-2"></i>Upload Images
                          </h5>
                        </div>

                        <div className="col-12">
                          <div className="card border-2 border-dashed p-4">
                            <label className="form-label">Select Images *</label>
                            <input
                              type="file"
                              className="form-control"
                              multiple
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                            <small className="text-muted d-block mt-2">
                              Accepted formats: JPG, JPEG, PNG. You can select multiple images.
                            </small>
                          </div>
                        </div>

                        {previewImages.length > 0 && (
                          <div className="col-12">
                            <label className="form-label">Uploaded Images Preview</label>
                            <div className="row g-3">
                              {previewImages.map((image, index) => (
                                <div className="col-md-3 col-sm-6" key={index}>
                                  <div className="card position-relative h-100">
                                    <img
                                      src={image}
                                      className="card-img-top rounded"
                                      alt={`Preview ${index + 1}`}
                                      style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-danger position-absolute top-0 end-0 m-2"
                                      onClick={() => removeImage(index)}
                                    >
                                      <i className="bi bi-trash"></i>
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* === Submit === */}
                        <div className="col-12 mt-3">
                          <div className="d-flex gap-2">
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                              <i className="bi bi-check-lg me-1"></i>
                              {isSubmitting ? 'Processing...' : 'Create Flight'}
                            </button>
                            <Link to="/agent/vols" className="btn btn-secondary">
                              Cancel
                            </Link>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AddVol;

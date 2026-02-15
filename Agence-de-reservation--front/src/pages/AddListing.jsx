import React, { useState } from 'react';
import AgentMenu from '../components/Agent/AgentMenu';
import { Link } from 'react-router-dom';
import { serviceOffre, ServiceImages } from '../api/services/apiService';

const AddListing = () => {
  const [formData, setFormData] = useState({
    titre: '',
    nomHotel: '',
    description: '',
    dds: '',
    nombreEtoiles: 3,
    ville: '',
    pays: '',
    adresse: '',
    telephone: '',
    email: '',
    disponible: true,
    petitDejeunerInclus: false,
    wifiInclus: false,
    parkingDisponible: false,
    piscine: false,
    serviceChambre: false,
    nombreChambres: '',
    typeChambre: '',
    capaciteChambre: '',
    prix: ''
  });

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
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
        nombreEtoiles: parseInt(formData.nombreEtoiles),
        nombreChambres: parseInt(formData.nombreChambres),
        capaciteChambre: parseInt(formData.capaciteChambre),
        dds: formData.dds // ISO string ou format attendu par backend
      };

      // 1️⃣ Créer l'offre
      const response = await serviceOffre.addHotelOffer(offerData);
      const createdOffer = response.data;
      const offreId = createdOffer.id;

      // 2️⃣ Uploader les images si présentes
      if (images.length > 0) {
        const formDataImages = new FormData();
        formDataImages.append('offreId', offreId);

        images.forEach(img => formDataImages.append('images', img));

        await ServiceImages.uploadImage(formDataImages);
      }

      alert('Hotel listing created and images uploaded successfully!');

      // Reset form
      setFormData({
        titre: '',
        nomHotel: '',
        description: '',
        dds: '',
        nombreEtoiles: 3,
        ville: '',
        pays: '',
        adresse: '',
        telephone: '',
        email: '',
        disponible: true,
        petitDejeunerInclus: false,
        wifiInclus: false,
        parkingDisponible: false,
        piscine: false,
        serviceChambre: false,
        nombreChambres: '',
        typeChambre: '',
        capaciteChambre: '',
        prix: ''
      });
      setImages([]);
      setPreviewImages([]);
    } catch (error) {
      console.error(error);
      alert('Error creating hotel listing or uploading images.');
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
                  <i className="bi bi-plus-circle fa-fw me-1"></i>Add New Hotel Listing
                </h1>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <form onSubmit={handleSubmit}>
                  <div className="card border rounded-3">
                    <div className="card-body">
                      <div className="row g-4">
                        {/* === Basic Information === */}
                        <div className="col-12">
                          <h5 className="mb-3">
                            <i className="bi bi-info-circle me-2"></i>Basic Information
                          </h5>
                        </div>

                        <div className="col-12">
                          <label className="form-label">Hotel Title *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="titre"
                            placeholder="e.g., HOTEL Marrakech Jamaa Al fena"
                            value={formData.titre}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Hotel Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="nomHotel"
                            placeholder="e.g., Hotel Atlas Premium"
                            value={formData.nomHotel}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Number of Stars *</label>
                          <select
                            className="form-select"
                            name="nombreEtoiles"
                            value={formData.nombreEtoiles}
                            onChange={handleInputChange}
                          >
                            {[1, 2, 3, 4, 5].map(num => (
                              <option key={num} value={num}>{num} Stars</option>
                            ))}
                          </select>
                        </div>

                        <div className="col-12">
                          <label className="form-label">Description *</label>
                          <textarea
                            className="form-control"
                            name="description"
                            placeholder="Describe your hotel..."
                            rows="4"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Opening Date *</label>
                          <input
                            type="datetime-local"
                            className="form-control"
                            name="dds"
                            value={formData.dds}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        {/* === Location === */}
                        <div className="col-12 mt-3">
                          <h5 className="mb-3">
                            <i className="bi bi-geo-alt me-2"></i>Location
                          </h5>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">City *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="ville"
                            placeholder="e.g., Marrakech"
                            value={formData.ville}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Country *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="pays"
                            placeholder="e.g., Maroc"
                            value={formData.pays}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-12">
                          <label className="form-label">Address *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="adresse"
                            placeholder="e.g., Avenue Mohamed V, Gueliz"
                            value={formData.adresse}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        {/* === Contact Information === */}
                        <div className="col-12 mt-3">
                          <h5 className="mb-3">
                            <i className="bi bi-telephone me-2"></i>Contact Information
                          </h5>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Phone *</label>
                          <input
                            type="tel"
                            className="form-control"
                            name="telephone"
                            placeholder="e.g., +212600000000"
                            value={formData.telephone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="e.g., contact@hotel.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        {/* === Amenities === */}
                        <div className="col-12 mt-3">
                          <h5 className="mb-3">
                            <i className="bi bi-star me-2"></i>Amenities
                          </h5>
                        </div>

                        <div className="col-12">
                          <div className="row g-3">
                            {[
                              { name: 'petitDejeunerInclus', label: 'Breakfast Included' },
                              { name: 'wifiInclus', label: 'WiFi Included' },
                              { name: 'parkingDisponible', label: 'Parking Available' },
                              { name: 'piscine', label: 'Swimming Pool' },
                              { name: 'serviceChambre', label: 'Room Service' },
                              { name: 'disponible', label: 'Available' }
                            ].map((amenity, idx) => (
                              <div className="col-md-6 col-lg-4" key={idx}>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={amenity.name}
                                    name={amenity.name}
                                    checked={formData[amenity.name]}
                                    onChange={handleInputChange}
                                  />
                                  <label className="form-check-label" htmlFor={amenity.name}>
                                    {amenity.label}
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* === Room Details === */}
                        <div className="col-12 mt-3">
                          <h5 className="mb-3">
                            <i className="bi bi-door-closed me-2"></i>Room Details
                          </h5>
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Number of Rooms *</label>
                          <input
                            type="number"
                            className="form-control"
                            name="nombreChambres"
                            placeholder="e.g., 120"
                            value={formData.nombreChambres}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Room Type *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="typeChambre"
                            placeholder="e.g., Deluxe"
                            value={formData.typeChambre}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="col-md-4">
                          <label className="form-label">Room Capacity *</label>
                          <select
                            className="form-select"
                            name="capaciteChambre"
                            value={formData.capaciteChambre}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select capacity</option>
                            {[1, 2, 3, 4, 5].map(num => (
                              <option key={num} value={num}>{num} Persons</option>
                            ))}
                          </select>
                        </div>

                        <div className="col-md-6">
                          <label className="form-label">Price per Night ($) *</label>
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

                        {/* === Submit Button === */}
                        <div className="col-12 mt-3">
                          <div className="d-flex gap-2">
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                              <i className="bi bi-check-lg me-1"></i> {isSubmitting ? 'Processing...' : 'Create Listing'}
                            </button>
                            <Link to="/agent/listings" className="btn btn-secondary">
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

export default AddListing;

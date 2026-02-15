import React from 'react'

const PopularDestinations = () => {
  return (
    <section className="pt-0 pt-lg-5">
      <div className="container">

        {/* Title */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-0">Popular Destinations</h2>
          </div>
        </div>

        <div className="row g-4">
          {/* Destination item 1 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card card-img-scale overflow-hidden bg-transparent">
              <div className="position-absolute top-0 end-0 p-3 z-index-9">
                <a tabIndex="0" className="mb-0 btn btn-white btn-round" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="left" data-bs-content="COVID-19 test required Vaccinated travelers can visit">
                  <i className="bi bi-info-circle"></i>
                </a>
              </div>

              <div className="card-img-scale-wrapper rounded-3">
                <img src="assets/images/category/flight/01.jpg" className="card-img" alt="Thailand" />
              </div>

              <div className="card-body px-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title"><a href="#" className="stretched-link">Thailand</a></h5>
                  <h6 className="mb-0">4.3<i className="fas fa-star text-warning ms-1"></i></h6>
                </div>
                <span className="mb-0">The next flight is on 26th Dec</span>
              </div>
            </div>
          </div>

          {/* Destination item 2 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card card-img-scale overflow-hidden bg-transparent">
              <div className="card-img-scale-wrapper rounded-3">
                <img src="assets/images/category/flight/03.jpg" className="card-img" alt="Hong Kong" />
              </div>

              <div className="card-body px-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title"><a href="#" className="stretched-link">Hong Kong</a></h5>
                  <h6 className="mb-0">4.6<i className="fas fa-star text-warning ms-1"></i></h6>
                </div>
                <p className="mb-0">Daily 1 flight</p>
              </div>
            </div>
          </div>

          {/* Destination item 3 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card card-img-scale overflow-hidden bg-transparent">
              <div className="position-absolute top-0 end-0 p-3 z-index-9">
                <a tabIndex="0" className="mb-0 btn btn-white btn-round z-index-2" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="left" data-bs-content="Vaccinated travelers can visit. Masks required">
                  <i className="bi bi-info-circle"></i>
                </a>
              </div>

              <div className="card-img-scale-wrapper rounded-3">
                <img src="assets/images/category/flight/02.jpg" className="card-img" alt="Maldives" />
              </div>

              <div className="card-body px-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title"><a href="#" className="stretched-link">Maldives</a></h5>
                  <h6 className="mb-0">4.3<i className="fas fa-star text-warning ms-1"></i></h6>
                </div>
                <p className="mb-0">2 flights every week</p>
              </div>
            </div>
          </div>

          {/* Destination item 4 */}
          <div className="col-sm-6 col-lg-3">
            <div className="card card-img-scale overflow-hidden bg-transparent">
              <div className="card-img-scale-wrapper rounded-3">
                <img src="assets/images/category/flight/04.jpg" className="card-img" alt="Switzerland" />
              </div>

              <div className="card-body px-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="card-title"><a href="#" className="stretched-link">Switzerland</a></h5>
                  <h6 className="mb-0">4.3<i className="fas fa-star text-warning ms-1"></i></h6>
                </div>
                <p className="mb-0">Filling fast, next available flight on 2nd Oct</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularDestinations

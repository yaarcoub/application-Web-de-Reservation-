import React from 'react'

const TourHero = () => {
  return (
    <section className="pt-0">
      <div className="container position-relative">
        <div
          className="rounded-3 p-4 p-sm-5"
          style={{
            backgroundImage: 'url(assets/images/bg/02.jpg)',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="row justify-content-between pt-0 pb-5">
            <div className="col-md-7 col-lg-8 col-xxl-7 pb-5 mb-0 mb-lg-5">
              <h1 className="text-white">Life Is Adventure Make The Best Of It</h1>
              <p className="text-white mb-0">Planning for a trip? we will organize your best trip with the best destination and within the best budgets!</p>
            </div>

            <div className="col-md-5 col-lg-4 col-xl-3 mb-3 mb-sm-0">
              <div className="card shadow p-2 pb-0">
                <div className="position-absolute top-0 start-0 mt-n3 ms-n3 z-index-9">
                  <img src="assets/images/element/05.svg" className="position-relative h-70px" alt="" />
                  <span className="h5 text-white position-absolute top-50 start-50 translate-middle">40%</span>
                </div>

                <div className="rounded-3 overflow-hidden position-relative">
                  <img src="assets/images/category/tour/05.jpg" className="card-img" alt="" />
                  <div className="bg-overlay bg-dark opacity-4"></div>
                  <div className="card-img-overlay d-flex">
                    <h6 className="text-white fw-normal mt-auto mb-0">5 Days / 4 Nights</h6>
                  </div>
                </div>

                <div className="card-body px-2">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <a href="#" className="badge bg-primary bg-opacity-10 text-primary">Adventure</a>
                    <h6 className="fw-light m-0"><i className="fa-solid fa-star text-warning me-2"></i>4.5</h6>
                  </div>

                  <h6 className="card-title"><a href="#">Maldives Sightseeing &amp; Adventure Tour</a></h6>

                  <div className="d-flex justify-content-between align-items-center mb-0">
                    <h6 className="text-success mb-0">$385 <span className="fw-light">/person</span></h6>
                    <span className="text-decoration-line-through mb-0 text-reset">$682</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-n7">
          <div className="col-11 mx-auto">
            <form className="bg-mode shadow rounded-3 p-4">
              <div className="row g-4 align-items-center">
                <div className="col-xl-10">
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                      <label className="h6 fw-normal mb-0"><i className="bi bi-geo-alt text-primary me-1"></i>Location</label>
                      <div className="form-border-bottom form-control-transparent form-fs-lg mt-2">
                        <div className="choices" data-type="select-one" tabIndex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                          <div className="choices__inner">
                            <select className="form-select js-choice choices__input" data-search-enabled="true" hidden tabIndex={-1} data-choice="active">
                              <option value="" data-custom-properties>[object Object]</option>
                            </select>
                            <div className="choices__list choices__list--single">
                              <div className="choices__item choices__placeholder choices__item--selectable" data-item data-id="1" data-value data-custom-properties aria-selected="true">Select location</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <label className="h6 fw-normal mb-0"><i className="bi bi-calendar text-primary me-1"></i>Date</label>
                      <div className="form-border-bottom form-control-transparent form-fs-lg mt-2">
                        <input type="text" className="form-control flatpickr py-2 flatpickr-input" data-date-format="d M Y" placeholder="Choose a date" readOnly />
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                      <label className="h6 fw-normal mb-0"><i className="fa-solid fa-person-skating text-primary me-1"></i>Tour type</label>
                      <div className="form-border-bottom form-control-transparent form-fs-lg mt-2">
                        <div className="choices" data-type="select-one" tabIndex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                          <div className="choices__inner">
                            <select className="form-select js-choice choices__input" data-search-enabled="true" hidden tabIndex={-1} data-choice="active">
                              <option value="" data-custom-properties>[object Object]</option>
                            </select>
                            <div className="choices__list choices__list--single">
                              <div className="choices__item choices__placeholder choices__item--selectable" data-item data-id="1" data-value data-custom-properties aria-selected="true">Select type</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-2">
                  <div className="d-grid">
                    <a href="#" className="btn btn-lg btn-dark mb-0">Take a Tour</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row g-2 mt-6">
          <div className="col-lg-2">
            <h4 className="mb-0">Recent Searches</h4>
          </div>

          <div className="col-lg-10">
            <div className="hstack flex-wrap gap-3">
              <div className="alert bg-light fade show small px-3 py-1 mb-0" role="alert">
                <span className="me-1">Taman Sari</span>
                <button type="button" className="btn-close small p-2" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>

              <div className="alert bg-light fade show small px-3 py-1 mb-0" role="alert">
                <span className="me-1">The Grand Palace</span>
                <button type="button" className="btn-close small p-2" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>

              <div className="alert bg-light fade show small px-3 py-1 mb-0" role="alert">
                <span className="me-1">Glacier National Park</span>
                <button type="button" className="btn-close small p-2" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>

              <div className="alert bg-light fade show small px-3 py-1 mb-0" role="alert">
                <span className="me-1">Machu Picchu</span>
                <button type="button" className="btn-close small p-2" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>

              <div className="alert bg-light fade show small px-3 py-1 mb-0" role="alert">
                <span className="me-1">Prambanan Temple</span>
                <button type="button" className="btn-close small p-2" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>

              <div className="alert bg-light fade show small px-3 py-1 mb-0" role="alert">
                <span className="me-1">Batu Gong</span>
                <button type="button" className="btn-close small p-2" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>

              <div className="alert bg-light fade show small px-3 py-1 mb-0" role="alert">
                <span className="me-1">Barobadur Temple</span>
                <button type="button" className="btn-close small p-2" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>

              <div className="alert bg-light fade show small px-3 py-1 mb-0" role="alert">
                <span className="me-1">Great Barrier Reef</span>
                <button type="button" className="btn-close small p-2" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>

              <div className="alert bg-light fade show small px-3 py-1 mb-0" role="alert">
                <span className="me-1">Argentine Patagonia</span>
                <button type="button" className="btn-close small p-2" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>

              <button type="button" className="btn btn-sm btn-primary-soft mb-0"> Clear all</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourHero

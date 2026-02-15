import React from 'react'

const DiscoverPlaces = () => {
  return (
    <section className="pt-0 pt-md-5">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center">
          <div className="col-lg-4">
            <h2 className="mb-0">Discover the best places to visit🔥</h2>

            <div className="d-sm-flex justify-content-sm-between align-items-center mt-4">
              <ul className="avatar-group mb-sm-0">
                <li className="avatar">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" />
                </li>
                <li className="avatar">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" />
                </li>
                <li className="avatar">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" />
                </li>
                <li className="avatar">
                  <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                </li>
                <li className="avatar">
                  <div className="avatar-img rounded-circle bg-dark">
                    <span className="text-white position-absolute top-50 start-50 translate-middle small">16+</span>
                  </div>
                </li>
              </ul>

              <h5 className="m-0"><i className="fa-solid fa-star text-warning me-2"></i>4.5</h5>
            </div>

            <a href="#" className="btn btn-lg btn-primary-soft mb-0 mt-4">Explore places <i className="bi fa-fw bi-arrow-right ms-2"></i></a>
          </div>

          <div className="col-lg-8">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-element-hover card-overlay-hover overflow-hidden">
                  <img src="assets/images/category/tour/06.jpg" className="rounded-3" alt="" />
                  <a className="hover-element position-absolute w-100 h-100" data-glightbox data-gallery="gallery" href="assets/images/gallery/01.jpg">
                    <i className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                  </a>
                </div>

                <div className="tiny-slider arrow-round arrow-blur arrow-hover arrow-xs my-4 mb-md-0">
                  <div className="tns-outer">
                    <div className="tns-inner">
                      <div className="card bg-transparent">
                        <div className="row align-items-center">
                          <div className="col-4">
                            <img src="assets/images/team/01.jpg" className="card-img" alt="" />
                          </div>
                          <div className="col-8">
                            <div className="card-body p-0">
                              <p className="mb-0">Farther-related bed and passage comfort civilly.</p>
                              <h6 className="card-title mb-0 mt-2">Louis Ferguson</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card bg-transparent">
                        <div className="row align-items-center">
                          <div className="col-4">
                            <img src="assets/images/team/02.jpg" className="card-img" alt="" />
                          </div>
                          <div className="col-8">
                            <div className="card-body p-0">
                              <p className="mb-0">Farther-related bed and passage comfort civilly.</p>
                              <h6 className="card-title mb-0 mt-2">Lori Stevens</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card card-element-hover card-overlay-hover overflow-hidden mb-4">
                  <img src="assets/images/gallery/02.jpg" className="rounded-3" alt="" />
                  <a className="hover-element position-absolute w-100 h-100" data-glightbox data-gallery="gallery" href="https://www.youtube.com/embed/tXHviS-4ygo">
                    <span className="btn text-danger btn-round btn-white position-absolute top-50 start-50 translate-middle mb-0">
                      <i className="fas fa-play"></i>
                    </span>
                  </a>
                </div>

                <div className="card card-element-hover card-overlay-hover overflow-hidden">
                  <img src="assets/images/gallery/03.jpg" className="rounded-3" alt="" />
                  <a className="hover-element position-absolute w-100 h-100" data-glightbox data-gallery="gallery" href="assets/images/gallery/03.jpg">
                    <i className="bi bi-fullscreen fs-6 text-white position-absolute top-50 start-50 translate-middle bg-dark rounded-1 p-2 lh-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DiscoverPlaces

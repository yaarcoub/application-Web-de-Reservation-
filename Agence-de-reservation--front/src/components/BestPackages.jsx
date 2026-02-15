import React from 'react'

const BestPackages = () => {
  return (
    <section className="pt-0 pt-md-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-0">Our Best Packages</h2>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-sm-6 col-xl-3">
            <div className="card card-img-scale overflow-hidden bg-transparent">
              <div className="card-img-scale-wrapper rounded-3">
                <img src="assets/images/category/tour/04.jpg" className="card-img" alt="" />
                <div className="card-img-overlay d-flex flex-column z-index-1 p-4">
                  <div className="d-flex justify-content-between">
                    <span className="badge text-bg-dark">Adventure</span>
                    <span className="badge text-bg-white"><i className="fa-solid fa-star text-warning me-2"></i>4.3</span>
                  </div>
                  <div className="w-100 mt-auto">
                    <span className="badge text-bg-white fs-6">6 days / 5 nights</span>
                  </div>
                </div>
              </div>

              <div className="card-body px-2">
                <h5 className="card-title"><a href="#" className="stretched-link">Lombok, Indonesia</a></h5>
                <div className="hstack gap-2">
                  <span className="h5 mb-0 text-success">$1385</span>
                  <small>Starting price</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3">
            <div className="card card-img-scale overflow-hidden bg-transparent">
              <div className="card-img-scale-wrapper rounded-3">
                <img src="assets/images/category/tour/02.jpg" className="card-img" alt="" />
                <div className="card-img-overlay d-flex flex-column z-index-1 p-4">
                  <div className="d-flex justify-content-between">
                    <span className="badge text-bg-dark">History</span>
                    <span className="badge text-bg-white"><i className="fa-solid fa-star text-warning me-2"></i>4.5</span>
                  </div>
                  <div className="w-100 mt-auto">
                    <span className="badge text-bg-white fs-6">8 days / 7 nights</span>
                  </div>
                </div>
              </div>

              <div className="card-body px-2">
                <h5 className="card-title"><a href="#" className="stretched-link">Northern Lights Escape</a></h5>
                <div className="hstack gap-2">
                  <span className="h5 mb-0 text-success">$2569</span>
                  <small>Starting price</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3">
            <div className="card card-img-scale overflow-hidden bg-transparent">
              <div className="card-img-scale-wrapper rounded-3">
                <img src="assets/images/category/tour/03.jpg" className="card-img" alt="" />
                <div className="card-img-overlay d-flex flex-column z-index-1 p-4">
                  <div className="d-flex justify-content-between">
                    <span className="badge text-bg-dark">Desert</span>
                    <span className="badge text-bg-white"><i className="fa-solid fa-star text-warning me-2"></i>4.2</span>
                  </div>
                  <div className="w-100 mt-auto">
                    <span className="badge text-bg-white fs-6">9 days / 8 nights</span>
                  </div>
                </div>
              </div>

              <div className="card-body px-2">
                <h5 className="card-title"><a href="#" className="stretched-link">Essential Egypt</a></h5>
                <div className="hstack gap-2">
                  <span className="h5 mb-0 text-success">$1885</span>
                  <small>Starting price</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xl-3">
            <div className="card card-img-scale overflow-hidden bg-transparent">
              <div className="card-img-scale-wrapper rounded-3">
                <img src="assets/images/category/tour/01.jpg" className="card-img" alt="" />
                <div className="card-img-overlay d-flex flex-column z-index-1 p-4">
                  <div className="d-flex justify-content-between">
                    <span className="badge text-bg-dark">Beach</span>
                    <span className="badge text-bg-white"><i className="fa-solid fa-star text-warning me-2"></i>4.6</span>
                  </div>
                  <div className="w-100 mt-auto">
                    <span className="badge text-bg-white fs-6">9 days / 8 nights</span>
                  </div>
                </div>
              </div>

              <div className="card-body px-2">
                <h5 className="card-title"><a href="#" className="stretched-link">Phi Phi Islands</a></h5>
                <div className="hstack gap-2">
                  <span className="h5 text-success mb-0">$3585</span>
                  <small>Starting price</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestPackages

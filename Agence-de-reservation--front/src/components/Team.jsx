import React from 'react'

const Team = () => {
  return (
    <section className="pt-0">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="mb-0">Our Team</h2>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-element-hover bg-transparent">
              <div className="position-relative">
                <img src="assets/images/team/03.jpg" className="card-img" alt="" />

                <div className="card-img-overlay hover-element d-flex p-3">
                  <div className="btn-group mt-auto">
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-facebook-f text-facebook"></i></a>
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-instagram text-instagram"></i></a>
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-twitter text-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div className="card-body px-2 pb-0">
                <h5 className="card-title"><a href="#">Larry Lawson</a></h5>
                <span>Editor in Chief</span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-element-hover bg-transparent">
              <div className="position-relative">
                <img src="assets/images/team/04.jpg" className="card-img" alt="" />

                <div className="card-img-overlay hover-element d-flex p-3">
                  <div className="btn-group mt-auto">
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-facebook-f text-facebook"></i></a>
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-instagram text-instagram"></i></a>
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-twitter text-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div className="card-body px-2 pb-0">
                <h5 className="card-title"><a href="#">Louis Ferguson</a></h5>
                <span>Director Graphics</span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-element-hover bg-transparent">
              <div className="position-relative">
                <img src="assets/images/team/05.jpg" className="card-img" alt="" />

                <div className="card-img-overlay hover-element d-flex p-3">
                  <div className="btn-group mt-auto">
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-facebook-f text-facebook"></i></a>
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-instagram text-instagram"></i></a>
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-twitter text-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div className="card-body px-2 pb-0">
                <h5 className="card-title"><a href="#">Louis Crawford</a></h5>
                <span>Editor, Coverage</span>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="card card-element-hover bg-transparent">
              <div className="position-relative">
                <img src="assets/images/team/06.jpg" className="card-img" alt="" />

                <div className="card-img-overlay hover-element d-flex p-3">
                  <div className="btn-group mt-auto">
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-facebook-f text-facebook"></i></a>
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-instagram text-instagram"></i></a>
                    <a href="#" className="btn btn-white mb-0"><i className="fa-brands fa-twitter text-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div className="card-body px-2 pb-0">
                <h5 className="card-title"><a href="#">Frances Guerrero</a></h5>
                <span>CEO, Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

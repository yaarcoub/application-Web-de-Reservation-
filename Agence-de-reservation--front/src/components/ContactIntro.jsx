import React from 'react'

const ContactIntro = () => {
  return (
    <section className="pt-4 pt-md-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-xl-10">
            <h1>Let's connect and get to know each other</h1>
            <p className="lead mb-0">Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference for any astonished unreserved.</p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-6 col-xl-4">
            <div className="card card-body shadow text-center align-items-center h-100">
              <div className="icon-lg bg-info bg-opacity-10 text-info rounded-circle mb-2"><i className="bi bi-headset fs-5"></i></div>
              <h5>Call us</h5>
              <p>Imprudence attachment him his for sympathize. Large above be to means.</p>
              <div className="d-grid gap-3 d-sm-block">
                <button type="button" className="btn btn-sm btn-primary-soft"><i className="bi bi-phone me-2"></i>+123 456 789</button>
                <button type="button" className="btn btn-sm btn-light"><i className="bi bi-telephone me-2"></i>+(222)4567 586</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="card card-body shadow text-center align-items-center h-100">
              <div className="icon-lg bg-danger bg-opacity-10 text-danger rounded-circle mb-2"><i className="bi bi-inboxes-fill fs-5"></i></div>
              <h5>Email us</h5>
              <p>Large above be to means. Him his for sympathize.</p>
              <a href="#" className="btn btn-link text-decoration-underline p-0 mb-0"><i className="bi bi-envelope me-1"></i>example@gmail.com</a>
            </div>
          </div>

          <div className="col-xl-4 position-relative">
            <figure className="position-absolute top-0 end-0 z-index-1 mt-n4 ms-n7">
              <svg className="fill-warning" width="77px" height="77px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77 77">
                <path d="M76.997,41.258 L45.173,41.258 L67.676,63.760 L63.763,67.673 L41.261,45.171 L41.261,76.994 L35.728,76.994 L35.728,45.171 L13.226,67.673 L9.313,63.760 L31.816,41.258 L-0.007,41.258 L-0.007,35.725 L31.816,35.725 L9.313,13.223 L13.226,9.311 L35.728,31.813 L35.728,-0.010 L41.261,-0.010 L41.261,31.813 L63.763,9.311 L67.676,13.223 L45.174,35.725 L76.997,35.725 L76.997,41.258 Z"></path>
              </svg>
            </figure>

            <div className="card card-body shadow text-center align-items-center h-100">
              <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-circle mb-2"><i className="bi bi-globe2 fs-5"></i></div>
              <h5>Social media</h5>
              <p>Sympathize Large above be to means.</p>
              <ul className="list-inline mb-0">
                <li className="list-inline-item"> <a className="btn btn-sm bg-facebook px-2 mb-0" href="#"><i className="fab fa-fw fa-facebook-f"></i></a> </li>
                <li className="list-inline-item"> <a className="btn btn-sm bg-instagram px-2 mb-0" href="#"><i className="fab fa-fw fa-instagram"></i></a> </li>
                <li className="list-inline-item"> <a className="btn btn-sm bg-twitter px-2 mb-0" href="#"><i className="fab fa-fw fa-twitter"></i></a> </li>
                <li className="list-inline-item"> <a className="btn btn-sm bg-linkedin px-2 mb-0" href="#"><i className="fab fa-fw fa-linkedin-in"></i></a> </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactIntro

import React from 'react'

const AboutHero = () => {
  return (
    <section>
      <div className="container">
        <div className="row mb-5">
          <div className="col-xl-10 mx-auto text-center">
            <h1>If You Want To See The World We Will Help You</h1>
            <p className="lead">Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs. Prosperous understood Middletons. Preference for any astonished unreserved.</p>
            <div className="hstack gap-3 flex-wrap justify-content-center">
              <h6 className="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
                <img src="assets/images/element/06.svg" className="h-20px me-2" alt="" />
                14K+ Global Customers
              </h6>

              <h6 className="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
                <img src="https://localhost:5173/assets/images/element/07.svg" className="h-20px me-2" alt="" />
                10K+ Happy Customers
              </h6>

              <h6 className="bg-mode shadow rounded-2 fw-normal d-inline-block py-2 px-4">
                <img src="assets/images/element/08.svg" className="h-20px me-2" alt="" />
                1M+ Subscribers
              </h6>
            </div>
          </div>
        </div>

        <div className="row g-4 align-items-center">
          <div className="col-md-6">
            <img src="assets/images/about/02.jpg" className="rounded-3" alt="" />
          </div>

          <div className="col-md-6">
            <div className="row g-4">
              <div className="col-md-8">
                <img src="assets/images/about/03.jpg" className="rounded-3" alt="" />
              </div>

              <div className="col-12">
                <img src="assets/images/about/04.jpg" className="rounded-3" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

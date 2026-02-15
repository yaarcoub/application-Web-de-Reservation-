import React from 'react'

const Vehicles = () => {
  return (
    <section className="pt-0 pt-md-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-0">Our Awesome Vehicles</h2>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-sm-4 col-xl-2">
            <div className="card shadow text-center align-items-center h-100 p-4">
              <div className="icon-xxl bg-light rounded-circle">
                <img src="assets/images/category/cab/seadan.svg" className="w-90px" alt="" />
              </div>
              <div className="card-body px-0 pb-0">
                <h5 className="card-title"><a href="#" className="stretched-link">Sedan</a></h5>
                <span>(6 Cars)</span>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-xl-2">
            <div className="card shadow text-center align-items-center h-100 p-4">
              <div className="icon-xxl bg-light rounded-circle">
                <img src="assets/images/category/cab/micro.svg" className="w-90px" alt="" />
              </div>
              <div className="card-body px-0 pb-0">
                <h5 className="card-title"><a href="#" className="stretched-link">Micro</a></h5>
                <span>(8 Cars)</span>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-xl-2">
            <div className="card shadow text-center align-items-center h-100 p-4">
              <div className="icon-xxl bg-light rounded-circle">
                <img src="assets/images/category/cab/suv-2.svg" className="w-90px" alt="" />
              </div>
              <div className="card-body px-0 pb-0">
                <h5 className="card-title"><a href="#" className="stretched-link">CUV</a></h5>
                <span>(4 Cars)</span>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-xl-2">
            <div className="card shadow text-center align-items-center h-100 p-4">
              <div className="icon-xxl bg-light rounded-circle">
                <img src="assets/images/category/cab/suv.svg" className="w-90px" alt="" />
              </div>
              <div className="card-body px-0 pb-0">
                <h5 className="card-title"><a href="#" className="stretched-link">SUV</a></h5>
                <span>(5 Cars)</span>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-xl-2">
            <div className="card shadow text-center align-items-center h-100 p-4">
              <div className="icon-xxl bg-light rounded-circle">
                <img src="assets/images/category/cab/pickup.svg" className="w-90px" alt="" />
              </div>
              <div className="card-body px-0 pb-0">
                <h5 className="card-title"><a href="#" className="stretched-link">Pick up</a></h5>
                <span>(3 Pickup Truck)</span>
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-xl-2">
            <div className="card shadow text-center align-items-center h-100 p-4">
              <div className="icon-xxl bg-light rounded-circle">
                <img src="assets/images/category/cab/coupe.svg" className="w-90px" alt="" />
              </div>
              <div className="card-body px-0 pb-0">
                <h5 className="card-title"><a href="#" className="stretched-link">Coupe</a></h5>
                <span>(9 Cars)</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Vehicles

import React from 'react'

const CabSearch = () => {
  return (
    <section className="pt-0 pt-lg-5">
      <div className="container">
        <div className="row">

          <div className="col-lg-10 ms-auto position-relative">
            <img src="assets/images/bg/03.jpg" className="rounded-3" alt="" />

            <div className="col-11 col-sm-10 col-lg-8 col-xl-6 position-lg-middle ms-lg-8 ms-xl-7">
              <div className="card shadow pb-0 mt-n7 mt-sm-n8 mt-lg-0">

                <div className="card-header border-bottom p-3 p-sm-4">
                  <h5 className="card-title mb-0">Book Your Online Cab</h5>
                </div>

                <form className="card-body form-control-border p-3 p-sm-4">
                  <div className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <div className="form-check form-check-inline active" id="cab2-one-way-tab" data-bs-toggle="pill" data-bs-target="#cab2-one-way" role="tab" aria-controls="cab2-one-way" aria-selected="true">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="cabRadio1" value="option1" defaultChecked />
                      <label className="form-check-label" htmlFor="cabRadio1">One Way</label>
                    </div>
                    <div className="form-check form-check-inline" id="cab2-round-way-tab" data-bs-toggle="pill" data-bs-target="#cab2-round-way" role="tab" aria-controls="cab2-round-way" aria-selected="false" tabIndex={-1}>
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="cabRadio2" value="option2" />
                      <label className="form-check-label" htmlFor="cabRadio2">Round Trip</label>
                    </div>
                  </div>

                  <div className="tab-content my-4" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="cab2-one-way" role="tabpanel" aria-labelledby="cab2-one-way-tab">
                      <div className="row g-2 g-md-4">
                        <div className="col-md-6 position-relative">
                          <div className="form-fs-lg form-control-transparent">
                            <label className="form-label small">Pickup</label>
                            <div className="choices" data-type="select-one" tabIndex={0} role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                              <div className="choices__inner">
                                <select className="form-select js-choice choices__input" data-search-enabled="true" hidden tabIndex={-1} data-choice="active">
                                  <option value="">Select location</option>
                                </select>
                                <div className="choices__list choices__list--single">
                                  <div className="choices__item choices__placeholder choices__item--selectable" data-item data-id="1" data-value aria-selected="true">Select location</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="btn-flip-icon z-index-9 mt-2 mt-md-1">
                            <button className="btn btn-dark shadow btn-round mb-0" type="button"><i className="fa-solid fa-right-left"></i></button>
                          </div>
                        </div>

                        <div className="col-md-6 text-md-end">
                          <div className="form-fs-lg form-control-transparent">
                            <label className="form-label small ms-3 ms-md-0 me-md-3">Drop</label>
                            <div className="choices" data-type="select-one" tabIndex={0} role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                              <div className="choices__inner">
                                <select className="form-select js-choice choices__input" data-search-enabled="true" hidden tabIndex={-1} data-choice="active">
                                  <option value="">Select Location</option>
                                </select>
                                <div className="choices__list choices__list--single">
                                  <div className="choices__item choices__placeholder choices__item--selectable" data-item data-id="1" data-value aria-selected="true">Select Location</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="form-fs-lg form-control-transparent">
                            <label className="form-label small">Pickup Date</label>
                            <input type="text" className="form-control flatpickr flatpickr-input" placeholder="Select date" readOnly />
                          </div>
                        </div>

                        <div className="col-md-6 text-md-end">
                          <div className="form-fs-lg form-control-transparent">
                            <label className="form-label small ms-3 ms-md-0 me-md-3">Pickup time</label>
                            <input type="text" className="form-control flatpickr text-md-end flatpickr-input" data-enabletime="true" data-nocalendar="true" placeholder="Select time" readOnly />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="cab2-round-way" role="tabpanel" aria-labelledby="cab2-round-way-tab">
                      <div className="row g-2 g-md-4">
                        <div className="col-md-6 position-relative">
                          <label className="form-label small">Pickup</label>
                          <div className="form-fs-lg form-control-transparent">
                            <div className="choices" data-type="select-one" tabIndex={0} role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                              <div className="choices__inner">
                                <select className="form-select js-choice choices__input" data-search-enabled="true" hidden tabIndex={-1} data-choice="active">
                                  <option value="">Select Location</option>
                                </select>
                                <div className="choices__list choices__list--single">
                                  <div className="choices__item choices__placeholder choices__item--selectable" data-item data-id="1" data-value aria-selected="true">Select Location</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="btn-flip-icon z-index-9 mt-2 mt-md-1">
                            <button className="btn btn-dark shadow btn-round mb-0" type="button"><i className="fa-solid fa-right-left"></i></button>
                          </div>
                        </div>

                        <div className="col-sm-6 text-sm-end">
                          <label className="form-label small ms-3 ms-md-0 me-md-3">Drop</label>
                          <div className="form-fs-lg form-control-transparent">
                            <div className="choices" data-type="select-one" tabIndex={0} role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                              <div className="choices__inner">
                                <select className="form-select js-choice choices__input" data-search-enabled="true" hidden tabIndex={-1} data-choice="active">
                                  <option value="">Select Location</option>
                                </select>
                                <div className="choices__list choices__list--single">
                                  <div className="choices__item choices__placeholder choices__item--selectable" data-item data-id="1" data-value aria-selected="true">Select Location</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="form-fs-lg form-control-transparent">
                            <label className="form-label small">Pickup Date</label>
                            <input type="text" className="form-control flatpickr flatpickr-input" placeholder="Select date" readOnly />
                          </div>
                        </div>

                        <div className="col-sm-6 text-sm-end">
                          <div className="form-fs-lg form-control-transparent">
                            <label className="form-label small ms-3 ms-md-0 me-md-3">Pickup time</label>
                            <input type="text" className="form-control flatpickr text-sm-end flatpickr-input" data-enabletime="true" data-nocalendar="true" placeholder="Select time" readOnly />
                          </div>
                        </div>

                        <div className="col-sm-6">
                          <div className="form-fs-lg form-control-transparent">
                            <label className="form-label small">Return Date</label>
                            <input type="text" className="form-control flatpickr flatpickr-input" placeholder="Select date" readOnly />
                          </div>
                        </div>

                        <div className="col-sm-6 text-sm-end">
                          <div className="form-fs-lg form-control-transparent">
                            <label className="form-label small ms-3 ms-md-0 me-md-3">Return time</label>
                            <input type="text" className="form-control flatpickr text-sm-end flatpickr-input" data-enabletime="true" data-nocalendar="true" placeholder="Select time" readOnly />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid">
                    <button className="btn btn-dark mb-0" type="button">Search Cabs</button>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CabSearch

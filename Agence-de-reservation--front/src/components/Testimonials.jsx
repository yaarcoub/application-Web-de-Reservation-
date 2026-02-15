import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, USA',
      rating: 5,
      text: 'Amazing experience! The hotel was exactly as described and the booking process was so smooth.',
      avatar: '/assets/images/avatar/01.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Los Angeles, USA',
      rating: 5,
      text: 'Great platform with excellent customer service. Found the perfect hotel for my business trip.',
      avatar: '/assets/images/avatar/02.jpg'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      location: 'London, UK',
      rating: 5,
      text: 'Love how easy it is to compare prices and find the best deals. Highly recommended!',
      avatar: '/assets/images/avatar/03.jpg'
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-3">What Our Customers Say</h2>
            <p className="text-muted">Read reviews from our satisfied customers</p>
          </div>
        </div>
        
        <div className="row g-4">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>
                  <p className="card-text fst-italic">"{testimonial.text}"</p>
                  <div className="d-flex align-items-center justify-content-center mt-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      style={{width: '50px', height: '50px', objectFit: 'cover'}}
                    />
                    <div>
                      <h6 className="mb-0">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.location}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

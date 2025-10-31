import React from "react";
import { motion } from "framer-motion";
import CarData from "../data/carData";

const featuredCars = CarData.slice(0, 24);

// Divide into chunks of 4 cars per slide
const chunkSize = 4;
const slides = [];
for (let i = 0; i < featuredCars.length; i += chunkSize) {
  slides.push(featuredCars.slice(i, i + chunkSize));
}

function FeatureCar() {
  return (
    <div>
      <section className="featured-cars py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Featured Cars</h2>

          <div
            id="featuredCarsCarousel"
            className="carousel slide position-relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
                >
                  <div className="row g-4 justify-content-center">
                    {slide.map((car, carIndex) => (
                      <div key={car.id} className="col-md-3 col-sm-6">
                        <motion.div
                          className="card car-card shadow-sm h-100 border-0"
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: carIndex * 0.1,
                          }}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
                          }}
                        >
                          <img
                            src={car.image}
                            className="card-img-top"
                            alt={`${car.brand} ${car.name}`}
                            style={{
                              height: "200px",
                              objectFit: "cover",
                              borderRadius: "10px 10px 0 0",
                            }}
                          />
                          <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-center mb-2">
                              {car.brand} {car.name}
                            </h5>
                            <p className="card-text text-center text-muted small mb-3">
                              {car.price} — {car.description}
                            </p>
                            {car.features && car.features.length > 0 && (
                              <ul className="list-unstyled text-center small mb-3">
                                {car.features
                                  .slice(0, 3)
                                  .map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                  ))}
                              </ul>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#featuredCarsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-dark rounded-circle p-1"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#featuredCarsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-dark rounded-circle p-2"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeatureCar;

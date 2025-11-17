import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import CarData from "../data/CarData";

function Car() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortOption, setSortOption] = useState("");

  // Get unique brands
  const brands = [...new Set(CarData.map((car) => car.brand))];

  // Filter cars based on search and brand
  let filteredCars = CarData.filter((car) => {
    const searchText = searchTerm.toLowerCase();
    const matchesSearch =
      car.name.toLowerCase().includes(searchText) ||
      car.brand.toLowerCase().includes(searchText);
    const matchesBrand = selectedBrand ? car.brand === selectedBrand : true;
    return matchesSearch && matchesBrand;
  });

  // Sort cars based on selected option
  if (sortOption === "priceLowHigh") {
    filteredCars.sort(
      (a, b) =>
        parseInt(a.price.replace(/[^0-9]/g, "")) -
        parseInt(b.price.replace(/[^0-9]/g, ""))
    );
  } else if (sortOption === "priceHighLow") {
    filteredCars.sort(
      (a, b) =>
        parseInt(b.price.replace(/[^0-9]/g, "")) -
        parseInt(a.price.replace(/[^0-9]/g, ""))
    );
  } else if (sortOption === "nameAZ") {
    filteredCars.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "nameZA") {
    filteredCars.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortOption === "popular") {
    filteredCars.sort((a, b) => {
      if (a.popular && !b.popular) return -1;
      if (!a.popular && b.popular) return 1;
      return 0;
    });
  }

  return (
    <div className="cars-page font-text">
      <section className="all-cars py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">All Cars</h2>
          {/* Search + Filters + Sort */}
          <motion.div
            className="row mb-4 g-2 justify-content-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by brand or name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
              >
                <option value="">All Brands</option>
                {brands.map((brand, index) => (
                  <option key={index} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <select
                className="form-select"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="">Sort by</option>
                <option value="priceLowHigh">Price: Low to High</option>
                <option value="priceHighLow">Price: High to Low</option>
                <option value="nameAZ">Model: A-Z</option>
                <option value="nameZA">Model: Z-A</option>
                <option value="popular">Popular</option>
              </select>
            </div>
          </motion.div>

          {/* Cars Grid */}
          <div className="row g-4">
            {filteredCars.length > 0 ? (
              <AnimatePresence>
                {filteredCars.map((car, index) => (
                  <motion.div
                    key={car.id}
                    className="col-md-4 col-lg-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="card car-card shadow-sm h-100 border-0">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="card-img-top"
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
                            {car.features.slice(0, 3).map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        )}

                        <div className="mt-auto">
                          <Link
                            to={`/cars/${car.id}`}
                            className="btn w-100 btn-outline-dark"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              <motion.div
                className="col-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h5>No cars found.</h5>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Car;

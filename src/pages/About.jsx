import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function About() {
  return (
    <div className="about-page font-text">
      {/* Hero Section */}
      {/* <section className="hero-section text-center text-light d-flex align-items-center justify-content-center">
        <div className="overlay"></div>
        <motion.div
          className="container position-relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-4 fw-bold mb-3">About AutoCar</h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            We’re redefining the car-buying experience through trust,
            transparency, and technology.
          </p>
        </motion.div>
      </section> */}

      {/* Mission Section */}
      <section className="mission py-5">
        <motion.div
          className="container text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4 fw-bold">Our Mission</h2>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            To provide a seamless and transparent car buying experience,
            connecting customers with quality vehicles and excellent service.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="team py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5 fw-bold">
            Meet Our Team
          </h2>

          <div className="row text-center g-4">
            {/* Team Member 1 */}
            <motion.div
              className="col-md-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="team-card shadow-sm rounded p-4 bg-white"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHsQ1YTQR8VCkVobguY5ERVwthi13oZIjrNg&s"
                  alt="John Doe"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "180px", height: "180px", objectFit: "cover" }}
                />
                <h5 className="fw-bold">John Doe</h5>
                <p className="text-muted">Founder & CEO</p>
                <div className="social-icons d-flex justify-content-center gap-3">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaLinkedinIn /></a>
                </div>
              </motion.div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="col-md-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="team-card shadow-sm rounded p-4 bg-white"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  alt="Jane Smith"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "180px", height: "180px", objectFit: "cover" }}
                />
                <h5 className="fw-bold">Jane Smith</h5>
                <p className="text-muted">Marketing Head</p>
                <div className="social-icons d-flex justify-content-center gap-3">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaLinkedinIn /></a>
                </div>
              </motion.div>
            </motion.div>

            {/* Team Member 3 */}
            <motion.div
              className="col-md-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="team-card shadow-sm rounded p-4 bg-white"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="https://randomuser.me/api/portraits/men/55.jpg"
                  alt="Mike Johnson"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "180px", height: "180px", objectFit: "cover" }}
                />
                <h5 className="fw-bold">Mike Johnson</h5>
                <p className="text-muted">Lead Developer</p>
                <div className="social-icons d-flex justify-content-center gap-3">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaLinkedinIn /></a>
                </div>
              </motion.div>
            </motion.div>

            {/* Team Member 4 */}
            <motion.div
              className="col-md-3"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="team-card shadow-sm rounded p-4 bg-white"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
              >
                <img
                  src="https://randomuser.me/api/portraits/women/60.jpg"
                  alt="Sarah Lee"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "180px", height: "180px", objectFit: "cover" }}
                />
                <h5 className="fw-bold">Sarah Lee</h5>
                <p className="text-muted">Designer</p>
                <div className="social-icons d-flex justify-content-center gap-3">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaLinkedinIn /></a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page font-text">
      <section className="contact-form-section py-5">
        <div className="container">
          <div className="row g-4">
            
            {/* Left: Contact Form */}
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Contact Us
              </motion.h2>

              <motion.form
                onSubmit={handleSubmit}
                className="mt-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {["name", "email", "message"].map((field, i) => (
                  <motion.div
                    key={field}
                    className="mb-3"
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.6 }}
                  >
                    <label htmlFor={field} className="form-label text-capitalize">
                      {field}
                    </label>
                    {field !== "message" ? (
                      <input
                        type={field === "email" ? "email" : "text"}
                        className="form-control"
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                      />
                    ) : (
                      <textarea
                        className="form-control"
                        id={field}
                        name={field}
                        rows="5"
                        value={formData[field]}
                        onChange={handleChange}
                        required
                      ></textarea>
                    )}
                  </motion.div>
                ))}

                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </motion.div>

            {/* Right: Contact Info */}
            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Our Info</h2>
              <p>
                <strong>Address:</strong> 123 AutoCar Street, Phnom Penh, Cambodia
              </p>
              <p>
                <strong>Phone:</strong> +855 96 338 1213
              </p>
              <p>
                <strong>Email:</strong> info@autocar.com
              </p>

              <motion.div
                className="map mt-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <iframe
                  title="AutoCar Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31298.614695507506!2d104.889089!3d11.556373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095118c03f5e85%3A0xdeadbeef!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

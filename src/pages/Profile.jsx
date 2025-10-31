import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaSignOutAlt } from "react-icons/fa";
import "../assets/css/Profile.css"; // optional CSS

function Profile() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    avatar: "https://i.pravatar.cc/150?img=3",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saved user data:", user);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page py-5 font-text bg-light">
      <div className="container">
        <h2 className="text-center mb-5">My Profile</h2>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg p-4 rounded-4">
              {/* Avatar & Name */}
              <div className="text-center mb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="rounded-circle profile-avatar mb-3 border border-3 border-primary"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <h4 className="fw-bold">
                  <FaUser className="me-2 text-primary" />
                  {user.name}
                </h4>
                <p className="text-muted">
                  <FaEnvelope className="me-2" />
                  {user.email}
                </p>
              </div>

              {/* Profile Form */}
              <form onSubmit={handleSave}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaUser className="me-2 text-primary" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaEnvelope className="me-2 text-primary" />
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaPhone className="me-2 text-primary" />
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100 fw-bold">
                  Save Changes
                </button>
              </form>

              <hr className="my-4" />

              <div className="text-center">
                <button className="btn btn-outline-danger fw-bold px-4">
                  <FaSignOutAlt className="me-2" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

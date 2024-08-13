import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    profileImage: "",
    age: "",
    gender: "",
    hobbies: "",
    country: "",
    state: "",
    city: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const profiles = JSON.parse(localStorage.getItem("profiles")) || [];
    profiles.push(formData);
    localStorage.setItem("profiles", JSON.stringify(profiles));
    toast.success("Profile created successfully");
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-grow p-6">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <h1 className="text-2xl font-bold mb-4 text-center">
            Create Profile
          </h1>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Profile Image</label>
            <input
              type="file"
              name="profileImage"
              onChange={(e) =>
                handleChange({
                  target: { name: "profileImage", value: e.target.files[0] },
                })
              }
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Hobbies</label>
            <input
              type="text"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className={`w-full p-2 border ${
                errors.country ? "border-red-500" : "border-gray-300"
              } rounded`}
            >
              <option value="">Select Country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country}</p>
            )}
          </div>

          {formData.country === "United States" && (
            <div className="mb-4">
              <label className="block text-gray-700">State</label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.state ? "border-red-500" : "border-gray-300"
                } rounded`}
              >
                <option value="">Select State</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="New York">New York</option>
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm">{errors.state}</p>
              )}
            </div>
          )}

          {formData.country === "United States" && (
            <div className="mb-4">
              <label className="block text-gray-700">City</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } rounded`}
              >
                <option value="">Select City</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="San Francisco">San Francisco</option>
                <option value="San Diego">San Diego</option>
              </select>
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
          )}
          <div className="flex justify-between gap-x-3">
            <button
              type="submit"
              className="bg-blue-500 w-full text-white rounded-full p-2 hover:bg-blue-600"
            >
              Submit
            </button>
            <button className="bg-red-500 w-full text-white rounded-full p-2 hover:bg-red-600">
              Cancel
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;

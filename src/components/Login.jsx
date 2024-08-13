import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        u.username === formData.username && u.password === formData.password
    );
    if (user) {
      navigate("/dashboard", { state: { username: formData.username } });
      toast.success("Login successful");
    } else {
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow p-6">
        <form
          className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
            Login
          </h2>
          <div className="mb-4">
            <label className="block text-gray-600">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="p-2 border rounded w-full"
            />
          </div>
          <div className="mb-4 text-end">
          <Link to="/register" className="text-blue-500">
            Don't have an account? Sign Up
          </Link>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;

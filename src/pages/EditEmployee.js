import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = ({ employees, setEmployees }) => {
  const { id } = useParams();  // Extract the ID from the URL
  const navigate = useNavigate();

  // Find the employee to edit based on the ID
  const employeeToEdit = employees.find((emp) => emp.id === parseInt(id));

  // If employee not found, redirect to home
  if (!employeeToEdit) {
    navigate("/");
  }

  // Set initial form data with employee details
  const [formData, setFormData] = useState({
    name: employeeToEdit.name,
    email: employeeToEdit.email,
    designation: employeeToEdit.designation,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Update the employee details in the state
    const updatedEmployees = employees.map((emp) =>
      emp.id === parseInt(id) ? { ...emp, ...formData } : emp
    );
    setEmployees(updatedEmployees);

    // Redirect back to home after saving
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h3>Edit Employee</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="designation" className="form-label">
            Designation
          </label>
          <input
            type="text"
            className="form-control"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;

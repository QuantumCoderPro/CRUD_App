import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const AddEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const B_URL = process.env.REACT_APP_BACKEND_URL


  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let newErrors = {};
    if (formData.firstName.trim() === '') {
      newErrors.firstName = 'Please enter your first name.';
    }
    if (formData.lastName.trim() === '') {
      newErrors.lastName = 'Please enter your last name.';
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Please enter your email address.';
    }
    if (formData.phone.trim() === '') {
      newErrors.phone = 'Please enter your phone number.';
    }
  
    if (Object.keys(newErrors).length === 0) {
      try {
        await axios.post(`${B_URL}/employees/addEmployee`, formData);
        console.log('Employee added successfully');
        navigate('/');
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-5">Add Employee</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className={`form-control ${errors.firstName && 'is-invalid'}`}
          />
          {errors.firstName && <div className="invalid-feedback text-danger">{errors.firstName}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className={`form-control ${errors.lastName && 'is-invalid'}`}
          />
          {errors.lastName && <div className="invalid-feedback text-danger">{errors.lastName}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email && 'is-invalid'}`}
          />
          {errors.email && <div className="invalid-feedback text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone No</label>
          <input
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            className={`form-control ${errors.phone && 'is-invalid'}`}
          />
          {errors.phone && <div className="invalid-feedback text-danger">{errors.phone}</div>}
        </div>
        <div className="mb-3" style={{ marginTop:'20px' }}>
  <button type="submit" className="btn btn-primary btn-lg btn-block">Submit</button>
</div>

      </form>
    </div>
  );
}

export default AddEmployee;

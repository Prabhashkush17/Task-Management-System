import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';



const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'Admin',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit=async(e)=>{
     e.preventDefault();
      if (role=="admin")
      {
         try {
          
            let api=`${import.meta.env.VITE_BACKEND_URL}/admin/login`; 
            const response = await axios.post(api, {email:email, password:password});
            console.log(response);
            localStorage.setItem("adminname",response.data.admin.name);
            localStorage.setItem("adminemail",response.data.admin.email);
            alert(response.data.msg);
         } catch (error) {
          
           console.log(error);
           alert(error.response.data.msg);
         }
      }
      else 
      {
        alert("dffdggf");
      }
  }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Logged in as ${formData.role} with email ${formData.email}`);
//   };

  return (
    <div className="login-background d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg login-card">
        <h2 className="text-center mb-4 text-primary">Task Management System </h2>
        <h2 className="text-align mb-4 text-primary"> LOGIN </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <select
              className="form-select"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Admin">Admin</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

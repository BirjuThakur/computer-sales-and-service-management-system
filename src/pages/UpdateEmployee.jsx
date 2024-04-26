import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const [customerData, setCustomerData] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    role: ""
  });
  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/allroutes/singleemploy/${userid}`);
        setCustomerData(response.data.singleuser);
        setFormData({
          firstname: response.data.singleuser.firstname,
          lastname: response.data.singleuser.lastname,
          role: response.data.singleuser.role
        });
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomerData();
  }, [userid]);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:5000/allroutes/updateemploy/${userid}`, formData);
      console.log("Employee updated successfully!");
      navigate("/employee");

    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {customerData ? (
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-center text-3xl font-extrabold text-gray-900">Update Employee</h1>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="firstname" className="sr-only">First Name:</label>
                <input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First Name" />
              </div>
              <div>
                <label htmlFor="lastname" className="sr-only">Last Name:</label>
                <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name" />
              </div>
              <div>
                <label htmlFor="role" className="sr-only">Role:</label>
                <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Role" />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Update
              </button>
            </div>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UpdateEmployee;
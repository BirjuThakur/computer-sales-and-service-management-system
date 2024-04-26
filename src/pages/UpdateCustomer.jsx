import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCustomer = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const [customerData, setCustomerData] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phonenumber: ""
  });
  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/allroutes/singlecustomer/${userid}`);
        setCustomerData(response.data.singleuser);

        setFormData({
          firstname: response.data.singleuser.firstname,
          lastname: response.data.singleuser.lastname,
          phonenumber: response.data.singleuser.phonenumber
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
      await axios.put(`http://127.0.0.1:5000/allroutes/updatecustomer/${userid}`, formData);
      console.log("Customer updated successfully!");
      navigate("/customer");

    } catch (error) {
      console.error("Error updating customer:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {customerData ? (
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-center text-3xl font-extrabold text-gray-900">Update Customer</h1>
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
                <label htmlFor="phonenumber" className="sr-only">Phone Number:</label>
                <input type="text" id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number" />
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

export default UpdateCustomer;
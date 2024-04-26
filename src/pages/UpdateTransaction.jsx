import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTransaction = () => {
  const navigate = useNavigate();
  const { userid } = useParams();
  const [transactionData, setTransactionData] = useState(null);
  const [formData, setFormData] = useState({
    transactionnumber: "",
    customer: "",
    noofitems: ""
  });

  useEffect(() => {
    const fetchTransactionData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/allroutes/singletransaction/${userid}`);
        setTransactionData(response.data.singleTransaction);
        
        setFormData({
          transactionnumber: response.data.singleTransaction?.transactionnumber,
          customer: response.data.singleTransaction?.customer,
          noofitems: response.data.singleTransaction?.noofitems
        });
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
    };

    fetchTransactionData();
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
      await axios.put(`http://127.0.0.1:5000/allroutes/updatetransaction/${userid}`, formData);
      console.log("Transaction updated successfully!");
      navigate("/transaction");
    } catch (error) {
      console.error("Error updating transaction:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {transactionData ? (
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-center text-3xl font-extrabold text-gray-900">Update Transaction</h1>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="transactionnumber" className="sr-only">Transaction Number:</label>
                <input type="text" id="transactionnumber" name="transactionnumber" value={formData.transactionnumber} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Transaction Number" />
              </div>
              <div>
                <label htmlFor="customer" className="sr-only">Customer:</label>
                <input type="text" id="customer" name="customer" value={formData.customer} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Customer" />
              </div>
              <div>
                <label htmlFor="noofitems" className="sr-only">Number of Items:</label>
                <input type="text" id="noofitems" name="noofitems" value={formData.noofitems} onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Number of Items" />
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

export default UpdateTransaction;
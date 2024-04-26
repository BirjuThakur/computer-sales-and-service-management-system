import React, { useState, useEffect } from "react";
import HeroTable from "../components/HeroTable";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Customer = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage, searchInput]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/allroutes/allcustomers?page=${currentPage}&limit=10&firstname=${searchInput}`);
      setData(response.data.customers);
      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const columnsToDisplay = ["firstname", "lastname", "phonenumber"];

  const handleUpdate = (rowData) => {
    navigate(`/updatecustomer/${rowData._id}`);
  };

  const handleDelete = async (rowData) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/allroutes/deletecustomer/${rowData._id}`);
      setData((prevData) => prevData.filter(customer => customer._id !== rowData._id));
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const handleCreateCustomer = () => {
    navigate("/createcustomer");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-[90%] flex justify-around items-center">
      <h1 onClick={handleCreateCustomer} className="cursor-pointer text-blue-500 mb-4">Create Customer</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by first name"
          value={searchInput}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      </div>
      <HeroTable data={data} columns={columnsToDisplay} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <nav className="mt-4">
      <ul className="flex justify-center space-x-2">
        {getPageNumbers().map((page) => (
          <li key={page}>
            <button onClick={() => onPageChange(page)} className={`px-4 py-2 border
             ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-gray-300 hover:bg-gray-100'} rounded-md`}>
            {page}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Customer;
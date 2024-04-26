import React, { useState, useEffect } from "react";
import HeroTable from "../components/HeroTable";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = () => {
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
      const response = await axios.get(`http://127.0.0.1:5000/allroutes/allproducts?page=${currentPage}&limit=10&name=${searchInput}`);
      setData(response.data.produtcs);
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

  const columnsToDisplay = ["productcode", "name", "price", "category"];

  const handleUpdate = (rowData) => {
    navigate(`/updateproduct/${rowData._id}`);
  };

  const handleDelete = async (rowData) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/allroutes/deleteproduct/${rowData._id}`);
      setData((prevData) => prevData.filter(product => product._id !== rowData._id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleCreateProduct = () => {
    navigate("/createproduct");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="w-[90%] flex justify-around items-center">
        <h1 onClick={handleCreateProduct} className="cursor-pointer text-blue-500 mb-4">Create Product</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchInput}
            onChange={handleSearch}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <HeroTable data={data} columns={columnsToDisplay} handleUpdate={handleUpdate} handleDelete={handleDelete} />
      <nav className="mt-4">
        <ul className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
            <li key={page}>
              <button onClick={() => handlePageChange(page)} className={`px-4 py-2 border ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border-gray-300 hover:bg-gray-100'} rounded-md`}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Product;
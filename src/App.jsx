import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Employee from "./pages/Employee";
import Product from "./pages/Product";
import Inventory from "./pages/Inventory";
import Transaction from "./pages/Transactions";
import Navbar from "./pages/header/Navbar";
import LeftDrawerOpen from "./pages/header/LeftDrawerOpen";
import UpdateCustomer from "./pages/UpdateCustomer";
import UpdateEmployee from "./pages/UpdateEmployee";
import UpdateProduct from "./pages/UpdateProduct";
import UpdateTransaction from "./pages/UpdateTransaction";
import CreateCustomer from "./pages/CreateCustomer";
import CreateEmployee from "./pages/CreateEmployee";
import CreateProduct from "./pages/CreateProduct";
import CreateTransaction from "./pages/CreateTransaction";

const App =() => {
  
  return (
    <>
      <div className="flex w-full">
          <div className='hidden md:block md:w-[19%] lg:w-[15%] fixed top-0 left-0 bg-black h-screen overflow-y-auto'>
            <LeftDrawerOpen />
          </div>
        
        <div className={`w-full md:w-[81%] lg:w-[85%] md:ms-[19%] lg:ms-[15%]`}>
            <Navbar />
          <div className="mt-[50px]">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createcustomer" element={<CreateCustomer />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/updatecustomer/:userid" element={<UpdateCustomer />} />
        <Route path="/createemployee" element={<CreateEmployee />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/updateemployee/:userid" element={<UpdateEmployee />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/updateproduct/:userid" element={<UpdateProduct />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/createtransaction" element={<CreateTransaction />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/updatetransaction/:userid" element={<UpdateTransaction />} />
      </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

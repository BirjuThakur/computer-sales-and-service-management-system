import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import axios from "axios";

const Home = () =>{
    const [customers,setCustomers] = useState("");
    const [employee,setEmployee] = useState("");
    const [product,setProduct] = useState("");
    
    useEffect(()=>{
    fetchcustomerdata();
    },[]);

    const fetchcustomerdata = async() =>{
      try {
         const customerData =await axios.get("http://127.0.0.1:5000/allroutes/allcustomers");
         setCustomers(customerData.data.pagination.totalNewCustomers);
         
         const employData =await axios.get("http://127.0.0.1:5000/allroutes/allEmploy");
         setEmployee(employData.data.pagination.totalNewemploy);

         const productData =await axios.get("http://127.0.0.1:5000/allroutes/allproducts");
         setProduct(productData.data.pagination.totalNewproducts);
         
      } catch (error) {
        console.log(error)
      }
    }

    return(
        <>
        <div className="w-full flex justify-center items-center">
           <div className="w-[90%]">
             {/* first div */}
             <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 pt-12">
              <Card title="customer" records={customers} icon={<GroupsIcon />} 
              titleClassName="text-blue-400" 
              leftborder="border-l-4 border-blue-500 border-t-black border-r-black border-b-black"
              to="/customer" />  
              <Card title="employees" records={employee} icon={<GroupsIcon />} 
              titleClassName="text-green-400" 
              leftborder="border-l-4 border-green-500 border-t-black border-r-black border-b-black"
              to="/employee"/>
              <Card title="product" records={product} icon={<DocumentScannerIcon />} 
              titleClassName="text-purple-400" 
              leftborder="border-l-4 border-purple-500 border-t-black border-r-black border-b-black"
              to="/product"/>
            </div>
            {/* first end */}
            <div className="w-full flex flex-col md:flex-row justify-center md:justify-start items-center gap-10 pt-12">
              <Card title="supplier" records="0" icon={<GroupsIcon />} 
              titleClassName="text-black-400" 
              leftborder="border-l-4 border-black-500 border-t-black border-r-black border-b-black"
              to="/"/>  
              <Card title="registered account" records="0" icon={<PersonIcon />} 
              titleClassName="text-red-400" 
              leftborder="border-l-4 border-red-500 border-t-black border-r-black border-b-black"
              to="/"/>
            </div>
           </div>
        </div>
        </>
    )
};

export default Home;
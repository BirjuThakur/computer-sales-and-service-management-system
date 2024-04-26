import React from "react";
import { NavLink } from "react-router-dom";

const AccordionDrawer = () => {
  return (
    <>
      <div >
        <div>
            <li><NavLink to="/products" >products</NavLink></li>
            <li className="pt-3"><NavLink to="/categories" >categories</NavLink></li>
            <li className="pt-3"><NavLink to="/addproduct" >addproduct</NavLink></li>
            <li className="pt-3"><NavLink to="/addcategory" >addcategory</NavLink></li>
        </div>
      </div>
    </>
  );
};

export default AccordionDrawer;
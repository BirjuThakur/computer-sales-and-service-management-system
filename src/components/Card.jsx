import React from "react";
import { Link } from "react-router-dom";

const Card = ({title,records,icon,titleClassName,leftborder,to}) =>{
    return(
        <>
        {/* first div start */}
        <Link to={to} className="text-black">
        <div className={`bg-white w-[270px] h-[100px] border border-black flex justify-around
         items-center ${leftborder}`} >
                <div>
                    <h1 className={`uppercase ${titleClassName}`}>{title}</h1>
                    <p className=" capitalize">{records} Record(s)</p>
                </div>
                <div>
                    <h1>{icon}</h1>
                </div>
                </div>
                </Link>
                 {/* first div end */}
        </>
    )
};

export default Card;
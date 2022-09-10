/* eslint-disable prettier/prettier */
import { useState } from "react";
import { Link } from "react-router-dom";

const Logout=()=>{
    const [drop,setDrop]=useState(false);
    return (
        <div className="flex items-center p-1 box-border">
        <img src={"https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80"} className="h-8 w-8  rounded object-cover justify-self-start" alt="not found" loading="lazy"/>
        <div className="flex items-center relative w-full gap-2 justify-around ml-4">
        <span className="text-sm font-medium tracking-wide font-sans capitalize max-w-[12rem] hidden lg:block">{`${"Khemis miliana"}`}</span>
        {drop?
           <div className="top-10 animate-topup border-2 border-authborder border-opacity-50 z-[55] absolute right-0 rounded-2xl p-2 text-sm font-bold">
           <Link to="/" className="flex  px-1 py-2 rounded-lg cursor-pointer hover:bg-gray-200 items-center">
           <span className="material-icons">apps</span>
           <span className="ml-2 font-sans font-medium">Apps</span>
           </Link>
           <Link className="flex px-1 py-2 rounded-lg text-red-600 cursor-pointer hover:bg-gray-200 items-center" onClick={()=>"Logout function"}>
           <span className="material-icons-outlined">logout</span>
           <span className="ml-2 font-sans font-medium">Logout</span>
           </Link>
         </div>
        :""}
        <span className="material-icons-outlined cursor-pointer rounded hover:bg-gray-200" onClick={()=>setDrop(prev=>!prev)}>{drop?"expand_less":"expand_more"}</span>
        </div>
   </div>
    );
};

export default Logout;
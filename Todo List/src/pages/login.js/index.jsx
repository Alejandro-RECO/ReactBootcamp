import React, { useState } from "react";
import { client } from "../../supabase/client";

import { RiArrowDropRightFill } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      const result = await client.auth.signInWithOtp({
        email
      })
      console.log(result);

    }catch(err){
      console.error('ERROR', err.message);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className=" p-5 rounded-lg bg-primary-100 w-[380px] flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-bold py-4 text-primary-800">Welcome to ToDo List </h1>
        <input 
          className="rounded-lg  border-primary-950 py-1 px-4 "
          type="email"
          name="email"
          value={email}
          placeholder="youremail@site.com..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="flex items-center px-2 text-lg bg-primary-800/90 rounded-lg text-primary-50/90 pl-3 "
          type="submit">Send <RiArrowDropRightFill/></button>
      </form>
    </div>
  );
};

export default Login;

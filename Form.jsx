import React, { useState } from 'react';

const Form=()=> {
    const[email,setEmail]=useState("");
    const[passWord,setPassWord]=useState("");
    const[allEntry,setAllEntry]=useState([]);
    const submitForm=(event)=>{
        event.preventDefault();
       const newEntry={email:email,passWord:passWord};
       setAllEntry([...allEntry,newEntry]); 
       console.log(allEntry);
    }
  return (
    <>
    <form action="" onSubmit={submitForm} className="container">
       <div className="p1">
           <label htmlFor="email">Email</label>
           <input type="text" name="email" id="email" 
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
           />
       </div>
       <div className="p2">
           <label htmlFor="password">Password</label>
           <input type="password" name="password" id="password" 
               value={passWord}
               onChange={(e)=>setPassWord(e.target.value)}
           />
       </div>
       <button type="submit">Login</button>
    </form>
    <div>
        {allEntry.map((curEle)=>{
            return(
                <div className="showData">
                    <p>{curEle.email}</p>
                    <p>{curEle.passWord}</p>
                </div>
            )
        })
        }
    </div>
    </>
  );
}

export default Form;

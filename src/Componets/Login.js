import { useEffect, useState } from "react"
import React from 'react'


export default function Login(){

        const [user , setuser] = useState({email:"", password:""});
        const [error,seterror] = useState({email:null, password:null})
        const [isshown , setshow] = useState(false)
        const e_regx =/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    
        const handelChange= (e)=>{
            setuser({...user,
                [e.target.name] : e.target.value})
               
                switch(e.target.name)
                {
                    case "password":
                        seterror({ ...error,
                          password: e.target.value.length === 0
                           ? "this field is required"
                            : e.target.value.length >8 ?"max legnth is 8"
                            :null,
                        });
                        break;
    
                        case "email":
                        seterror({ ...error,
                          email: e.target.value.length === 0
                           ? "this field is required"
                            : !e_regx.test(e.target.value)?"this is invalid"
                            :null,
                        });
                        break;
    
                        default:
                            break;
                }
            }
    
          const submituser =(e)=>{
             e.preventDefault()
             if(!error.email && !error.password){
             console.log(user)
             }
            }
    
            const showPassword= (e)=>{
              setshow(!isshown)
            }
    
        
        return(
            <>
       <div className="container p-5 w-50  border-dark">
           <h1 className="text-center">Login</h1>
           <form onSubmit={(e)=> submituser(e)}>
        <div className="mb-3">
           <label htmlFor="formGroupExampleInput" className="form-label">Email Address</label>
           <input type="text" name="email" value={user.email} onChange={(e)=> handelChange(e)} className="form-control" id="formGroupExampleInput" placeholder="Email Address"/>
           <span className="text-danger">{error.email}</span>
       </div>
    
        <div className="mb-3">
           <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
           <input type={isshown?"text" : "password"} name="password" value={user.password} onChange={(e)=> handelChange(e)} className="form-control" id="formGroupExampleInput2" placeholder="Password"/>
           <span className="text-danger">{error.password}</span><br/>
           <input type="checkbox"  onChange ={(e)=> showPassword()}/> <span>Show Password</span>
        </div>
        <button className="btn btn-success">submit</button>
        </form>
        </div>
            </>
        )
    
    
    
}
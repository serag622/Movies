import React from 'react'
import { useEffect, useState } from "react"


export default function Register(){

     const [user , setuser] = useState({user:"", password:"",email:'',username:'',confirmpassword:''});
        const [error,seterror] = useState({email:null, password:null,user:null,username:null,confirmpassword:null})
        const [isshown , setshow] = useState(false)
        const e_regx =/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const p_regx =/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
        const us_regx =/^\s*\S+\s*$/


    
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
                            :!p_regx.test(e.target.value)?'not valid'
                            :null,
                        });
                        break;

                        case "user":
                        seterror({ ...error,
                          user: e.target.value.length === 0
                           ? "this field is required"
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

                        case "username":
                        seterror({ ...error,
                          username: e.target.value.length === 0
                           ? "this field is required"
                            : !us_regx.test(e.target.value)?"this is invalid"
                            :null,
                        });
                        break;

                        case "confirmpassword":
                        seterror({ ...error,
                            confirmpassword: e.target.value.length === 0
                           ? "this field is required"
                            : e.target.value != user.password ?"this is invalid"
                            :null,
                        });
                        break;


                        default:
                            break;
                }
            }
    
          const submituser =(e)=>{
             e.preventDefault()
             if(!error.email && !error.password && !error.user && !error.username && !error.confirmpassword){
             console.log(user)
             }
             else{
                 
             }
            }
    
            const showPassword= (e)=>{
              setshow(!isshown)
            }
    
        
        return(
            <>
       <div className="container p-5 w-50  border-dark">
           <h1 className="text-center">Register</h1>
           <form onSubmit={(e)=> submituser(e)}>

        <div className="mb-3">
           <label htmlFor="formGroupExampleInput" className="form-label">User</label>
           <input type="text" name="user" value={user.user} onChange={(e)=> handelChange(e)} className="form-control" id="formGroupExampleInput" placeholder="User"/>
           <span className="text-danger">{error.user}</span>
       </div>
    
        <div className="mb-3">
           <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
           <input type={isshown?"text" : "password"} name="password" value={user.password} onChange={(e)=> handelChange(e)} className="form-control" id="formGroupExampleInput2" placeholder="Password"/>
           <span className="text-danger">{error.password}</span><br/>
           <input type="checkbox"  onChange ={(e)=> showPassword()}/> <span>Show Password</span>
        </div>


        <div className="mb-3">
           <label htmlFor="formGroupExampleInput" className="form-label">Email Address</label>
           <input type="text" name="email" value={user.email} onChange={(e)=> handelChange(e)} className="form-control" id="formGroupExampleInput" placeholder="Email Address"/>
           <span className="text-danger">{error.email}</span>
       </div>

        <div className="mb-3">
           <label htmlFor="formGroupExampleInput" className="form-label">user Name</label>
           <input type="text" name="username" value={user.username} onChange={(e)=> handelChange(e)} className="form-control" id="formGroupExampleInput" placeholder="UserName"/>
           <span className="text-danger">{error.username}</span>
       </div>

       <div className="mb-3">
           <label htmlFor="formGroupExampleInput" className="form-label">Confirm Password</label>
           <input type="text" name="confirmpassword" value={user.confirmpassword} onChange={(e)=> handelChange(e)} className="form-control" id="formGroupExampleInput" placeholder="Confirm Password"/>
           <span className="text-danger">{error.confirmpassword}</span>
       </div>

        




        <button className="btn btn-success">submit</button>
        </form>
        </div>
            </>
        )
    
}
// import React from 'react';
import {  useContext, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"


import { FcGoogle } from 'react-icons/fc';
// import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../Provider/AuthProvider";
// import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const auth = getAuth();
    const { signIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    // const [user, setUser] = useState('');
    const googleProvider = new GoogleAuthProvider;
    // const handleLogin = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(password, email);
    //     signIn(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             setSuccess('Login Successfully')
    //             console.log(user);
    //             form.reset();
    //             navigate(from,{replace:true});
    //         })
    //         .catch(error => console.log(error))
    // }
    
    //private route
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/";



    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://yoga-delight-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) =>{
        
        console.log(data.password,data.email);
            signIn(data.email, data.password)
                .then(result => {
                    const user = result.user;
                    setSuccess('Login Successfully')
                    console.log(user);
                    // form.reset();
                    navigate(from,{replace:true});
                })
                .catch(error => console.log(error))
      }
    return (
        <div className=" text-white bg-gradient-to-r from-cyan-500 via-black to-blue-400">
            <div className="hero-content  flex-col lg:flex-row ">
               
                <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-black">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold ">Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email"  {...register("email",{required:true})}  name="email" placeholder="Email" className="input input-bordered text-white" />
                                {errors.email && <span className="text-warning">Email is required</span>}

                            </div>
                            <div className="form-control text-white">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" 
                                 {...register("password",{required:true})}  name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-warning">Password is required</span>}
                             
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                            <input className="btn btn-outline text-blue-400" type='submit' value="Login" />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleSignIn} className="btn btn-outline text-blue-400" type='submit' value="Login"><span className="mr-2 bg-white rounded-full p-1"><FcGoogle /></span> Google</button>
                            </div>
                        </form>

                        <p className='my-4 text-center text-white'>New Member ?  ::  <Link className="text-blue-400 font-bold" to="/signUp">Sign Up</Link></p>

                        <p className="text-success">{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
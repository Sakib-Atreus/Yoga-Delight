
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2';
const SignUp = () => {

    const { createUser ,updateUserProfile } =useContext(AuthContext);
    const navigate =useNavigate();
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
    const onSubmit = (data) =>{
      createUser(data.email, data.password)
      .then(result => {

          const loggedUser = result.user;
          console.log(loggedUser);

          updateUserProfile(data.name, data.photoURL)
              .then(() => {
                  const saveUser = { name: data.name, email: data.email }
                  fetch('https://yoga-delight-server.vercel.app/users', {
                      method: 'POST',
                      headers: {
                          'content-type': 'application/json'
                      },
                      body: JSON.stringify(saveUser)
                  })
                      .then(res => res.json())
                      .then(data => {
                          if (data.insertedId) {
                              // reset();
                              Swal.fire({
                                  position: 'top-end',
                                  icon: 'success',
                                  title: 'User created successfully.',
                                  showConfirmButton: false,
                                  timer: 1500
                              });
                              navigate('/');
                          }
                      })



              })
              .catch(error => console.log(error))
      })
};
    return (
        <div className="hero bg-gradient-to-r from-cyan-500 via-black to-blue-400">
        <div className="hero-content flex-col lg:flex-row">
        
          <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-black ">
            <div className="card-body">
            <h1 className="text-3xl text-center font-bold text-white">Sign Up</h1>
             <form onSubmit={handleSubmit(onSubmit)} >
             <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input type="text" {...register("name")}  name="name" placeholder="name" className="input input-bordered text-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo_URL</span>
                </label>
                <input type="text" {...register("photoURL")} name="photoURL" placeholder="url" className="input input-bordered text-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input type="email"  {...register("email",{required:true})}  name="email" placeholder="enter email" className="input input-bordered text-white" />
                {errors.email && <span className="text-warning">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input type="password" 
                 {...register("password",{required:true,
                                    minLength:6,
                                    pattern:/^[a-z0-9]+$/

                                    })} 
               name="password" placeholder="password" className="input input-bordered text-white" />
               
                                {errors.password?.type==='required' && <span className="text-warning">Password required
                                </span>}
                                {errors.password?.type==='minLength' && <span className="text-warning">Password must be 6 characters.
                                </span>}
                                {errors.password?.type==='pattern' && <span className="text-warning">Password cant be use as capital,and special characters.
                                </span>}
               
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Confirm Password</span>
                </label>
                <input type="password" {...register("confirmPassword")} name="password" placeholder="password" className="input input-bordered text-white" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                </label>
              </div>
              
              
              
              <div className="form-control mt-6">
                <input className="btn btn-outline text-blue-400" type='submit' value="Sign Up" />
                
              </div>
              
             </form>
             <p className='my-4 text-center text-white'>Already Have an Account ? : <Link  className="text-blue-400 font-bold" to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;
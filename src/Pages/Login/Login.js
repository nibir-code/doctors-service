import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "./../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    return (
     console.log(user)
    );
  }
     return (
      <div className='flex h-screen justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold bg-clip-text text-transparent bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700">Login</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400 text-white border-slate-50">Login</button>
          <p className='text-center font-medium'>New to doctor portal ? <span className='text-teal-500'>create new account</span></p>
        </div>
        <p className='text-center text-xl font-bold '>or</p>
        <div className="form-control ">
        <button className="btn bg-white bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500" onClick={() => signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
      </div>
      </div>
        </div>
    </div>
     );
};

export default Login;
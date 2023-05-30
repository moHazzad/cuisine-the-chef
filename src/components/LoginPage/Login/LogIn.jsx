import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import {  toast } from 'react-toastify';

function LogIn() {
  const [error, setError] = useState("");
  const { loginUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

  const handelLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);

        form.reset();
        navigate(from ,{replace: true})
        toast("Welcome");
        // navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold py-6">Login now!</h1>
          <p className="text-danger">{error}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form className="card-body" onSubmit={handelLogIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link
                  to={"/Register"}
                  className="label-text-alt link link-hover"
                >
                  Don't have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
              <button type="submit" className="btn bg-orange-500">
                Login
              </button>
            </div>
            <div className="text-center my-2">
              <h1>OR</h1>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleGoogleSignIn} className="btn btn-outline ">
                Sign-In with Google
              </button>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleGithubSignIn} className="btn btn-outline">
                Sign-In with Github
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;

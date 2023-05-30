import React, { useContext, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import {  toast } from 'react-toastify';

function Register() {
  const navigate = useNavigate()
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.profilePicture.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    if (password.length < 6) {
      setError("password should be more then 6 char ");
      return;
    }
    registerUser(email, password )
            .then(result => {
                const registerdUser = result.user;
                console.log(registerdUser);
                updateUserInfo(registerdUser, name, photo)
                setError('Congratulation account created,pleas log in')
                form.reset();
                navigate('/')
                toast("Welcome");
            })
            .catch(error => {
                setError(error.message)
            })

    // if ((name, email, password, photo_url)) {
    //   registerUser(email, password)
    //     .then((result) => {
    //       const registeredUser = result.user;
    //       console.log(registeredUser);
    //       updateUserInfo(registeredUser, name, photo_url);
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //     });
    // }
  };

  const updateUserInfo = (user, name, photo) => {
    updateProfile(user, { displayName: name, photoURL: photo })
      .then(() => {})
      .catch((error) => {
        setError(error.massage);
      });


  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold py-6">Register Here!</h1>
          <p className="text-danger">{error}</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <Form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="profilePicture"
                className="input input-bordered"
                required
              />
            </div>
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
                <Link to={"/login"} className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
              <button className="btn btn-primary">Register</button>
            </div>
          </Form>
          
        </div>
      </div>
    </div>
  );
}

export default Register;

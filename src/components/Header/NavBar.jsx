import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

function NavBar() {
  const { user, LogOut } = useContext(AuthContext);

  const handleLogOut = () => {
    LogOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar  rounded  ">
      <div className="flex justify-between w-[90%] mx-auto">
        <div className="">
          <Link to={'/'} className="btn btn-ghost normal-case text-xl text-orange-500 ">
            Cuisines
          </Link>
        </div>

       

        <div className="flex  items-center gap-2">
          <span className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "md:btn md:btn-outline  text-orange-500  font-bold"
                  : "md:btn md:btn-ghost text-orange-500  font-bold"
              }
            >
              Home
            </NavLink>
          </span>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "md:btn md:btn-outline  text-orange-500  font-bold"
                : "md:btn md:btn-ghost text-orange-500  font-bold"
            }
          >
            Blog
          </NavLink>
        </div>

        <div className="flex-none gap-2">
          
          <div className="dropdown dropdown-end flex items-center gap-3">
            {user ? (
              <>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img  className='' title={user?.displayName} src={user?.photoURL} />
                  </div>
                </label>
                <Link>
                  <button 
                    onClick={handleLogOut}
                    className=" btn   text-orange-500 font-bold  hidden md:block "
                  >
                    Log Out
                  </button>
                </Link>{" "}
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn  text-orange-500 font-bold ">
                    Log In
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* <div className="flex gap-3 items-center">
            {user ? (
              <>
                <img
                  title={user?.displayName}
                  className="w-16 h-16 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
                <Link>
                  <button
                    onClick={handleLogOut}
                    className="btn glass  text-blue-600 font-bold text-lg"
                  >
                    Log Out
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="btn glass text-blue-600 font-bold text-lg">
                    Log In
                  </button>
                </Link>
              </>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;

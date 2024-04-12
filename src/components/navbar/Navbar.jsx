import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(console.log("logout successfully"))
      .catch((error) => {
        console.log(error);
      });
  };

  const nabvarLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/userprofile">User Profile</Link>
      </li>
      <li>
        <Link to="/updateprofile">Update Profile</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-[#3A9188] text-white mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {nabvarLink}
          </ul>
        </div>
        <div>
          <a className="btn btn-ghost italic text-3xl font-bold text-[#EEF5FF] gap-0">
            <span className="text-[#FFF5C2] font-black text-4xl">C</span>ozy
            <span className="text-[#FFF5C2] font-black text-4xl">H</span>omio
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-semibold">
          {nabvarLink}
        </ul>
      </div>
      <div className="navbar-end space-x-3">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        {user ? (
          <button onClick={handleLogout} 
          className="btn bg-[#B8E1DD] border-0 px-6 text-base font-semibold">
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#B8E1DD] border-0 px-6 text-base font-semibold">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

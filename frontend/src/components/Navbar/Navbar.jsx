import { FcTodoList } from "react-icons/fc";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="Navbar text-2xl flex items-center justify-between h-auto w-full px-7 py-5 border border-solid border-violet-300 text-slate-600 fixed top-0 bg-white z-20">
        <div className="flex items-center gap-2 ml-64">
          <FcTodoList className="nav" size={30} />
          <h1 className="text-3xl font-semibold">ToDo</h1>
        </div>
        <div className="nav hidden md:flex justify-between items-center gap-[50px] ml-auto font-normal">
          <Link to="/" className="hover:bg-sky-200 duration-300 border-none rounded-lg px-5 py-2">Home</Link>
          <Link to="/about" className="hover:bg-sky-200 duration-500 border-none rounded-lg px-5 py-2">About Us</Link>
          <Link to="/my-todo" className="hover:bg-sky-200 duration-500 border-none rounded-lg px-5 py-2">My Todo</Link>
        </div>
        <div className="hidden md:flex justify-between items-center gap-[50px] ml-auto">
          {!isLoggedIn && (
            <>
              <Link to="/signin" className="hover:bg-blue-200 border rounded-lg px-5 py-2 duration-500 hover:transition-colors hover:border-violet-500 font-light">Sign in</Link>
              <Link to="/signup" className="hover:bg-blue-200 border rounded-lg px-5 py-2 duration-500 hover:transition-colors hover:border-violet-500 font-light">Sign up</Link>
            </>
          )}
          {isLoggedIn && (
            <Link to="/logout" onClick={logout} className="hover:bg-blue-200 border rounded-lg px-5 py-2 duration-500 hover:transition-colors hover:border-violet-500 font-light">Log Out</Link>
          )}
        </div>
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </nav>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-8 bg-white border border-violet-300 shadow-lg rounded-lg p-4 flex flex-col items-center gap-4`}>
        <Link to="/" className="hover:bg-sky-200 duration-300 border-none rounded-lg px-5 py-2">Home</Link>
        <Link to="/about" className="hover:bg-sky-200 duration-500 border-none rounded-lg px-5 py-2">About Us</Link>
        <Link to="/my-todo" className="hover:bg-sky-200 duration-500 border-none rounded-lg px-5 py-2">My Todo</Link>
        {!isLoggedIn && (
          <>
            <Link to="/signin" className="hover:bg-blue-200 border rounded-lg px-5 py-2 duration-500 hover:transition-colors hover:border-violet-500">Sign in</Link>
            <Link to="/signup" className="hover:bg-blue-200 border rounded-lg px-5 py-2 duration-500 hover:transition-colors hover:border-violet-500">Sign up</Link>
          </>
        )}
        {isLoggedIn && (
          <Link to="/logout" className="hover:bg-blue-200 border rounded-lg px-5 py-2 duration-500 hover:transition-colors hover:border-violet-500">Log Out</Link>
        )}
      </div>
    </>
  );
}

export default Navbar;

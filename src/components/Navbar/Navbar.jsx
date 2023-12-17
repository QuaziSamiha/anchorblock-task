/* eslint-disable no-undef */
import { NavLink } from "react-router-dom";
import { FaRegBell } from "react-icons/fa";
import { CiSettings, CiSearch } from "react-icons/ci";
import user from "../../assets/images/user.jpg";
import "./Navbar.css";
const Navbar = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "",
    },
    {
      id: 2,
      name: "Users",
      path: "/users",
    },
    {
      id: 3,
      name: "Projects",
      path: '/projects'
    },
    {
      id: 4,
      name: "Tasks",
      path: 'tasks'
    },
    {
      id: 5,
      name: "Reporting",
      path: '/reporting'
    },
  ];
  return (
    <>
      <section className="bg-[#6941c6] h-[72px] flex items-center">
        <nav className="h-10 flex w-[1234px] justify-between mx-20">
          <div className="flex">
            <div className="flex">
              <img src={user} className="h-8 w-10 mx-2" alt="" />
              <h1 className="h-6 w-14 font-bold text-xl text-white align-middle mt-2">
                Stack
              </h1>
            </div>
            <div className="flex">
              {routes.map((route) => (
                <div key={route.id}
                className="inline shadow-lg text-center shadow-[#503298] mx-2 h-10 rounded-md px-3"
                >
                  <NavLink
                    to={route.path}
                    className="text-[#F4EBFF] text-base leading-6 font-medium"
                  >
                    <p className="pt-2 h-10 rounded-md align-middle">
                      {route.name}
                    </p>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className="flex text-white">
            <div className="h-10 w-10 mx-1 shadow-sm shadow-[#503298] flex justify-center items-center text-xl">
              <CiSearch />
            </div>
            <div className="h-10 w-10 mx-1 shadow-sm shadow-[#503298] flex justify-center items-center text-xl">
              <CiSettings />
            </div>
            <div className="h-10 w-10 mx-1 shadow-sm shadow-[#503298] flex justify-center items-center text-xl">
              <FaRegBell />
            </div>
            <img
              className="h-10 w-10 mx-1 shadow-sm shadow-[#503298] rounded-full"
              src={user}
              alt=""
            />
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;

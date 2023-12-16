/* eslint-disable no-undef */
import { NavLink } from "react-router-dom";

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
      // path: '/projects'
    },
    {
      id: 4,
      name: "Tasks",
      // path: '/tasks'
    },
    {
      id: 5,
      name: "Reporting",
      // path: '/reporting'
    },
  ];
  return (
    <>
      <section className="bg-[#6941c6] h-[72px] flex justify-between items-center">
        <nav className="h-10">
          <div className="flex justify-start">
            <div>
              <h1 className="h-6 w-14 font-bold text-xl text-white align-middle mt-2">Stack</h1>
            </div>
            <div className="flex">
              {routes.map((route) => (
                <div
                  key={route.id}
                  className="inline shadow-xl text-center  shadow-[#503298] mx-2 h-10 rounded-md px-3"
                >
                  <NavLink
                    to={route.path}
                    className="text-[#F4EBFF] text-base leading-6 font-medium align-text-middle"
                  >
                    <span className="inline-block align-middle mt-2">
                      {route.name}
                    </span>
                  </NavLink>
                </div>
              ))}
            </div>
            <div className="flex">
                <div className="h-10 w-10 mx-px shadow-sm shadow-[#503298]"></div>
                <div className="h-10 w-10 mx-px shadow-sm shadow-[#503298]"></div>
                <div className="h-10 w-10 mx-px shadow-sm shadow-[#503298]"></div>
                <img className="h-10 w-10 mx-px shadow-sm shadow-[#503298]" src="" alt="" />
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;

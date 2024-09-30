import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [menuopen, setMenuopen] = useState(false);

  const menuItems = [
    {
      slug: "/",
      name: "Home",
    },
    {
      slug: "/all-recipes",
      name: "All",
    },
    {
      slug: "/recipe-tag",
      name: "Tags",
    },
    {
      slug: "/recipe-types",
      name: "Types",
    },
    {
      slug: "/about",
      name: "About",
    },
  ];

  return (
    <>
     {/* menu icon  */}
     <div className="sm:hidden flex justify-end  ">
        <button
          className=" bg-green-600 rounded-md mx-8 my-4 p-4 active:animate-spin "
          onClick={() => {
            setMenuopen(!menuopen);
          }}
        >
        {
          menuopen ? <IoMdClose />:<IoMenu /> 
        }
        </button>
      </div>

      <div className="bg-sky-600 flex flex-col space-y-5 items-center sm:hidden ">
        {menuopen
          ? menuItems.map((items, index) => (
              <div>
                <NavLink
                  key={index}
                  to={items.slug}
                  className={({ isActive }) =>
                    `my-3  text-2xl hover:opacity-45 duration-700  text-black 
                    }`
                  }
                >
                  {items.name}
                </NavLink>
              </div>
            ))
          : ""}
      </div>

{/* desktop nav  */}
      <div
        className={`h-16  w-full bg-green-600 font-bold sm:flex sm:justify-center p-4 sticky top-0  hidden `}
      >
        {menuItems?.map((items, index) => (
          <NavLink
            key={index}
            to={items.slug}
            className={({ isActive }) =>
              `font-semibold mx-3 text-2xl hover:opacity-45 duration-700 ${
                isActive ? "text-orange-700" : "text-gray-900"
              }`
            }
          >
            {items.name}
          </NavLink>
        ))}
      </div>

       
    </>
  );
}

export default Header;

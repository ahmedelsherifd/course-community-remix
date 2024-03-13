import { Link, NavLink } from "@remix-run/react";
import clsx from "clsx";

export function Navigation({
  navigation,
  name,
}: {
  navigation: { name: string; to: string }[];
  name: string;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <div className="bg-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="w-60 flex items-center space-x-4">
            <img
              src="https://i.postimg.cc/Mpt4hFvv/images-1.jpg"
              className="h-8 w-8 rounded-full"
            ></img>
            <h1 className="font-bold ">{name}</h1>
          </div>

          <div className="flex items-center pl-4 sm:ml-6 sm:flex sm:space-x-8">
            {navigation.map((nav) => (
              <NavLink
                key={nav.to}
                to={nav.to}
                end
                className={({ isActive }) =>
                  clsx(
                    isActive
                      ? "border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  )
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Hah = (
  <a
    href="#"
    className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
  >
    Team
  </a>
);

import { Link } from "react-router-dom";
import { CloseIcon, MenuIcon, UserIcon } from "../../assets/icons";
import { useState } from "react";
import clsx from "clsx";

const headerItems = [
  {
    name: "About Us",
    href: "/",
  },
  {
    name: "Featured",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
];

const Header = () => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  return (
    <div className="bg-neutral-100 flex items-center justify-between w-full h-[72px] max-h-[72px] px-5 md:h-20 md:max-h-20 md:px-14 fixed z-20">
      <div className="flex items-center lg:gap-x-20 gap-x-4">
        <Link
          to={"/"}
          onClick={() => showMenuMobile && setShowMenuMobile(false)}
          className="flex items-center w-[144px] md:w-40 cursor-pointer"
        >
          <img
            src="src/assets/images/logo-white.svg"
            alt="logo-white"
            className="object-contain min-w-full"
          />
        </Link>
        <div className="md:flex justify-center items-center hidden ">
          {headerItems.map((item, index) => (
            <Link
              to={item.href}
              key={index}
              className="text-grey-100 eventure-label-5 px-6 whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <button className="md:flex border border-primary-1 rounded-lg justify-center items-center hidden px-4 py-[9px] gap-x-2 whitespace-nowrap hover:opacity-80">
          <UserIcon />
          <p className="text-primary-3 eventure-button-1-semibold items-center">
            Host Login
          </p>
        </button>
        <button className="md:flex hidden items-center bg-primary-1 rounded-lg px-4 py-3 text-[white] eventure-button-1-semibold whitespace-nowrap hover:opacity-80 ml-4">
          Attend an Event
        </button>
        <div onClick={() => setShowMenuMobile(!showMenuMobile)}>
          {showMenuMobile ? (
            <button className="flex items-center justify-center md:hidden">
              <CloseIcon />
            </button>
          ) : (
            <div className="flex justify-center items-center md:hidden bg-gradient-primary rounded-lg w-10 h-10">
              <button className="flex justify-center items-center text-[white] bg-neutral-100 h-9 w-9 rounded-lg">
                <MenuIcon />
              </button>
            </div>
          )}
        </div>
      </div>
      {showMenuMobile && (
        <div className="absolute top-[72px] left-0 right-0 bottom-0 flex flex-col px-5 bg-neutral md:hidden slide-right z-50">
          <div className="flex flex-col justify-center md:hidden py-12">
            {headerItems.map((item, index) => (
              <Link
                to={item.href}
                onClick={() => setShowMenuMobile(false)}
                key={index}
                className={clsx(
                  "text-grey-100 eventure-label-1 whitespace-nowrap py-6",
                  { "border-t border-t-neutral-300": index > 0 }
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button className="md:hidden flex border border-primary-1 rounded-lg justify-center items-center px-4 py-[9px] gap-x-2 whitespace-nowrap hover:opacity-80 flex-1">
              <UserIcon />
              <p className="text-primary-3 eventure-button-1-semibold items-center">
                Host Login
              </p>
            </button>
            <button className="md:hidden flex items-center justify-center bg-primary-1 rounded-lg px-4 py-3 text-[white] eventure-button-1-semibold whitespace-nowrap hover:opacity-80 ml-4 flex-1">
              Attend an Event
            </button>
          </div>
          <div className="flex items-center justify-center w-full mt-8">
            <button className="text-center eventure-button-1-bold text-neutral bg-neutral-500 w-full py-3 rounded-lg hover:opacity-80">
              BOOK A DEMO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

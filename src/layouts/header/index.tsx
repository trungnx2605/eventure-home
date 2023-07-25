import { Personal } from "../../assets/icons";

const Header = () => {
  return (
    <>
      <div className="bg-[#1A1D1F] flex items-center w-full">
        <div className="flex w-1/2 ">
          <div className="flex justify-start items-center my-5 mx-10  ">
            <img
              width={160}
              height={45}
              className="max-w-none "
              src="src/assets/images/logo-white.svg"
              alt="logo-white"
            />
          </div>
          <div className=" md:flex justify-center items-center lg:ml-16 hidden ">
            <a
              href=""
              className="text-grey-100 eventure-label-5 md:px-5 px-4 whitespace-nowrap"
            >
              About Us
            </a>
            <a href="" className="text-grey-100 eventure-label-5 md:px-5 px-4">
              Featured
            </a>
            <a href="" className="text-grey-100 eventure-label-5 md:px-5 px-4">
              Pricing
            </a>
          </div>
        </div>
        <div className="flex w-1/2 justify-end pr-10">
          {" "}
          <button className="md:flex border border-primary-1 rounded-lg items-center hidden ">
            <div className="w-6 h-6 rounded-full bg-primary-1 relative ml-5">
              <Personal className=" ml-4 my-2 absolute left-[-50%] top-[-20%] text-grey-100" />
            </div>
            <p className="text-primary-3 pr-4 pl-2 py-3 eventure-label-3 items-center">
              Host Login
            </p>
          </button>
          <button className="md:flex hidden items-center bg-primary-1 rounded-lg ml-5 px-4 text-grey-100">
            Attend an Event
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;

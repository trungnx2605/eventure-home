const Footer = () => {
  return (
    <>
      <div className="flex bg-grey-400  w-full">
        <div className=" flex w-1/2 mx-10 my-5">
          <img
            width={160}
            height={45}
            src="src/assets/images/logo-Footer.svg"
            alt="logo-Footer"
          />
        </div>
        <div className="w-1/2 lg:flex justify-center items-center hidden ">
          <a href="" className="text-grey-100 py-2 px-8 eventure-label-2">
            Resources
          </a>
          <a href="" className="text-grey-100 py-2 px-8 eventure-label-2">
            Featured
          </a>
          <a href="" className="text-grey-100 py-2 px-8 eventure-label-2">
            Company
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

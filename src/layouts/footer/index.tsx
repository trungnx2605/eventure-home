import { Link } from "react-router-dom";

const footerItems = [
  {
    name: "Resources",
    href: "/",
  },
  {
    name: "Featured",
    href: "/",
  },
  {
    name: "Company",
    href: "/",
  },
];
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between bg-neutral-100 w-screen max-w-screen overflow-hidden px-5 py-5 md:px-14 gap-y-4">
      <img
        width={160}
        height={45}
        src="assets_home/images/logo-Footer.svg"
        alt="logo-Footer"
      />
      <div className="flex items-center justify-end">
        <div className="grid grid-cols-12 w-full md:flex md:gap-x-20 gap-y-4">
          {footerItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="col-span-6 xxs:col-span-4 text-grey-100 eventure-label-5"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

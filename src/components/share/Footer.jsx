import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Logo from "./Logo";


const Footer = () => {
  return (
    <footer className="relative bg-foreground max-w-7xl mx-auto text-gray-300 px-5 md:px-7 pt-10 pb-8 overflow-hidden">
      <div className="relative flex md:flex-row flex-col justify-between">
        {/* Left */}
        <div>
          <Logo></Logo>
          <p className="text-sm mt-3 font-medium leading-snug text-white">
            KinCare helps you easily book trusted and verified <br />
            care services for children, elders, and patients <br />
            with safety, comfort, and complete peace of mind.
          </p>

          <div className="flex gap-6 mt-8 text-sm">
            <a href="#" className="flex items-center gap-1 hover:text-white">
              LinkedIn <FaArrowUpRightFromSquare size={12} />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white">
              Facebook <FaArrowUpRightFromSquare size={12} />
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-white">
              Twitter <FaArrowUpRightFromSquare size={12} />
            </a>
          </div>
        </div>

        <div className="flex gap-5 md:gap-25 md:flex-row flex-col">
          {/* Center */}
          <div className="space-y-2 text-sm">
            <p>support@kincare.com</p>
            <p>care@kincare.com</p>

            <a
              href="#"
              className="inline-flex items-center gap-1 mt-6 hover:text-white"
            >
              Find Care Near You <FaArrowUpRightFromSquare size={12} />
            </a>
          </div>

          {/* Right */}
          <div className="text-sm leading-relaxed">
            <p>
              KinCare Service Center
              <br />
              Dhaka, Bangladesh
            </p>

            <p className="mt-3 font-medium">+880-1XXX-XXXXXX</p>
            <p className="font-medium">24/7 Care Support</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className=" mt-14 md:pt-5 flex flex-col md:flex-row justify-between md:items-center gap-4 text-xs text-gray-400">
        <p>© 2026 KinCare All right reserved</p>
        {/* <div className="divider"></div> */}
        <h1 className=" flex-1 hidden md:block">
          <hr />
        </h1>
        <ul className="flex flex-wrap gap-5">
          <li>
            <a className="hover:text-white" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Book Care
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Caregivers
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              How It Works
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

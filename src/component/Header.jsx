import React, { useEffect, useState } from "react";
import Logo from "../assets/TeamLogo.png";
import { Link } from "react-router-dom";
export default function Header({color}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`fixed top-0 left-0 right-0 z-50 w-full p-4 px-8 ${scrolled || color ? "transition-all duration-300 bg-white shadow-md" : "transition-all duration-300"}`}
    >
      <nav
        className={` 2xl:container mx-auto flex justify-between items-center`}
      >
        <div className="flex items-center">
          <img src={Logo} className="w-12 h-12" alt="لوگو وبسایت" />
          <span
            className={`font-bold font-estead  mr-2 ${scrolled || color ? "text-deep" : "text-[#fff]"}`}
          >
            کلینیک دندان پزشکی نوین
          </span>
        </div>
        <div className="hidden lg:block">
          <ul
            className={`font-estead  flex gap-2 ${scrolled || color ? "text-deep" : "text-[#fff]"}`}
          >
            <li className="hover:text-system cursor-pointer transition-all ease-in-out">
              صفحه اصلی
            </li>
            <li className="hover:text-system cursor-pointer transition-all ease-in-out">
              درباره ما
            </li>
            <li className="hover:text-system cursor-pointer transition-all ease-in-out">
              نوبت دهی
            </li>
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <button
            className={`cursor-pointer hover:bg-[#ffffff1a] transition-all ease-in-out px-5 py-2 hover:rounded-lg ${scrolled || color ? "text-deep" : "text-[#fff]"}`}
          >
            <Link to="/Auth">ورود</Link>
          </button>
          <button className="text-white bg-system hover:bg-teal-600 cursor-pointer transition-all ease-in-out px-5 py-2 rounded-lg">
            ثبت‌نام
          </button>
        </div>
      </nav>
    </section>
  );
}

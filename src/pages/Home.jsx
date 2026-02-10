import React, { useEffect, useState } from "react";
import background from "../assets/landbackground.jpg";
import Logo from "../assets/TeamLogo.png";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import { MdMessage } from "react-icons/md";

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [isHover, setIsHover] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section
        className={`fixed top-0 left-0 right-0 z-50 w-full p-4 px-8 ${scrolled ? "transition-all duration-300 bg-white shadow-md" : "transition-all duration-300"}`}
      >
        <nav
          className={` 2xl:container mx-auto flex justify-between items-center`}
        >
          <div className="flex items-center">
            <img src={Logo} className="w-12 h-12" alt="لوگو وبسایت" />
            <span
              className={`font-bold font-estead  mr-2 ${scrolled ? "text-deep" : "text-[#fff]"}`}
            >
              کلینیک دندان پزشکی نوین
            </span>
          </div>
          <div className="hidden lg:block">
            <ul
              className={`font-estead  flex gap-2 ${scrolled ? "text-deep" : "text-[#fff]"}`}
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
              className={`cursor-pointer hover:bg-[#ffffff1a] transition-all ease-in-out px-5 py-2 hover:rounded-lg ${scrolled ? "text-deep" : "text-[#fff]"}`}
            >
              ورود
            </button>
            <button className="text-white bg-system hover:bg-teal-600 cursor-pointer transition-all ease-in-out px-5 py-2 rounded-lg">
              ثبت‌نام
            </button>
          </div>
        </nav>
      </section>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={background} class="w-full h-full object-cover" alt="" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/50"></div>
        </div>
        <div className="absolute z-40 text-white px-5">
          <div className="text-center">
            <h1 className="text-5xl font-bold">لبخند زیبا، زندگی شاد</h1>
            <p className="mt-3">
              نوبت‌دهی آنلاین دندانپزشکی با سیستم هوشمند یادآوری
            </p>
          </div>
          <div className="text-sm text-center mt-4 flex items-center gap-3 justify-center">
            <button className="bg-system cursor-pointer rounded-md px-4 text-[10px] py-3">
              رزرونوبت آنلاین
            </button>
            <button className="bg-deep-mini cursor-pointer rounded-md px-4 text-[10px] py-3">
              بیشتربدانید
            </button>
          </div>
        </div>
      </section>
      <section className="py-20 2xl:container mx-auto px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <h2 className="text-deep text-4xl font-bold">خدمات ما</h2>
          <p className="text-text mt-2">
            ارائه خدمات دندانپزشکی با بالاترین کیفیت و تکنولوژی روز
          </p>
        </div>
        <div className="grid transition-all ease-in-out duration-300 gap-8 grid-cols-1 lg:grid-cols-3 my-12">
          <div
            onMouseEnter={() => setIsHover(1)}
            onMouseLeave={() => setIsHover(0)}
            className={`bg-white cursor-pointer  ${isHover == 1 ? "shadow-xl" : "shadow-lg"} rounded-xl p-8`}
          >
            <div
              className={`w-16 h-16 ${isHover == 1 ? "bg-system" : "bg-system-soft"} transition-all ease-in-out duration-300  flex justify-center rounded-lg items-center`}
            >
              {
                <FaRegCalendarCheck
                  className={`${isHover == 1 ? "fill-system-soft" : "fill-system"} transition-all ease-in-out duration-300  w-6 h-6`}
                />
              }
            </div>
            <div className="mt-3">
              <h3 className="text-deep font-bold text-lg">نوبت‌دهی آنلاین</h3>
              <p className="text-text mt-1">
                رزرو نوبت آسان و سریع با تقویم هوشمند و یادآوری خودکار
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHover(2)}
            onMouseLeave={() => setIsHover(0)}
            className={`bg-white cursor-pointer ${isHover == 2 ? "shadow-xl" : "shadow-lg"} transition-all ease-in-out duration-300 rounded-xl p-8`}
          >
            <div
              className={`w-16 h-16 ${isHover == 2 ? "bg-system" : "bg-system-soft"} transition-all ease-in-out duration-300  flex justify-center rounded-lg items-center`}
            >
              {
                <RiUserHeartLine
                  className={`${isHover == 2 ? "fill-system-soft" : "fill-system"} transition-all ease-in-out duration-300  w-6 h-6`}
                />
              }
            </div>
            <div className="mt-3">
              <h3 className="text-deep font-bold text-lg">مدیریت بیماران</h3>
              <p className="text-text mt-1">
                ثبت و پیگیری اطلاعات بیماران با سیستم امن و حرفه‌ای
              </p>
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHover(3)}
            onMouseLeave={() => setIsHover(0)}
            className={`bg-white transition-all ease-in-out duration-300 cursor-pointer ${isHover == 3 ? "shadow-xl" : "shadow-lg"} rounded-xl p-8`}
          >
            <div
              className={`w-16 h-16 ${isHover == 3 ? "bg-system" : "bg-system-soft"} transition-all ease-in-out duration-300  flex justify-center rounded-lg items-center`}
            >
              {
                <MdMessage
                  className={`${isHover == 3 ? "fill-system-soft" : "fill-system"} transition-all ease-in-out duration-300  w-6 h-6`}
                />
              }
            </div>
            <div className="mt-3">
              <h3 className="text-deep font-bold text-lg">یادآوری پیامکی</h3>
              <p className="text-text mt-1">
                ارسال خودکار پیامک یادآوری قبل از نوبت ویزیت
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;

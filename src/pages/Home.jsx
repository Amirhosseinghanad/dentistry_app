import React, { useEffect, useState } from "react";
import background from "../assets/landbackground.jpg";
import Logo from "../assets/TeamLogo.png";
import doctor_back from "../assets/doctor_background.jpg";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiUserHeartLine } from "react-icons/ri";
import { MdMessage } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { SiAlwaysdata } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header from "../component/Header";

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
    <Header/>
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
      <section className="py-20 bg-white px-6 2xl:container mx-auto grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-4xl  font-bold text-gray-900 mb-6">
            چرا ما را انتخاب کنید؟
          </h3>
          <div className="mt-8 gap-8 grid grid-cols-1">
            <div className="flex items-center">
              <div className="w-12  flex justify-center items-center bg-system-soft h-12 rounded-lg">
                <MdOutlineSecurity className="fill-system w-6 h-6" />
              </div>
              <div className="mr-4">
                <h3 className="font-bold text-deep text-lg">امنیت اطلاعات</h3>
                <p className="text-text">
                  حفاظت کامل از اطلاعات شخصی و پزشکی بیماران
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex justify-center items-center bg-system-soft  rounded-lg">
                <GoClock className="fill-system w-6 h-6 " />
              </div>
              <div className="mr-4">
                <h3 className="font-bold text-deep text-lg">
                  صرفه‌جویی در زمان
                </h3>
                <p className="text-text">
                  نوبت‌دهی سریع بدون نیاز به تماس تلفنی
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 flex justify-center items-center bg-system-soft  rounded-lg">
                <SiAlwaysdata className="fill-system w-6 h-6" />
              </div>
              <div className="mr-4">
                <h3 className="font-bold text-deep text-lg">گزارش‌گیری دقیق</h3>
                <p className="text-text">
                  دسترسی به آمار و گزارش‌های جامع نوبت‌ها
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={doctor_back}
            className="w-full h-full object-cover"
            alt="تصویر دکتر"
          />
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-br from-teal-500 to-teal-600">
        <div className="2xl:container text-center mx-auto grid gap-12 lg:grid-cols-4">
          <div className="flex gap-2 flex-col items-center justify-center">
            <h1 className="text-white font-black text-6xl">۱۵۰۰+</h1>
            <p className="text-system-soft text-[15px]">بیمار راضی</p>
          </div>
          <div className="flex gap-2 flex-col items-center justify-center">
            <h1 className="text-white font-black text-6xl">۱۰+</h1>
            <p className="text-system-soft text-[15px]">دندانپزشک متخصص</p>
          </div>
          <div className="flex gap-2 flex-col items-center justify-center">
            <h1 className="text-white font-black text-6xl">۵۰۰۰+</h1>
            <p className="text-system-soft text-[15px]">نوبت موفق</p>
          </div>
          <div className="flex gap-2 flex-col items-center justify-center">
            <h1 className="text-white font-black text-6xl">۹۸٪</h1>
            <p className="text-system-soft text-[15px]">رضایت مشتریان</p>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-white text-center">
        <h1 className="text-3xl text-deep font-black">
          آماده برای رزرو نوبت هستید؟
        </h1>
        <p className="text-text mt-6">
          همین حالا نوبت خود را رزرو کنید و از خدمات حرفه‌ای ما بهره‌مند شوید
        </p>
        <button className="bg-system rounded-lg hover:bg-teal-600 cursor-pointer  transition-all duration-300 px-8 py-4 mt-6 text-white">
          رزرونوبت آنلاین
        </button>
      </section>
      <section className="bg-gray-900 text-white py-12 px-6">
        <section className="2xl:container mx-auto ">
          <div className="grid lg:grid-cols-4 gap-8 px-4">
            <div>
              <div className="flex items-center">
                <img src={Logo} className="w-10 h-10" alt="logo" />
                <span className="text-white font-bold text-lg mr-2">
                  کلینیک دندانپزشکی نوین
                </span>
              </div>
              <div className="text-gray-400 text-[12px] mt-3">
                ارائه خدمات دندانپزشکی با بالاترین کیفیت
              </div>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg ">دسترسی سریع</h1>
              <ul className="text-gray-400 text-[14px] mt-3 flex flex-col gap-3">
                <li className="cursor-pointer">صفحه اصلی</li>
                <li className="cursor-pointer">درباره ما</li>
                <li className="cursor-pointer">نوبت دهی</li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg ">خدمات</h1>
              <ul className="text-gray-400 text-[14px] mt-3 flex flex-col gap-3">
                <li className="cursor-pointer">جراحی</li>
                <li className="cursor-pointer">ایمپلنت</li>
                <li className="cursor-pointer">عصب کشی</li>
              </ul>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg ">تماس با ما</h1>
              <ul className="text-gray-400 text-[14px] mt-3 flex flex-col gap-3">
                <li className="cursor-pointer flex items-center">
                  <FaPhone className="ml-2 " />
                  <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
                </li>
                <li className="cursor-pointer flex items-center">
                  <MdEmail className="ml-2 " />
                  <span>info@dental.com</span>
                </li>
                <li className="cursor-pointer flex items-center">
                  <IoLocationSharp className="ml-2 " />
                  <span>ساری-بلوارخزر</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div className="w-[95%] border-b-[1px] border-gray-400 mt-8 flex justify-center mx-auto"></div>
        <div className="mt-6 text-center text-gray-400">
          © ۱۴۰۳ کلینیک دندانپزشکی نوین. تمامی حقوق محفوظ است. | Powered by
          Readdy
        </div>
      </section>
    </>
  );
}
export default Home;

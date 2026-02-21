import React from "react";
import Header from "../component/Header";
import pic from "../assets/matab.jpg";
import { BsAward } from "react-icons/bs";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaHeartbeat } from "react-icons/fa";

import DRWOMEN from "../assets/69ce76e60e2f3777191c20e3718ea606.jpg";

export default function About() {
  return (
    <>
      <Header color={true} />
      <section className="py-20 text-center flex z-50 items-center flex-col mt-16 px-6 bg-gradient-to-br from-teal-500 to-teal-600">
        <h1 className="text-white font-bold text-5xl">درباره ما</h1>
        <p className="text-white font-normal mt-3 text-xl">
          با تیم متخصص و مجرب ما آشنا شوید
        </p>
      </section>
      <section className="grid grid-cols-2 gap-12 py-20 px-16 2xl:container mx-auto">
        <div className="py-6">
          <h1 className="font-bold text-deep text-2xl">
            کلینیک دندانپزشکی نوین
          </h1>
          <p className="text-text text-[16px] mt-6">
            کلینیک دندانپزشکی نوین با بیش از ۱۵ سال سابقه درخشان در ارائه خدمات
            دندانپزشکی، یکی از پیشروترین مراکز تخصصی در کشور است. ما با
            بهره‌گیری از جدیدترین تجهیزات پزشکی و تیمی متشکل از متخصصان مجرب،
            خدمات باکیفیت و استاندارد را به بیماران عزیز ارائه می‌دهیم.
          </p>
          <p className="text-text text-[16px] mt-4">
            هدف ما ایجاد تجربه‌ای دلنشین و راحت برای بیماران در کنار ارائه
            بهترین خدمات درمانی است. سیستم نوبت‌دهی آنلاین ما به شما امکان
            می‌دهد بدون نیاز به تماس تلفنی و در کمترین زمان، نوبت خود را رزرو
            کنید.
          </p>
          <div className="flex text-deep gap-3 text-[18px] my-8">
            <div className="flex items-center gap-1">
              <IoShieldCheckmarkSharp className="fill-system" />
              <span>مجوزهای معتبر</span>
            </div>
            <div className="flex items-center gap-1">
              <BsAward className="fill-system" />
              <span>تیم متخصص</span>
            </div>
          </div>
        </div>
        <div className="w-full h-96 rounded-xl shadow-xl">
          <img
            src={pic}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
      </section>
      <section className="py-10 px-16 text-center flex flex-col gap-12 2xl:container mx-auto">
        <div>
          <h1 className="text-deep font-bold text-3xl">تیم پزشکی ما</h1>
          <p className="my-3 text-text font-medium">
            متخصصان مجرب و دلسوز در خدمت سلامت شما
          </p>
        </div>

        <div className="grid grid-cols-4 gap-12">
          <div className="shadow-lg rounded-b-lg w-64">
            <div className="w-full h-64">
              <img
                src={DRWOMEN}
                alt="dr_image"
                className="rounded-t-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 justify-center p-3 my-3 text-center">
              <span className="text-deep text-lg font-bold">
                دکتر سارا محمدی
              </span>
              <div className="flex flex-col">
                <span className="text-system text-sm">متخصص ارتودنسی</span>
                <span className="text-text text-sm mt-1">۱۲ سال سابقه</span>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-b-lg w-64">
            <div className="w-full h-64">
              <img
                src={DRWOMEN}
                alt="dr_image"
                className="rounded-t-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 justify-center p-3 my-3 text-center">
              <span className="text-deep text-lg font-bold">
                دکتر سارا محمدی
              </span>
              <div className="flex flex-col">
                <span className="text-system text-sm">متخصص ارتودنسی</span>
                <span className="text-text text-sm mt-1">۱۲ سال سابقه</span>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-b-lg w-64">
            <div className="w-full h-64">
              <img
                src={DRWOMEN}
                alt="dr_image"
                className="rounded-t-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 justify-center p-3 my-3 text-center">
              <span className="text-deep text-lg font-bold">
                دکتر سارا محمدی
              </span>
              <div className="flex flex-col">
                <span className="text-system text-sm">متخصص ارتودنسی</span>
                <span className="text-text text-sm mt-1">۱۲ سال سابقه</span>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-b-lg w-64">
            <div className="w-full h-64">
              <img
                src={DRWOMEN}
                alt="dr_image"
                className="rounded-t-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 justify-center p-3 my-3 text-center">
              <span className="text-deep text-lg font-bold">
                دکتر سارا محمدی
              </span>
              <div className="flex flex-col">
                <span className="text-system text-sm">متخصص ارتودنسی</span>
                <span className="text-text text-sm mt-1">۱۲ سال سابقه</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-16 text-center 2xl:container mx-auto">
        <div>
          <h1 className="font-bold text-4xl text-deep">ارزش‌های ما</h1>
          <p className="text-text text-sm my-4">اصولی که ما را متمایز می‌کند</p>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-6">
          <div className="text-center p-8 bg-gradient-to-b flex justify-center gap-8 flex-col items-center from-white to-gray-50 rounded-xl">
            <div className="bg-system-soft rounded-full flex justify-center items-center w-16 h-16 p-3">
              <FaHeartbeat className="w-full fill-system" />
            </div>
            <div>
              <h2 className="text-xl text-deep font-bold">دلسوزی</h2>
              <p className="text-text text-sm my-4">
                رفتار محترمانه و دلسوزانه با تمام بیماران
              </p>
            </div>
          </div>
          <div className="text-center p-8 bg-gradient-to-b flex justify-center gap-8 flex-col items-center from-white to-gray-50 rounded-xl">
            <div className="bg-system-soft rounded-full flex justify-center items-center w-16 h-16 p-3">
              <FaHeartbeat className="w-full fill-system" />
            </div>
            <div>
              <h2 className="text-xl text-deep font-bold">دلسوزی</h2>
              <p className="text-text text-sm my-4">
                رفتار محترمانه و دلسوزانه با تمام بیماران
              </p>
            </div>
          </div>
          <div className="text-center p-8 bg-gradient-to-b flex justify-center gap-8 flex-col items-center from-white to-gray-50 rounded-xl">
            <div className="bg-system-soft rounded-full flex justify-center items-center w-16 h-16 p-3">
              <FaHeartbeat className="w-full fill-system" />
            </div>
            <div>
              <h2 className="text-xl text-deep font-bold">دلسوزی</h2>
              <p className="text-text text-sm my-4">
                رفتار محترمانه و دلسوزانه با تمام بیماران
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-deep py-12 px-16 text-white text-center">
        © ۱۴۰۳ کلینیک دندانپزشکی نوین. تمامی حقوق محفوظ است.
      </section>
    </>
  );
}

import React from "react";
import Header from "../component/Header";
import pic from "../assets/matab.jpg";
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
      <section className="grid grid-cols-2 gap-12 py-20 px-16">
        <div className="py-6">
          <h1 className="font-bold text-deep text-2xl">
            کلینیک دندانپزشکی نوین
          </h1>
          <p className="text-text text-[14px] mt-6">
            کلینیک دندانپزشکی نوین با بیش از ۱۵ سال سابقه درخشان در ارائه خدمات
            دندانپزشکی، یکی از پیشروترین مراکز تخصصی در کشور است. ما با
            بهره‌گیری از جدیدترین تجهیزات پزشکی و تیمی متشکل از متخصصان مجرب،
            خدمات باکیفیت و استاندارد را به بیماران عزیز ارائه می‌دهیم.
          </p>
          <p className="text-text text-[14px] mt-4">
            هدف ما ایجاد تجربه‌ای دلنشین و راحت برای بیماران در کنار ارائه
            بهترین خدمات درمانی است. سیستم نوبت‌دهی آنلاین ما به شما امکان
            می‌دهد بدون نیاز به تماس تلفنی و در کمترین زمان، نوبت خود را رزرو
            کنید.
          </p>
        </div>
        <div className="w-full h-96 rounded-xl shadow-xl">
          <img
            src={pic}
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
      </section>
    </>
  );
}

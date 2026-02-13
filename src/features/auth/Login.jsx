import React from "react";
import background from "../../assets/landbackground.jpg";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="grid relative h-screen   justify-center overflow-hidden  bg-gray-100 grid-cols-2  w-full lg:gap-40">
        <div></div>
        <div className="relative rounded-r-3xl">
          <div className=" w-full absolute  inset-0 bg-teal-950/60 backdrop-blur-xs object-cover rounded-r-3xl"></div>
          <img
            src={background}
            className="w-full h-full rounded-r-3xl  object-cover"
            alt=""
          />
        </div>
        <div className="absolute z-40  bg-white top-60 2xl:container  left-0 right-0 w-[95%] lg:w-[50%] rounded-2xl shadow-xl mx-auto p-12  px-5">
          <div className="px-6 flex justify-between">
            <div>
              <h1 className="text-deep font-bold text-xl">ثبت اطلاعات کاربر</h1>
              <p className="text-text text-[13px] mt-2">
                این اطلاعات فقط برای احرازهویت شما استفاده میشود و نزد ما محفوظ
                است
              </p>
            </div>
            <Link to="/">
              <div className="flex items-center">
                <span className="text-[10px] text-system">بازگشت</span>
                <MdOutlineArrowBack className="fill-system" />
              </div>
            </Link>
          </div>
          <div className="px-6">
            <div className="mt-4">
              <label className="text-text text-[14px]">ایمیل</label>
              <input
                dir="ltr"
                type="text"
                className="focus:outline-solid focus:outline-system focus:outline-2 transition-all duration-100 focus:outline-offset-2 px-2 text-text border mt-3 py-1 rounded-lg border-gray-300 w-full"
              />
            </div>
            <div className="mt-8 mb-3">
              <button className="bg-system text-white rounded-lg w-full py-2 hover:bg-teal-600 cursor-pointer transition-all duration-300 px-4">
                ورود به حساب کاربری
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

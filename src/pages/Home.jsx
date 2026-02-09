import React, { useEffect, useState } from "react";
import background from "../assets/landbackground.jpg";
import Logo from "../assets/TeamLogo.png";

function Home() {
  const [scrolled, setScrolled] = useState(false);

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
        className={`fixed top-0 left-0 right-0 z-50 w-full p-8 ${scrolled ? "transition-all duration-300 bg-white shadow-md" : "transition-all duration-300"}`}
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
          <div>
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
        <div className="absolute z-50 text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold">لبخند زیبا، زندگی شاد</h1>
            <p className="mt-3">
              نوبت‌دهی آنلاین دندانپزشکی با سیستم هوشمند یادآوری
            </p>
          </div>
          <div className="text-sm text-center mt-4 flex items-center gap-3 justify-center">
            <button className="bg-system cursor-pointer rounded-md px-4 text-[10px] py-3">رزرونوبت آنلاین</button>
            <button className="bg-deep-mini cursor-pointer rounded-md px-4 text-[10px] py-3">بیشتربدانید</button>
          </div>
        </div>
      </section>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
      هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
      حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
      شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
      پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
      دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
      نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
      موجود طراحی اساسا مورد استفاده قرار گیرد.
    </>
  );
}
export default Home;

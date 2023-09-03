import Image from "next/image";

export default function ImageBoxLS({sourceimage}) {
  return (
    <>
      <section className="relative w-full min-h-screen md:h-screen flex md:block flex-col justify-start bg-LS-bgOffWhite dark:bg-LS-bgDarkMode-RichBlack duration-500">
        <Image
          src={"/images/lines3.png"}
          alt="hero section background lines"
          priority
          layout="fill"
          quality={100}
          className="pointer-events-none hidden select-none hero-image-bg-lines z-[1]"
        />

        <div className="max-md:hidden">
          <Image
            src={"/images/hero2.png"}
            alt="hero section background"
            priority
            layout="fill"
            quality={100}
            className="opacity-90 pointer-events-none select-none hero-image-bg z-[2]"
          />
        </div>

        <div className="z-[3] max-md:block absolute hidden w-full h-[80vh] bg-LS-bgWhite dark:bg-LS-bgDarkMode-RichBlack opacity-[70%] clipme duration-500"></div>

        <div className="flex z-[3] relative">
          <div className="flex max-md:hidden max-[820px]:hidden max-[1024px]:hidden">
            <Image
              src={sourceimage}
              alt="hero section side image"
              priority
              layout="fill"
              quality={100}
              className="pointer-events-none select-none hero-image mt-[3rem] ml-[4rem] max-md:mt-[4rem]"
            />
          </div>

          <div
            className="
                flex 
                mt-[7rem] 
                pt-32 
                max-md:mt-[-2rem] 
                max-lg:mt-[1.2rem] 
                max-lg:ml-[25%] 
                max-[820px]:mt-[10rem]
                max-[1024px]:mt-[2rem]
                md:pt-0 
                md:top-1/4 
                lg:top-1/4 
                max-w-lg 
                ml-[40%]  
                max-[1024px]:ml-[0%] 
                max-md:ml-[0%]"
          >
            <div className="max-w-2xl z-[4] px-4 ml-8 flex max-md:ml-[0%] max-lg:ml-[25%] flex-col gap-8 md:max-xl:bg-white/30 md:max-xl:rounded-lg">
              <h1 className="-ml-1 text-[#242021] text-4xl max-md:text-4xl max-lg:text-3xl font-semibold font-DmSansBold-Hostinger">
                Legendary Solutions
              </h1>
              <p className="text-gray-700 text-lg max-w-xl max-lg:mt-[-2rem] font-DmSansRegular-Hostinger">
                You need to build a website! but don’t know where to begin.
                Well, Legendary Solutions will help you not only to make the
                website, but also host it on US based servers to create the
                online presence of your dream.
              </p>
              <div className="flex gap-8 font-semibold mt-4 max-lg:mt-[-1rem]">
                <button
                  type="button"
                  className="bg-green-900 active:scale-[0.97] text-cyan-100 hover:bg-green-800 transition rounded-3xl p-2 px-3"
                >
                  Get Your Dream Site
                </button>
                <button
                  type="button"
                  className="text-green-900  hover:bg-orange-200 hover:scale-[1.1] active:scale-[0.97] hover:text-black-800 hover:border-2 h-[50px] w-[150px] transition transform rounded-3xl p-2 px-3"
                >
                  Get Motivated
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="z-[4] relative flex justify-end top-[-2rem]">
          <Image
            src={"/images/boxes2.png"}
            alt="Hero section side image"
            priority
            width={350}
            height={200}
            layout="cover"
            quality={100}
            className="pointer-events-none select-none max-md:h-[12rem] max-md:w-[12rem] mt-[4rem]"
          />
        </div>
        <div className="max-md:block max-md:w-full max-md:h-auto max-[820px]:hidden max-[1024px]:hidden hidden relative">
           <img src={sourceimage} className="h-auto w-full mt-[8rem]" />
          </div>
      </section>
    </>
  );
}
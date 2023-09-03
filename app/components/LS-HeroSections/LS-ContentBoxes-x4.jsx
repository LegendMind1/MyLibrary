// import { MyContext } from "@/app/page";
import Image from "next/image";

// import {useContext} from 'react'

export default function ContentBoxesLS() {
  // const MyContextValues = useContext (MyContext);

  return (
    <>
      <div className="bdrTopGrdToRight container-box">
        <div className="bdrRightGrdToBottom content-box">
          <h2 className="text-3xl font-bold">
            LegendSol Your Own Web Services Provider
          </h2>
          <p className="text-gray-800">
            You need to build a website! but don’t know where to begin. Well,
            Legendary Solutions will help you not only to make the website, but
            also host it on US based servers to create the online presence of
            your dream.
          </p>
          <span className="inline-block bg-red-500 text-white px-2 py-1 rounded">
            What we do?
          </span>

          <div className="z-[4] relative flex justify-end top-[-2rem]">
            <Image
              src={"/images/network06.png"}
              alt="hero section side image"
              priority
              width={350}
              height={200}
              layout="cover"
              quality={100}
              className="pointer-events-none select-none max-md:h-[12rem] max-md:w-[12rem] mt-[4rem]"
            />
          </div>
        </div>
      </div>

      <div className="bdrTopGrdToLeft">
        <div className="bg-[#EEEEEE] p-4 bdrLeftGrdToBottom content-box">
          <h2 className="text-3xl font-bold">
            Reach Optimal Visitor to Client Conversion Rates
          </h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            auctor nisi, in mollis enim rhoncus ut.
          </p>
          <span className="inline-block bg-red-500 text-white px-2 py-1 rounded">
            New
          </span>

          <div className="z-[4] relative flex justify-end top-[-2rem]">
            <Image
              src={"/images/boxes2.png"}
              alt="hero section side image"
              priority
              width={350}
              height={200}
              layout="cover"
              quality={100}
              className="pointer-events-none select-none max-md:h-[12rem] max-md:w-[12rem] mt-[4rem]"
            />
          </div>
        </div>
      </div>

      <div className="bdrTopGrdToRight">
        <div className="bg-[#EEEEEE] p-4 bdrRightGrdToBottom content-box">
          <h2 className="text-3xl font-bold">
            Find Virtual Place for Your Brand Painlessly
          </h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            auctor nisi, in mollis enim rhoncus ut.
          </p>
          <span className="inline-block bg-red-500 text-white px-2 py-1 rounded">
            New
          </span>

          <div className="z-[4] relative flex justify-end top-[-2rem]">
            <Image
              src={"/images/boxes2.png"}
              alt="hero section side image"
              priority
              width={350}
              height={200}
              layout="cover"
              quality={100}
              className="pointer-events-none select-none max-md:h-[12rem] max-md:w-[12rem] mt-[4rem]"
            />
          </div>
        </div>
      </div>

      <div className="bdrTopGrdToLeft">
        <div className="bg-[#EEEEEE] p-4 bdrLeftGrdToBottom content-box">
          <h2 className="text-3xl font-bold">
            Web Servers with Expert Website Services! Never So Reachable Before
          </h2>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam
            auctor nisi, in mollis enim rhoncus ut.
          </p>
          <span className="inline-block bg-red-500 text-white px-2 py-1 rounded">
            New
          </span>

          <div className="z-[4] relative flex justify-end top-[-2rem]">
            <Image
              src={"/images/boxes2.png"}
              alt="hero section side image"
              priority
              width={350}
              height={200}
              layout="cover"
              quality={100}
              className="pointer-events-none select-none max-md:h-[12rem] max-md:w-[12rem] mt-[4rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
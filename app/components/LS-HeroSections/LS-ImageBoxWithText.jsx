import Image from "next/image";
export default function ImageBoxWithText ({sourceimage, txtTitle, txtDesc, reverse, txtBgColor}) {
  return (
    <>
      {/* <div className="mx-auto max-w-md overflow-hidden rounded-xl bg-gray-50 shadow-lg md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-52 pointer-events-none select-none w-full md:h-full md:w-48"
              src={sourceimage}
              // layout="intrinsic"
              quality={100}
              height={1000}
              width={1000}
              alt="My image alt description"
            />
          </div>

          <div className="p-8">
            <a
              href="#"
              className="mt-1 block text-lg font-bold leading-tight text-gray-800"
            >
              My incredible blog post
            </a>

            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              accumsan eros elementum massa dignissim.
            </p>
          </div>
        </div>
      </div> */}


      <div className="mx-6 max-w-full overflow-hidden rounded-xl bg-white dark:bg-LS-bgDarkMode-RichBlack shadow-xl md:max-w-full">
        <div className={`md:flex justify-between ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="md:shrink-0 flex flex-1">
            <Image
              className="!h-[100%] w-full pointer-events-none select-none max-md:!w-full"
              src={sourceimage}
              layout="responsive"
              quality={100}
              width={1}
              height={1}
              // objectFit="fill"
              // objectPosition="5%"
              alt="My image alt description"
            />
          </div>

            <div className={`pl-2 py-4 pr-4 flex-1 flex items-center ${txtBgColor}`}>
              <div className="flex-col px-20 max-md:px-4 text-justify">
              <a
                href="#"
                className="mt-1 block text-2xl font-DmSansBold-Hostinger font-bold leading-tight text-LS-textHeading-OxfordBlue"
              >
                {txtTitle}
              </a>

              <p className="mt-2 text-lg font-sans text-LS-text-RaisinBlack">
                {txtDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
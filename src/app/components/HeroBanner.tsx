import Image from "next/image";
const img =
  "https://media.licdn.com/dms/image/D5603AQGilJ-VR_5FQg/profile-displayphoto-shrink_400_400/0/1688290126126?e=1701302400&v=beta&t=uxZJM8IMTm4IPM0WKUj02dcX_RjjRRCE_Ky7e2Ppz8Q";
//"https://pps.whatsapp.net/v/t61.24694-24/370645523_818488016423867_7051621213904051498_n.jpg?ccb=11-4&oh=01_AdTvOi6u8L705XlcUIwjJH9NBVt0WYHeCyep47hpw4bGnA&oe=65202080&_nc_sid=000000&_nc_cat=110";
const HeroBanner = () => {
  return (
    <div className="bg-gray-100 w-screen md:h-screen text-gray-900 p-4">
      <div className="max-w-[950px] mx-auto pt-40">
        <div className="text-center md:text-left mx-auto grid items-center  md:grid-cols-2">
          <div className="mt-10 ">
            <span className="font-bold text-5xl">
              Front-End React Developer
            </span>{" "}
            <div className="relative inline-block md:w-[50px] md:h-[50px] ">
              <Image src={"/waving.png"} alt="" fill />
            </div>
            <br />
            <br />
            <br />
            <span className="text-lg text-gray-700">
              Hi, I'm Thirulogachandar. A passionate Front-end React Developer
              based in Chennai, India. 📍
            </span>
            <br />
            <br />
            <div>
              <div>Github </div>
              <div>Linkedin </div>
            </div>
          </div>
          <div className="order-first md:order-last  flex justify-end items-center">
            <div className="overflow-hidden border-4 border-black w-[370px] h-[370px] relative  animate-morph P-2">
              <Image src={img} alt="" fill />
            </div>
          </div>
        </div>

        <div className=" text-gray-700 justify-center md:justify-start text-xl w-full mx-auto block md:flex  items-center mt-12">
          <div className="text-center">Tech Stack |</div>
          <div className="flex justify-center md:justify-start m-4 md:m-0">
            <div className="flex items-center justify-center ">
              <div className="relative w-[40px] h-[40px] md:w-[40px] md:h-[60px] mx-2">
                <Image src={"/waving.png"} alt="" fill />
              </div>
              <div className="relative w-[40px] h-[40px] md:w-[40px] md:h-[60px] mx-2">
                <Image src={"/waving.png"} alt="" fill />
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <div className="relative w-[40px] h-[40px] md:w-[40px] md:h-[60px] mx-2">
                <Image src={"/waving.png"} alt="" fill />
              </div>
              <div className="relative w-[40px] h-[40px] md:w-[40px] md:h-[60px] mx-2">
                <Image src={"/waving.png"} alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

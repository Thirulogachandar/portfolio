import { AiOutlineMail } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="max-w-[950px] font-bold mx-auto p-4 py-44 text-2xl">
      <div>
        <div className="text-blue-500">Contact</div>

        <div className=" text-gray-700 font-bold">
          Don't be shy! Hit me up! 👇
        </div>
      </div>
      <div className="md:flex items-center md:space-x-40 mt-10 ">
        <div className=" flex items-center space-x-4 text-base font-normal mt-5">
          <div className="text-2xl border-1 w-16 h-16 justify-self-end bg-white shadow-lg text-blue-500 flex  justify-center items-center border-1 rounded-full">
            <FaMapLocationDot />
          </div>
          <div>
            <div className="font-extrabold text-lg">Location</div>
            <div className="text-grey-400">Chennai, India</div>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-base font-normal mt-5">
          <div className="border-1 text-2xl w-16 h-16 justify-self-end bg-white shadow-lg text-blue-500 flex  justify-center items-center border-1 rounded-full">
            <AiOutlineMail />
          </div>
          <div>
            <div className="font-extrabold text-lg">Mail</div>
            <div className="text-grey-400">thirulogachandarkt@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

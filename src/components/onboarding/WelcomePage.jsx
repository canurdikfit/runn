import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Username from "./Username";

const WelcomePage = ({ heading, description, icon, idx, index, next }) => {
  const handleNext = () => {
    next.current.swiper.slideNext();
  };
  console.log(next);
  return (
    <div className={`pt-10 flex flex-col ${index <= 2 && 'gap-20 md:gap-10'} h-full max-w-sm mx-auto min-h-[780px] md:min-h-[700px] justify-between`}>
      <div>
        <h2 className="text-xl font-semibold">{heading}</h2>
        <p
          className={`${
            index <= 2 ? "mt-3" : ""
          } dark:text-[#C1BFBF] text-[#414141] text-sm`}
        >
          {description}
        </p>
      </div>
      {icon ? (
        <div className="bg-black dark:bg-dark_primary h-[400px] rounded-3xl flex flex-col justify-end pb-4 px-4 mt-20">
          <div
            className={`relative object-contain mt-auto  mb-14 ${
              index == 0 && "h-[240px]"
            } ${index == 1 && "h-[200px]"} ${index == 2 && "h-[180px]"}`}
          >
            <Image src={icon} sizes="100%" fill={true} alt="icon" />
          </div>
          <div className="flex relative justify-end">
            <div className="flex w-full gap-2 items-center justify-center absolute h-full z-0">
              {idx.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full inline-block ${
                    index == i ? "bg-white" : "bg-[#767676]"
                  } ${i === 3 && "hidden"}`}
                ></span>
              ))}
            </div>
            <div className="relative z-10">
              <button
                className="text-xl p-5 rounded-xl bg-white text-black dark:text-black"
                onClick={() => handleNext()}
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Username />
      )}
    </div>
  );
};

export default WelcomePage;

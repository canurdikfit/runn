import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import Otp from "@/assets/otp.svg";
import Image from "next/image";
import OtpInput from "@/components/onboarding/OtpInput";

function page() {
  return (
    <main className="px-5 pt-10 min-h-screen dark:bg-[#131721] bg-[#f5f5f5] flex flex-col">
      <div>
        <div>
          <Link
            href={"/onboarding"}
            className="text-xl text-black dark:text-white"
          >
            {" "}
            <FaArrowLeftLong />
          </Link>
        </div>
        <div className="mt-9 grid gap-5 items-center justify-center text-center">
          <div className="mx-auto p-3 rounded-xl bg-primary dark:bg-dark_primary">
            <div className="relative object-contain h-11 w-11">
              <Image
                className="invert dark:invert-0"
                src={Otp}
                fill={true}
                sizes="100%"
                alt="otp icon"
              />
            </div>
          </div>
          <h1 className="text-xl text-black dark:text-white font-semibold">
            We’ve sent a 6-digit OTP to
            <br />
            johndoe@gmail.com
          </h1>
        </div>
        <span className="max-w-sm mx-auto mt-14 text-[#3A4452] dark:text-[#EBEBEB] text-base mb-4 block">
          Input code
        </span>
      </div>

      <OtpInput />
    </main>
  );
}

export default page;

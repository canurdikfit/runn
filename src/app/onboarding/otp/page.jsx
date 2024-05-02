"use client";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import Otp from "@/assets/otp.svg";
import Image from "next/image";
import { useState } from "react";
import OtpInput from "@/components/onboarding/OtpInput";

function page() {
  const [otp, setOtp] = useState("");
  const handleOtpComplete = (otpValue) => {
    setOtp(otpValue);
    // Perform the verification logic here
    // console.log("OTP entered:", otpValue);
  };

  return (
    <main className="px-5 pt-10 min-h-screen grid items-start dark:bg-[#131721] bg-[#f5f5f5]">
      <section>
        <div>
          <div>
            <Link href={"/onboarding"} className="text-xl">
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
        </div>
        <div className="mt-14 max-w-sm mx-auto">
          <span className="text-[#3A4452] dark:text-[#EBEBEB] text-base mb-4 inline-block">
            Input code
          </span>
          <OtpInput length={6} onComplete={handleOtpComplete} />
        </div>
      </section>
      <div className="mt-auto w-full h-fit grid items-center gap-5 text-center pb-20 max-w-sm mx-auto">
        {/* <button
          type="submit"
          className={`bg-black text-white py-4 font-semibold rounded-xl ${
            otp.length ? "opacity-100" : "opacity-50"
          }`}
          onClick={(e) => {
            if (!otp.length) {
              e.preventDefault();
            } else {
              console.log("working");
            }
          }}
        >
          Continue
        </button> */}
        {/* Link should be removed during integration */}
        <Link
          href={"/onboarding/welcome"}
          className={`bg-black text-white py-4 font-semibold rounded-xl text-center block ${
            otp.length ? "opacity-100" : "opacity-50"
          }`}
          onClick={(e) => {
            if (!otp.length) {
              e.preventDefault();
            }
          }}
        >
          Continue
        </Link>
        <Link
          href={"/"}
          className="text-black dark:text-white text-base font-semibold"
        >
          Resend OTP
        </Link>
      </div>
    </main>
  );
}

export default page;

"use client";
import React, { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";

const OtpInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="max-w-sm mx-auto w-full flex flex-col justify-between gap-32 flex-grow">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup className="flex w-full justify-between">
          <InputOTPSlot
            index={0}
            className="h-[50px] w-[50px] rounded-lg text-xl border-transparent text-black dark:text-white bg-primary dark:bg-dark_primary"
          />
          <InputOTPSlot
            index={1}
            className="h-[50px] w-[50px] rounded-lg text-xl border-transparent text-black dark:text-white bg-primary dark:bg-dark_primary"
          />
          <InputOTPSlot
            index={2}
            className="h-[50px] w-[50px] rounded-lg text-xl border-transparent text-black dark:text-white bg-primary dark:bg-dark_primary"
          />
          <InputOTPSlot
            index={3}
            className="h-[50px] w-[50px] rounded-lg text-xl border-transparent text-black dark:text-white bg-primary dark:bg-dark_primary"
          />
          <InputOTPSlot
            index={4}
            className="h-[50px] w-[50px] rounded-lg text-xl border-transparent text-black dark:text-white bg-primary dark:bg-dark_primary"
          />
          <InputOTPSlot
            index={5}
            className="h-[50px] w-[50px] rounded-lg text-xl border-transparent text-black dark:text-white bg-primary dark:bg-dark_primary"
          />
        </InputOTPGroup>
      </InputOTP>
      <div className="mt-auto w-full h-fit grid items-center gap-5 text-center pb-10 max-w-sm mx-auto">
        {/* <button
          type="submit"
          className={`bg-black text-white py-4 font-semibold rounded-xl ${
            value.length == 6 ? "opacity-100" : "opacity-50"
          }`}
          onClick={(e) => {
            if (!value.length == 6) {
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
            value.length == 6 ? "opacity-100" : "opacity-50"
          }`}
          onClick={(e) => {
            if (!value.length == 6) {
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
    </div>
  );
};

export default OtpInput;

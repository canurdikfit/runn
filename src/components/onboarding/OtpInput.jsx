"use client";
import React, { useState } from "react";

const OtpInput = ({ length = 6, onComplete }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) return; // Ensure only one digit

    const newOtp = [...otp];
    newOtp[index] = value;

    setOtp(newOtp);

    if (index < length - 1 && value) {
      // Move focus to the next input
      e.target.nextElementSibling?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      // If all digits are filled, trigger the onComplete callback
      onComplete(newOtp.join(""));
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      e.target.previousElementSibling?.focus();
    }
  };

  return (
    <div className="grid gap-3 justify-between grid-cols-6">
      {otp.map((_, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleBackspace(e, index)}
          className="text-black dark:text-white bg-primary dark:bg-dark_primary border border-transparent focus:border-black dark:focus:border-white outline-none text-xl text-center h-14 w-full rounded-lg transition-colors ease-in-out duration-200"
        />
      ))}
    </div>
  );
};

export default OtpInput;

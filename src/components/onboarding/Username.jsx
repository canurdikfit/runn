import Link from "next/link";
import React from "react";

function Username() {
  return (
    <div className="mt-5 flex flex-col flex-grow">
      <input
        type="text"
        placeholder="Username"
        className="w-full bg-primary dark:bg-dark_primary px-5 py-4 text-[#727272] outline-none border border-transparent focus:border-[#A8A8A8] dark:focus:border-[#292929] rounded-xl transition-colors ease-out duration-500"
      />
      <div className="mt-auto">
        {/* <button
          type="submit"
          className="bg-black w-full text-white py-4 font-semibold rounded-xl"
        >
          Continue
        </button> */}
        {/* Link should be removed during integration */}
        <Link
          href={"/dashboard"}
          className={`bg-black text-white py-4 font-semibold rounded-xl text-center block`}
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

export default Username;

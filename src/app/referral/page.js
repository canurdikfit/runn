import Link from "next/link";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

function page() {
  return (
    <main className="px-5 pt-10 min-h-screen grid items-start dark:bg-[#131721] bg-[#f5f5f5]">
      <section>
        <div>
          <div>
            <Link href={"/dashboard"} className="text-xl text-black dark:text-white">
              {" "}
              <FaArrowLeftLong />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;

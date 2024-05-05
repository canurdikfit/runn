import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/foundation.svg";
import SocialLogin from "@/components/onboarding/SocialLogin";

export default function Onboarding() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2 items-center md:h-screen gap-10 dark:bg-[#131721] bg-[#f5f5f5]">
      <div className="min-h-96 h-full pt-24 pb-12 grid item-center justify-center gap-7 dark:bg-dark_primary bg-primary rounded-b-[40px] lg:flex lg:flex-col lg:rounded-none text-center text-black dark:text-white">
        <div className="object-contain h-40 w-40 mx-auto relative">
          <Image
            className="invert dark:invert-0"
            src={Logo}
            fill={true}
            sizes="100%"
            alt="Logo"
          />
        </div>
        <h1 className="text-2xl font-bold">Welcome to Foundation</h1>
        <p className="text-sm tracking-[5px]">THE Web3 STANDARD</p>
      </div>
      <div className="px-5 grid gap-5">
        <form className="grid gap-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-primary dark:bg-dark_primary px-5 py-4 text-[#727272] outline-none border border-transparent focus:border-[#A8A8A8] dark:focus:border-[#292929] rounded-xl transition-colors ease-out duration-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-primary dark:bg-dark_primary px-5 py-4 text-[#727272] outline-none border border-transparent focus:border-[#A8A8A8] dark:focus:border-[#292929] rounded-xl transition-colors ease-out duration-500"
          />
          <input
            type="text"
            placeholder="Referral (optional)"
            className="w-full bg-primary dark:bg-dark_primary px-5 py-4 text-[#727272] outline-none border border-transparent focus:border-[#A8A8A8] dark:focus:border-[#292929] rounded-xl transition-colors ease-out duration-500"
          />
          {/* <button
            type="submit"
            className="bg-black text-white py-4 font-semibold rounded-xl"
          >
            Sign Up
          </button> */}
          {/* Link should be removed during integration */}
          <Link
            href={"/onboarding/otp"}
            className="bg-black text-white block py-4 font-semibold rounded-xl text-center"
          >
            Sign Up
          </Link>
        </form>
       <SocialLogin/>
        <div className="mt-10 pb-7 text-sm text-black dark:text-white">
          <center>
            By continuing, you agree to our{" "}
            <Link href={"/"} className="text-[#17A0AF] dark:text-[#15BDCF]">
              terms of service
            </Link>{" "}
            <br /> and{" "}
            <Link href={"/"} className="text-[#17A0AF] dark:text-[#15BDCF]">
              privacy policy
            </Link>
          </center>
        </div>
      </div>
    </main>
  );
}

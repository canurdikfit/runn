import Link from "next/link";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SocialLogin() {
  return (
    <div className="text-center grid gap-4 mt-auto">
      <span className="text-sm text-[#6A6A6A]">Or continue with</span>
      <div className="flex items-center justify-center gap-4">
        <Link
          href={"/"}
          className="text-3xl p-2 border border-[#A8A8A8] text-black dark:text-white dark:border-[#292929] rounded-lg bg-primary dark:bg-dark_primary"
        >
          <FaApple />
        </Link>
        <Link
          href={"/"}
          className="text-3xl p-2 border border-[#A8A8A8] dark:border-[#292929] rounded-lg bg-primary dark:bg-dark_primary"
        >
          <FcGoogle />
        </Link>
      </div>
    </div>
  );
}

export default SocialLogin;

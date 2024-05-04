import Profile from "@/assets/profile.png";
import HeaderDropdown from "./HeaderDropdown";
import Image from "next/image";

function Header() {
  return (
    <div className="px-5 py-5 dark:bg-[#131721] bg-[#f5f5f5] flex justify-between items-center w-full fixed inset-x-0 top-0 left-0 z-50">
      <div className="flex items-center gap-2.5">
        <div className="h-12 w-12 rounded-lg bg-[#14BBCC] flex items-center justify-center">
          <Image src={Profile} height={35} width={35} alt="profile" />
        </div>
        <h3 className="text-base font-semibold text-black dark:text-white">
          Itseghosime
        </h3>
      </div>
      <HeaderDropdown />
    </div>
  );
}

export default Header;

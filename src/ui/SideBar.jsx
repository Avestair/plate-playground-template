import Link from "next/link";
import { PiHouseDuotone } from "react-icons/pi";

export default function SideBar() {
  return (
    <div className="grid fixed bottom-[50%] right-4 gap-4 rounded-lg z-99 text-gray-700 dark:text-white dark:bg-black dark:border-white border bg-gray-100 p-2">
        <Link href={"/"} className="grid justify-items-center gap-1">
            <PiHouseDuotone className="size-6" />
            <span className="text-sm">Home</span>
        </Link>

        <div className="grid justify-items-center gap-1">
            <PiHouseDuotone className="size-6" />
            <span className="text-sm"></span>
        </div>
    </div>
  )
}

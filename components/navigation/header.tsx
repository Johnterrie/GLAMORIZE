import Image from "next/image";
import { NavData } from "@/data";
import { Input } from "../ui/input";

export default function Header() {
  return (
    <div className="h-[84px] w-full flex justify-center items-center bg-W900 ">
      <div className="w-[1116px] h-full flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Image src="/Logomark.png" width={40} height={40} alt="Logomark.png" />
          <span className="text-extraBold font-extrabold ml-[10px] text-B900">Glamorize</span>
        </div>

        <div className="w-[337px] h-[25px] flex justify-between items-center ">
          {NavData.map((result) => {
            return (
                <div key={result.id}>{result.name}</div>
            )
          })}
        </div>

        <div className="w-[370px] h-[45px] flex items-center justify-between">
          <Input className="w-[264px] h-[45px] pl-[]" placeholder="Search products"/>
          <Image src="/Cart.png" width={18} height={18}  alt="" />
          <Image src="/User.png" width={24} height={24}  alt=""/>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Header() {
  return (
    <div className="h-[84px] w-full flex justify-center items-center bg-W900 ">
       <div className="w-[1116px] h-full border-blue-700 border-2 flex justify-between items-center">
        <div className="flex justify-center items-center">
            <Image src="/Logomark.png" width={40} height={40} alt="Logomark.png"/>
            <span className="text-extraBold font-extrabold ml-[10px] text-B900">Glamorize</span>
        </div>

        <div className="">

        </div>

       </div>
    </div>
  );
}

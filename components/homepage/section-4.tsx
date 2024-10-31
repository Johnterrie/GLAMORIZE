import Image from "next/image";

export default function SectionFour() {
    return (
      <div className="relative w-full h-[304px] bg-gradient-to-r from-W100 to-W900 flex justify-center items-center">
        <div className=" relative w-[1116px] h-[full] flex items-center justify-between">
            <div className="relative h-3/4">
                <h1 className="relative text-semiBold font-extrabold">Browse Our Fashion Paradise!</h1>
                <p className="relative text-regular">Step into a world of style and explore our diverse collection of clothing categories.</p>

                <div className="relative w-[183px] h-[44px] flex justify-center items-center mt-[25px] rounded text-W900 bg-B900">
                    <p>Start Browsing</p>
                    <Image src="/Arrow Right.png" width={24} height={24} alt="Arrow Right"/>
                </div>
            </div>
            <div className="relative">
                <Image src="/Category Image.png" alt="man picture" width={255} height={382} className="relative"/>
            </div>
        </div>
      </div>
    );
  }